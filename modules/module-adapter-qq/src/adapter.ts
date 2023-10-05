/*
 * @Author: Hotaru biyuehuya@gmail.com
 * @Blog: https://hotaru.icu
 * @Date: 2023-09-29 14:31:09
 * @LastEditors: Hotaru biyuehuya@gmail.com
 * @LastEditTime: 2023-09-30 16:59:39
 */
import { Adapter, Events, Msg, isObj } from '@kotori-bot/kotori';
import WebSocket from 'ws';
import QQApi from './api';
import WsServer from './services/wsserver';
import { EventDataType, Iconfig, IconfigWs } from './type';

function checkConfig(config: any): config is Iconfig {
	if (!isObj(config)) return false;
	if (typeof config.port !== 'number') return false;
	if (config.mode === 'ws') {
		return typeof config.retry === 'number' && typeof config.address === 'string';
	}
	if (config.mode === 'ws-reverse') {
		return true;
	}
	return false;
}

export default class QQAdapter extends Adapter<QQApi> {
	protected Api: QQApi;

	public readonly platform: string = 'QQ';

	public declare config: Iconfig;

	public constructor(config: object) {
		super(config);
		if (!checkConfig(config)) throw new Error('config error');
		this.config = config;
		this.Api = new QQApi(this as Adapter<QQApi>);
	}

	public handle = (data: EventDataType) => {
		if (data.post_type === 'message' && data.message_type === 'private') {
			Events.emit({
				type: 'private_msg',
				userId: data.user_id,
				messageId: data.message_id,
				message: data.message,
				sender: {
					nickname: data.sender.nickname,
					age: data.sender.age,
					sex: data.sender.sex,
				},
				groupId: data.group_id,
				...this.func(data),
			});
			// this.status.receivedMsg += 1;
		} else if (data.post_type === 'message' && data.message_type === 'group') {
			Events.emit({
				type: 'group_msg',
				userId: data.user_id,
				messageId: data.message_id,
				message: data.message,
				sender: {
					nickname: data.sender.nickname,
					age: data.sender.age,
					sex: data.sender.sex,
				},
				groupId: data.group_id!,
				...this.func(data),
			});
			// this.status.receivedMsg += 1;
		} else if (data.post_type === 'notice' && data.notice_type === 'private_recall') {
			Events.emit({
				type: 'private_recall',
				userId: data.user_id,
				messageId: data.message_id,
				...this.func(data),
			});
		} else if (data.post_type === 'notice' && data.notice_type === 'group_recall') {
			Events.emit({
				type: 'group_recall',
				userId: data.user_id,
				messageId: data.message_id,
				groupId: data.group_id!,
				operatorId: data.operator_id || data.user_id,
				...this.func(data),
			});
		} else if (data.post_type === 'request' && data.request_type === 'private') {
			Events.emit({
				type: 'private_request',
				userId: data.user_id,
				...this.func(data),
			});
		} else if (data.post_type === 'request' && data.request_type === 'group') {
			Events.emit({
				type: 'group_request',
				userId: data.user_id,
				groupId: data.group_id!,
				operatorId: data.operator_id || data.user_id,
				...this.func(data),
			});
		} else if (data.post_type === 'notice' && data.notice_type === 'private_add') {
			Events.emit({
				type: 'private_add',
				userId: data.user_id,
				...this.func(data),
			});
		} else if (data.post_type === 'notice' && data.notice_type === 'group_increase') {
			Events.emit({
				type: 'group_increase',
				userId: data.user_id,
				groupId: data.group_id!,
				operatorId: data.operator_id || data.user_id,
				...this.func(data),
			});
		} else if (data.post_type === 'notice' && data.notice_type === 'group_decrease') {
			Events.emit({
				type: 'group_decrease',
				userId: data.user_id,
				groupId: data.group_id!,
				operatorId: data.operator_id || data.user_id,
				...this.func(data),
			});
		} else if (data.post_type === 'notice' && data.notice_type === 'group_admin') {
			Events.emit({
				type: 'group_admin',
				userId: data.user_id,
				groupId: data.group_id!,
				operation: data.sub_type === 'set' ? 'set' : 'unset',
				...this.func(data),
			});
		} else if (data.post_type === 'notice' && data.notice_type === 'group_ban') {
			Events.emit({
				type: 'group_ban',
				userId: data.user_id,
				groupId: data.group_id!,
				operatorId: data.operator_id,
				time: data.duration!,
				...this.func(data),
			});
		} else if (data.post_type === 'meta_event' && data.meta_event_type === 'heartbeat') {
			if (data.status.online) {
				this.online();
				if (this.onlineTimerId) clearTimeout(this.onlineTimerId);
			}
		}
		if (!this.onlineTimerId) this.onlineTimerId = setTimeout(() => this.offline, 50 * 1000);
	};

	public start = async () => {
		Events.emit({
			type: 'connect',
			adapter: this,
			normal: true,
		});
		this.connectWss();
	};

	public stop = () => {
		Events.emit({
			type: 'connect',
			adapter: this,
			normal: false,
		});
		this.socket?.close();
		this.offline();
	};

	private socket: WebSocket | null = null;

	private connectWss = async () => {
		if (this.config.mode === 'ws-reverse') {
			this.socket = await WsServer(this.config.port);
		} else {
			this.socket = new WebSocket(`${this.config.address}:${this.config.port}`);
			this.socket.on('close', () => {
				setTimeout(
					() => {
						if (!this.socket) return;
						this.socket.close();
						Events.emit({
							type: 'connect',
							adapter: this,
							normal: false,
						});
						this.connectWss();
					},
					(this.config as IconfigWs).retry * 1000,
				);
			});
		}
		this.socket.on('message', data => this.handle(JSON.parse(data.toString())));
	};

	private func = (data: EventDataType) => {
		const send = (message: Msg) => {
			if (data.message_type === 'group') {
				this.api.send_group_msg(message, data.group_id!);
			} else {
				this.api.send_private_msg(message, data.user_id);
			}
		};
		return { send, api: this.api };
	};

	private onlineTimerId: NodeJS.Timeout | null = null;
}