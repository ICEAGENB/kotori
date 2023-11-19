/*
 * @Author: hotaru biyuehuya@gmail.com
 * @Blog: https://hotaru.icu
 * @Date: 2023-07-11 14:18:27
 * @LastEditors: Hotaru biyuehuya@gmail.com
 * @LastEditTime: 2023-11-18 22:10:13
 */

import Kotori, { formatTime, isObj, stringTemp } from '@kotori-bot/kotori';
import { resolve } from 'path';

Kotori.uselang(resolve(__dirname, '../locales'));

Kotori.command('core - core.descr.core').action((_, events) => {
	const { configs, baseDir, options, moduleStack, adapterStack, botStack, midwareStack, commandStack, regexpStack } =
		events.api.adapter.ctx;
	let botsLength = 0;
	Object.values(botStack).forEach(apis =>
		apis.forEach(() => {
			botsLength += 1;
		}),
	);
	return [
		'core.msg.core',
		{
			lang: configs.global.lang,
			root: baseDir.root,
			mode: options.nodeEnv,
			modules: moduleStack.length,
			adapters: Object.values(adapterStack).length,
			bots: botsLength,
			midwares: midwareStack.length,
			commands: commandStack.length,
			regexps: regexpStack.length,
		},
	];
});

Kotori.command('bot - core.descr.bot').action((_, events) => {
	const { identity, platform, selfId, nickname, config, status } = events.api.adapter;
	return [
		'core.msg.bot',
		{
			identity,
			lang: config.lang,
			platform,
			self_id: selfId,
			nickname,
			create_time: formatTime(status.createTime),
			last_msg_time: formatTime(status.lastMsgTime),
			received_msg: status.receivedMsg,
			send_msg: status.sentMsg,
			offline_times: status.offlineTimes,
		},
	];
});

Kotori.command('bots - core.descr.bots').action((_, events) => {
	let list = '';
	Object.values(events.api.adapter.ctx.botStack).forEach(apis =>
		apis.forEach(api => {
			const { identity, platform, config, status } = api.adapter;
			list += stringTemp(events.locale('core.msg.bots.list'), {
				identity,
				lang: config.lang,
				platform,
				status: status.value,
			});
		}),
	);
	return ['core.msg.bots', { list }];
});

Kotori.command('version - core.descr.version').action((_, events) => {
	const { version, license } = events.api.adapter.ctx.package;
	return ['core.msg.version', { version, license, node_version: process.version }];
});

Kotori.command('about - core.descr.about').action(() => 'core.msg.about');

Kotori.command('update - core.descr.update').action(async (_, events) => {
	const { version } = events.api.adapter.ctx.package;
	let content: string;
	const res = await Kotori.http.get(
		'https://hotaru.icu/api/agent/?url=https://raw.githubusercontent.com/BIYUEHU/kotori-bot/master/packages/kotori/package.json',
	);
	if (!res || !isObj(res)) {
		content = events.locale('core.msg.update.fail');
	} else if (version === res.version) {
		content = events.locale('core.msg.update.yes');
	} else {
		content = stringTemp(events.locale('core.msg.update.fail'), {
			repo: 'https://github.com/biyuehu/kotori-bot',
		});
	}
	return ['core.msg.update', { version, content }];
});
