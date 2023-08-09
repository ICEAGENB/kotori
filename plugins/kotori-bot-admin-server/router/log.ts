/*
 * @Author: Hotaru biyuehuya@gmail.com
 * @Blog: http://imlolicon.tk
 * @Date: 2023-07-18 15:21:30
 * @LastEditors: Hotaru biyuehuya@gmail.com
 * @LastEditTime: 2023-07-31 16:05:45
 */
import Express from 'express';
import { con, handle, verify } from '../method';
import { existsSync, readFileSync, readdirSync } from 'fs';
import { CONST } from '@/tools';

const LOG_PATH = `${CONST.LOGS_PATH}\\`;
const route = Express.Router();

route.get('/list', (req, res) => {
    if (verify(<string>req.query.token)) { handle(res, null, 504); return; } 
    const list = readdirSync(LOG_PATH);
    list.shift();
    handle(res, list.reverse(), 500);
})

route.get('/view', (req, res) => {
    if (verify(<string>req.query.token)) { handle(res, null, 504); return; } 
    let num: number | string = <string>req.query.num;
    num = parseInt(<string>num);

    const list = readdirSync(LOG_PATH);
    list.shift();
    list.reverse();
    let path = `${LOG_PATH}\\${list[num]}`;
    if (!existsSync(path)) {
        handle(res, null, 502);
        return;
    }

    try {
        handle(res, { file: list[num], content: readFileSync(path).toString() }, 500);
    } catch (error) {
        con.error(error);
        handle(res, null, 503);
    }
});

export default route;