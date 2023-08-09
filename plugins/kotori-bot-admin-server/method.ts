/*
 * @Author: Hotaru biyuehuya@gmail.com
 * @Blog: http://imlolicon.tk
 * @Date: 2023-07-15 15:55:57
 * @LastEditors: Hotaru biyuehuya@gmail.com
 * @LastEditTime: 2023-08-04 17:21:08
 */
import type { obj } from "@/tools";
import { resCodeType, resMessageType, resData, Token } from "./interface";
import { LOG_PREFIX, CONST, getRandomStr, loadConfig, saveConfig } from "@/tools";

export const resMessageList = {
    500: 'success',
    501: 'fail:parameter cannot be empty',
    502: 'fail:parameter error',
    503: 'fail:error',
    504: 'fail:server reject'
}

export const handle = (res: obj, data: object | null, code: resCodeType = 500, message?: resMessageType): void => {
    const response: resData = {
        code, message: message ? message : resMessageList[code], data
    };
    res.status(200).send(response);
}

export const verify = (token: string | undefined | null): boolean => {
    return !(token === (<Token>loadConfigP('token.json')).token);
}

export const log = (path: string, type: 'GET' | 'POST' = 'GET') => con.log(`[${type}]`, `Request path: ${path}`);

export const con = {
    log: (...args: unknown[]) => console.log(LOG_PREFIX.WEB, ...args),
    warn: (...args: unknown[]) => console.warn(LOG_PREFIX.WEB, ...args),
    error: (...args: unknown[]) => console.error(LOG_PREFIX.WEB, ...args),
}

const configPath = `${CONST.DATA_PATH}\\kotori-bot-admin-server\\`;
export const loadConfigP = (filename: string) => loadConfig(`${configPath}${filename}`);
export const saveConfigP = (filename: string, content: object) => saveConfig(`${configPath}${filename}`, content);
export const updateToken = () => saveConfigP('token.json', { token: getRandomStr() });