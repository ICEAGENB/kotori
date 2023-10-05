import Adapter from './adapter';
import Api from './api';
import Core from './core';
import { Msg } from './message';
import { ImoduleStack } from './modules';

interface eventDataBase<T extends keyof IeventList> {
	type: T;
}

interface eventDataConnect extends eventDataBase<'connect'> {
	normal: boolean;
	adapter: Adapter;
}

interface eventDataDisconnect extends eventDataBase<'disconnect'> {
	normal: boolean;
	adapter: Adapter;
}

interface eventDataReady extends eventDataBase<'ready'> {
	adapter: Adapter;
}

interface eventDataReadyAll extends eventDataBase<'ready_all'> {
	adapters: Adapter[];
}

interface eventDataLoadModule extends eventDataBase<'load_module'> {
	module: ImoduleStack | null;
}

interface eventDataUnloadModule extends eventDataBase<'unload_module'> {
	module: ImoduleStack | null;
}

type eventDataMsgSenderSex = 'male' | 'female' | 'unknown';
type eventDataOperation = 'set' | 'unset';

interface eventDataMsgSender {
	nickname: string;
	sex: eventDataMsgSenderSex;
	age: number;
}

interface eventDataAdapterBase<T extends keyof IeventList> extends eventDataBase<T> {
	userId: number;
	send: (message: Msg) => void | Promise<unknown>;
	locale: (val: string) => string;
	api: Api;
}

export interface eventDataPrivateMsg<T extends keyof IeventList = 'private_msg'> extends eventDataAdapterBase<T> {
	messageId: number;
	message: string;
	messageH?: object;
	sender: eventDataMsgSender;
	groupId?: number;
}

export interface eventDataGroupMsg extends eventDataPrivateMsg<'group_msg'> {
	groupId: number;
}

interface eventDataPrivateRecall extends eventDataAdapterBase<'private_recall'> {
	messageId: number;
}

interface eventDataGroupRecall extends eventDataAdapterBase<'group_recall'> {
	messageId: number;
	groupId: number;
	operatorId: number;
}

interface eventDataPrivateRequest extends eventDataAdapterBase<'private_request'> {
	userId: number;
}

interface eventDataGroupRequest extends eventDataAdapterBase<'group_request'> {
	userId: number;
	groupId: number;
	operatorId: number;
}

interface eventDataPrivateAdd extends eventDataAdapterBase<'private_add'> {
	userId: number;
}

interface eventDataGroupIncrease<T extends keyof IeventList = 'group_increase'> extends eventDataAdapterBase<T> {
	userId: number;
	groupId: number;
	operatorId: number;
}

interface eventDataGroupDecrease extends eventDataGroupIncrease<'group_decrease'> {}

interface eventDataGroupAdmin extends eventDataAdapterBase<'group_admin'> {
	userId: number;
	groupId: number;
	operation: eventDataOperation;
}

interface eventDataGroupBan extends eventDataAdapterBase<'group_ban'> {
	userId: number | 0;
	operatorId?: number;
	groupId: number;
	time?: number | -1;
}

export interface eventType {
	connect: eventDataConnect;
	disconnect: eventDataDisconnect;
	ready: eventDataReady;
	ready_all: eventDataReadyAll;
	load_module: eventDataLoadModule;
	unload_module: eventDataUnloadModule;
	private_msg: eventDataPrivateMsg;
	group_msg: eventDataGroupMsg;
	private_recall: eventDataPrivateRecall;
	group_recall: eventDataGroupRecall;
	private_request: eventDataPrivateRequest;
	group_request: eventDataGroupRequest;
	private_add: eventDataPrivateAdd;
	group_increase: eventDataGroupIncrease;
	group_decrease: eventDataGroupDecrease;
	group_admin: eventDataGroupAdmin;
	group_ban: eventDataGroupBan;
}

export type eventCallback<T extends keyof eventType> = (data: eventType[T]) => void | Msg;

export interface IeventList {
	connect: eventCallback<'connect'>[];
	disconnect: eventCallback<'disconnect'>[];
	ready: eventCallback<'ready'>[];
	ready_all: eventCallback<'ready_all'>[];
	load_module: eventCallback<'load_module'>[];
	unload_module: eventCallback<'unload_module'>[];
	private_msg: eventCallback<'private_msg'>[];
	group_msg: eventCallback<'group_msg'>[];
	private_recall: eventCallback<'private_recall'>[];
	group_recall: eventCallback<'group_recall'>[];
	private_request: eventCallback<'private_request'>[];
	group_request: eventCallback<'group_request'>[];
	private_add: eventCallback<'private_add'>[];
	group_increase: eventCallback<'group_increase'>[];
	group_decrease: eventCallback<'group_decrease'>[];
	group_admin: eventCallback<'group_admin'>[];
	group_ban: eventCallback<'group_ban'>[];
}

export type eventListenerFunc = <T extends keyof eventType>(type: T, callback: eventCallback<T>) => boolean;

export class Events extends Core {
	private static eventStack: IeventList = {
		connect: [],
		disconnect: [],
		ready: [],
		ready_all: [],
		load_module: [],
		unload_module: [],
		private_msg: [],
		group_msg: [],
		private_recall: [],
		group_recall: [],
		group_increase: [],
		group_decrease: [],
		group_admin: [],
		group_ban: [],
		private_add: [],
		private_request: [],
		group_request: [],
	};

	protected static readonly emit = <T extends keyof eventType>(eventData: eventType[T]) => {
		this.eventStack[eventData.type].forEach(callback => {
			(callback as eventCallback<T>)(eventData);
		});
	};

	protected static readonly addListener: eventListenerFunc = (type, callback) => {
		const eventStack = this.eventStack[type] as unknown[];
		if (eventStack.filter(Element => Element === callback).length > 0) return false;
		eventStack.push(callback);
		return true;
	};

	protected static readonly removeListener: eventListenerFunc = (type, callback) => {
		const eventStack = this.eventStack[type] as unknown[];
		const handleArr = eventStack.filter(Element => Element !== callback);
		if (eventStack.length === handleArr.length) return false;
		(this.eventStack[type] as unknown[]) = handleArr;
		return true;
	};

	protected static readonly removeAllListener: eventListenerFunc = type => {
		const eventStack = this.eventStack[type] as unknown[];
		if (eventStack.length === 0) return false;
		(this.eventStack[type] as unknown[]) = [];
		return true;
	};

	public static readonly on = this.addListener;

	public static readonly once = <T extends keyof eventType>(type: T, callback: eventCallback<T>) => {
		const eventStack = this.eventStack[type] as unknown[];
		const newCallback: eventCallback<T> = data => {
			const index = eventStack.length;
			eventStack.slice(index, index);
			callback(data);
		};
		return this.addListener(type, newCallback);
	};

	public static readonly off = this.removeListener;

	public static readonly offAll = this.removeAllListener;
}

export default Events;