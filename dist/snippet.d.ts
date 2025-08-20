export declare const OneDayTime: number;
export declare const rta: number;
export type Enumable<T> = T | Exclude<keyof T, keyof String>;
export declare const return_true: () => boolean;
export type RemoveReadonly<T> = {
    -readonly [K in keyof T]: T[K];
};
export type Vec2Like = {
    x: number;
    y: number;
};
export declare function FuncAsync(func: (cb: () => void) => void, cb?: () => void): Promise<void>;
export declare function repeat(n: number, func: (t: number) => any, sync?: boolean): Promise<any[]>;
export declare function distance(x: any, y: any, x2: any, y2: any): number;
export declare const TAU: number;
export declare const PIE: number;
export default class Snippet {
    static arrReplace(arr: any[], tile: any, other: any): void;
    static wrap(v: number, dist: number): number;
    static arrayShuffle<T>(arr: Array<T>): void;
    static arrayShuffle2<T>(array: Array<T>): T[];
    static lerp(a: any, b: any, r: any): any;
    static arrayOverlap(a: any[], b: any[]): boolean;
    /**
     * a的所有元素都必须在b中出现 b包含a
     * @param a
     * @param b
     * @returns
     */
    static arrayCover(a: any[], b: any[]): boolean;
    static arraySame(a: any[], b: any[]): boolean;
    static vecFlatDist(a: Vec2Like, b: Vec2Like): number;
    static distance(x1: number, y1: number, x2: number, y2: number): number;
    static getAngle(x1: number, y1: number, x2: number, y2: number): number;
    static getAngleObject(a: {
        x: number;
        y: number;
    }, b?: {
        x: number;
        y: number;
    }): number;
    static distanceObject(a: {
        x: number;
        y: number;
        z?: number;
    }, b: {
        x: number;
        y: number;
        z?: number;
    }): number;
    static clamp(v: any, min: any, max: any): number;
    static randomRange(from: number, to: number): any;
    static bool2num(b: boolean): 0 | 1;
    static arrNoRepeat<T>(arr: T[]): T[];
    static fetchArrEle<T>(arr: T[], ele: T): T;
    static pickRandom<T>(arr: T[]): T;
    static pickRandomKV<T extends {
        [key: string | number]: any;
    }>(map: T): {
        k: string | number;
        v: any;
    };
    static fetchRandom<T>(arr: T[]): T;
    static pickRandomItems<T>(arr: T[], count?: number): T[];
    static pickRandomMap(arr: (string | number)[], count: number, every?: boolean): {
        [key: string | number]: number;
    };
    /**
     * 生成整数数组
     * 如果只填一个参数输入为长度 range(3) 0,1,2
     * 如果填两个参数，则左右包含的范围range(1,3) 1,2,3
     * 注意in 和 of 对for的区别
     * 可以配合for let i of range(3) <====> for let i = 0;i<3;i++
     * @param from
     * @param to 包含本参数
     * @returns
     */
    static irange(from: number, to?: number): number[];
    /**
     * 生成随机整数
     * @param from
     * @param to 注意，包含后者
     * @returns
     */
    static randomInt(from: number, to: number): number;
    static deepCopy<T>(obj: T): T;
    /**
     * 按权重随机获取，返回对应的值
     * @param data
     * @returns
     */
    static pickRandomByWeight<T>(data: {
        value: T;
        weight: number;
    }[]): T;
    static pickRandomByArrWeight<T>(arr: T[], weights: number[]): T;
    static pickRandomByArrWeightCount<T>(arr: T[], weights: number[], count: number): T[];
    static pickByWeight<T extends {
        id: number;
        weight: number;
    }>(data: T[]): T;
    static pickRandomItemsByWeight<T extends {
        id: number;
        weight: number;
    }>(data: T[], count: number): T[];
    static lineSegmentsIntersect(...nums: number[]): boolean;
    static loopValue(value: number, min: number, max: number): number;
    static loopValuef(value: number, min: number, max: number): number;
    static getParams<T>(): T;
    static formatNumber(num: number, format?: string): string;
    static stringToArrayBuffer(str: any): ArrayBuffer;
    static deg2rad(deg: number): number;
    static rad2deg(rad: number): number;
    static pad(str: string | number, len: number, prefix?: string): string;
    static formatSeconds: (value: number, noHour?: boolean) => string;
    static mapJoin: (...maps: {
        [key: string]: number;
    }[]) => {};
    static mapMul(map: {
        [key: string]: number;
    }, mul: number): {};
    static convertStringConfig(str: string, equal?: string, split?: string): {};
    static convertStringArray(str: string, split?: string): any[];
    static deleteObjectValue(obj: Object, v: any): void;
    static getArrEleCount<T>(arr: T[], ele: T): number;
    static domDownloadStr(str: string, name: string): void;
    static trimBigNumber(num: number, len?: number): number;
    static formatNumberCN(n: number): string;
    static formatNumberEN(num: number): string;
    static numberCN(n: number): string;
    static HslToRgb(h: number, s: number, l: number): number;
    static randomColor(s?: number, l?: number): number;
    /**
     * 属性点随机分配，每个至少分配一点
     * @param attr
     * @param count
     * @returns
     */
    static randomAttrPoints<T>(attr: T, count: number): T;
    static removeZeroElements(sth: Object): Object;
    static randomNormal(mean?: number, stdDev?: number): number;
    static isOneDayPass(t: number, hour?: number): boolean;
    static getDayPass(t: number, hour?: number): number;
    static isOneDayPass24(t: number): boolean;
    static getTimeLeftStr(t: number, hour?: number): string;
    static arraySwitchEle<T>(array: T[], ele1: T, ele2: T): void;
    static arraySetEleIndex<T>(array: T[], ele1: T, index: number): void;
    static vec2LikeEqual(a: Vec2Like, b: Vec2Like): boolean;
    static randomIntByFloat(n: number): number;
}
