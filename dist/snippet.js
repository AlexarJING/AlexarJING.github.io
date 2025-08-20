export const OneDayTime = 1000 * 60 * 60 * 24;
export const rta = (1 / 3.14) * 180;
export const return_true = () => true;
export function FuncAsync(func, cb) {
    return new Promise((exe, rej) => {
        func(() => {
            cb && cb();
            exe();
        });
    });
}
//注意 注意 如果返回值有值且不是promise 则打断重复！！ 如果sync则等待promise
export async function repeat(n, func, sync = false) {
    let promises = [];
    let isPromise;
    for (let i = 0; i < n; i++) {
        let rt = func(i);
        isPromise = rt instanceof Promise;
        if (isPromise && sync)
            await rt;
        if (rt && !isPromise) {
            break;
        }
        else if (isPromise) {
            promises.push(rt);
        }
    }
    if (isPromise) {
        return Promise.all(promises);
    }
}
export function distance(x, y, x2, y2) {
    return Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));
}
export const TAU = Math.PI * 2;
export const PIE = Math.PI;
class Snippet {
    // static showProfile(t: boolean) {
    // }
    static arrReplace(arr, tile, other) {
        arr.splice(arr.indexOf(tile), 1, other);
    }
    static wrap(v, dist) {
        return ((v % dist) + dist) % dist;
    }
    static arrayShuffle(arr) {
        arr.sort((a, b) => Math.random() - 0.5);
    }
    static arrayShuffle2(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    static lerp(a, b, r) {
        return a + (b - a) * r;
    }
    static arrayOverlap(a, b) {
        for (let i = 0; i < a.length; i++) {
            if (b.indexOf(a[i]) != -1)
                return true;
        }
        return false;
    }
    /**
     * a的所有元素都必须在b中出现 b包含a
     * @param a
     * @param b
     * @returns
     */
    static arrayCover(a, b) {
        let cover = true;
        for (let i = 0; i < a.length; i++) {
            if (b.indexOf(a[i]) == -1)
                cover = false;
        }
        return cover;
    }
    static arraySame(a, b) {
        if (a.length != b.length)
            return false;
        this.arrNoRepeat(a);
        this.arrNoRepeat(b);
        return this.arrayCover(a, b);
    }
    static vecFlatDist(a, b) {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }
    static distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
    static getAngle(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    }
    static getAngleObject(a, b = { x: 0, y: 0 }) {
        return Math.atan2(b.y - a.y, b.x - a.x);
    }
    static distanceObject(a, b) {
        if (a.z != null && b.z != null) {
            return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2));
        }
        return this.distance(a.x, a.y, b.x, b.y);
    }
    static clamp(v, min, max) {
        if (min > max) {
            let t = min;
            min = max;
            max = t;
        }
        return Math.max(min, Math.min(max, v));
    }
    static randomRange(from, to) {
        return Snippet.lerp(from, to, Math.random());
    }
    static bool2num(b) {
        return b ? 1 : 0;
    }
    static arrNoRepeat(arr) {
        let sub = [];
        for (let i = 0; i < arr.length; i++) {
            if (sub.indexOf(arr[i]) == -1)
                sub.push(arr[i]);
        }
        arr.length = 0;
        arr.push(...sub);
        return arr;
    }
    static fetchArrEle(arr, ele) {
        const i = arr.indexOf(ele);
        if (i == -1)
            return null;
        return arr.splice(i, 1)[0];
    }
    static pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    static pickRandomKV(map) {
        let item = Snippet.pickRandom(Object.keys(map));
        return { k: item, v: map[item] };
    }
    static fetchRandom(arr) {
        return this.fetchArrEle(arr, this.pickRandom(arr));
    }
    static pickRandomItems(arr, count = 1) {
        const all = [];
        arr = [...arr]; //复制一份 避免ref改变
        for (let i = 0; i < count; i++) {
            let item = Snippet.pickRandom(arr);
            item = Snippet.fetchArrEle(arr, item);
            if (item != null)
                all.push(item);
        }
        return all;
    }
    static pickRandomMap(arr, count, every = false) {
        let map = {};
        if (every && count >= arr.length) {
            arr.forEach((key) => {
                map[key] = 1;
            });
            count -= arr.length;
        }
        repeat(count, () => {
            let item = this.pickRandom(arr);
            map[item] || (map[item] = 0);
            map[item]++;
        });
        return map;
    }
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
    static irange(from, to) {
        if (typeof to == "undefined") {
            to = from - 1;
            from = 0;
        }
        from = Math.floor(from);
        to = Math.ceil(to);
        const all = [];
        for (let i = from; i <= to; i++) {
            all.push(i);
        }
        return all;
    }
    /**
     * 生成随机整数
     * @param from
     * @param to 注意，包含后者
     * @returns
     */
    static randomInt(from, to) {
        return Snippet.pickRandom(Snippet.irange(from, to));
    }
    static deepCopy(obj) {
        const _obj = Array.isArray(obj) ? [] : {};
        for (const i in obj) {
            if (typeof obj[i] == "object") {
                _obj[i] = Snippet.deepCopy(obj[i]);
            }
            else {
                _obj[i] = obj[i];
            }
        }
        return _obj;
    }
    /**
     * 按权重随机获取，返回对应的值
     * @param data
     * @returns
     */
    static pickRandomByWeight(data) {
        data = data.filter((sub) => sub.weight > 0); //移除不合规的权重
        let total = 0;
        for (let i = 0; i < data.length; ++i) {
            total += data[i].weight;
        }
        const threshold = Math.random() * total;
        total = 0;
        for (let i = 0; i < data.length - 1; ++i) {
            total += data[i].weight;
            if (total >= threshold) {
                return data[i].value;
            }
        }
        return data[data.length - 1].value;
    }
    static pickRandomByArrWeight(arr, weights) {
        let all = [];
        for (let i = 0; i < arr.length; i++) {
            all.push({ id: i, weight: weights[i] });
        }
        return arr[this.pickByWeight(all).id];
    }
    static pickRandomByArrWeightCount(arr, weights, count) {
        arr = [...arr];
        weights = [...weights];
        let all = [];
        weights = [...weights];
        for (let i = 0; i < count; i++) {
            let item = this.pickRandomByArrWeight(arr, weights);
            all.push(item);
            let index = arr.indexOf(item);
            arr.splice(index, 1);
            weights.splice(index, 1);
        }
        return all;
    }
    static pickByWeight(data) {
        data = data.filter((sub) => sub.weight > 0); //移除不合规的权重
        let total = 0;
        for (let i = 0; i < data.length; ++i) {
            total += data[i].weight;
        }
        const threshold = Math.random() * total;
        total = 0;
        for (let i = 0; i < data.length - 1; ++i) {
            total += data[i].weight;
            if (total >= threshold) {
                return data[i];
            }
        }
        return data[data.length - 1];
    }
    static pickRandomItemsByWeight(data, count) {
        let items = [];
        repeat(count, () => {
            let item = this.pickByWeight(data);
            items.push(item);
            this.fetchArrEle(data, item);
        });
        return items;
    }
    static lineSegmentsIntersect(...nums) {
        const A = nums[0], B = nums[1], C = nums[2], D = nums[3], P = nums[4], Q = nums[5], R = nums[6], S = nums[7];
        const det = (C - A) * (S - Q) - (R - P) * (D - B);
        if (det === 0) {
            return false;
        }
        const lambda = ((S - Q) * (R - A) + (P - R) * (S - B)) / det;
        const gamma = ((B - D) * (R - A) + (C - A) * (S - B)) / det;
        return lambda > 0 && lambda < 1 && gamma > 0 && gamma < 1;
    }
    static loopValue(value, min, max) {
        const rangeSize = max - min + 1; // 区间长度
        return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min; // 循环后的值
    }
    static loopValuef(value, min, max) {
        const range = max - min;
        const EPSILON = 1e-10; // Small value for floating point comparison
        // If range is effectively zero or invalid, return min
        if (range <= EPSILON)
            return min;
        // If value is already in range (accounting for floating point precision)
        if (value >= min - EPSILON && value < max + EPSILON)
            return value;
        // Normalize the value
        value = value - min;
        // Calculate how many times the range fits in value
        const quotient = Math.floor(value / range);
        value = value - quotient * range;
        // Handle negative numbers
        if (value < -EPSILON) {
            value += range;
        }
        // Ensure the result is strictly within bounds
        if (Math.abs(value - range) < EPSILON) {
            value = 0;
        }
        return value + min;
    }
    static getParams() {
        let obj = new Object();
        let url = location.search;
        if (url.indexOf("?") != -1) {
            let str = url.substr(1);
            let arrs = str.split("&");
            arrs.map((item) => {
                let value = item.split("=")[1];
                if (isFinite(Number(value))) {
                    value = Number(value);
                }
                else if (decodeURI) {
                    value = decodeURI(value);
                }
                obj[item.split("=")[0]] = value;
            });
        }
        return obj;
    }
    static formatNumber(num, format = "000") {
        let base = num.toFixed(0);
        let rep = format.substring(0, 1);
        let count = format.length;
        return rep.repeat(count - base.length) + base;
    }
    static stringToArrayBuffer(str) {
        var buffer = new ArrayBuffer(str.length);
        var bufferView = new Uint8Array(buffer);
        for (var i = 0; i < str.length; i++) {
            bufferView[i] = str.charCodeAt(i);
        }
        return buffer;
    }
    static deg2rad(deg) {
        return (deg / 180) * Math.PI;
    }
    static rad2deg(rad) {
        return (rad / Math.PI) * 180;
    }
    static pad(str, len, prefix = "0") {
        str = str.toString();
        const count = len - str.length;
        if (count <= 0)
            return str;
        return prefix.repeat(count) + str;
    }
    //return a new map
    static mapMul(map, mul) {
        const rt = {};
        for (const key in map) {
            if (isNaN(map[key]))
                continue;
            rt[key] = map[key] * mul;
        }
        return rt;
    }
    static convertStringConfig(str, equal = "=", split = ",") {
        let rt = {};
        if (!str)
            return rt;
        let arr = str.split(split);
        if (arr.length == 1 && !str.includes(equal)) {
            rt["content"] = str;
            return rt;
        }
        arr.map((item) => {
            let arr2 = item.split(equal);
            let num = Number(arr2[1]);
            rt[arr2[0]] = isFinite(num) ? num : arr2[1];
        });
        return rt;
    }
    static convertStringArray(str, split = ",") {
        let rt = [];
        if (!str)
            return rt;
        let arr = str.split(split);
        arr.map((item) => {
            let num = Number(item);
            rt.push(isFinite(num) ? num : item);
        });
        return rt;
    }
    static deleteObjectValue(obj, v) {
        for (const key in obj) {
            if (obj[key] == v) {
                delete obj[key];
            }
        }
    }
    static getArrEleCount(arr, ele) {
        return arr.filter((item) => item == ele).length;
    }
    static domDownloadStr(str, name) {
        const blob = new Blob([str], {
            type: "application/text;charset=utf-8",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        a.click();
    }
    static trimBigNumber(num, len = 2) {
        return Number(num.toFixed(len));
    }
    static formatNumberCN(n) {
        let cn = n.toFixed(0);
        //亿、兆、京、垓、秭、穰、沟、涧、正、载
        const format = {
            0: "",
            5: "万",
            9: "亿",
            14: "万亿",
            18: "兆",
            22: "万兆",
            24: "亿兆",
            28: "万亿兆",
            32: "京",
        };
        let rt = "";
        let prev = 0;
        for (let key in format) {
            let len = Number(key);
            if (cn.length < len) {
                let front = (Number(cn) / Math.pow(10, prev)).toFixed(prev == 0 ? 0 : 1);
                rt = front + format[prev];
                break;
            }
            prev = len;
        }
        return rt;
    }
    static formatNumberEN(num) {
        const absNum = Math.abs(num);
        if (absNum >= 1e12) {
            return (num / 1e12).toFixed(1) + "T";
        }
        else if (absNum >= 1e9) {
            return (num / 1e9).toFixed(1) + "B";
        }
        else if (absNum >= 1e6) {
            return (num / 1e6).toFixed(1) + "M";
        }
        else if (absNum >= 1e3) {
            return (num / 1e3).toFixed(1) + "K";
        }
        else {
            return Math.ceil(num).toFixed(0);
        }
    }
    static numberCN(n) {
        const numNames = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        return numNames[n];
    }
    static HslToRgb(h, s, l) {
        // 将HSL转换为RGB
        // h /= 360
        let r, g, b;
        if (s === 0) {
            r = g = b = l; // 饱和度为0，为灰色
        }
        else {
            const hue2rgb = (p, q, t) => {
                if (t < 0)
                    t += 1;
                if (t > 1)
                    t -= 1;
                if (t < 1 / 6)
                    return p + (q - p) * 6 * t;
                if (t < 1 / 2)
                    return q;
                if (t < 2 / 3)
                    return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        // 将RGB转换为16进制
        const toHex = (c) => {
            const hex = Math.round(c * 255).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };
        const hexColor = `0x${toHex(r)}${toHex(g)}${toHex(b)}`;
        return Number(hexColor);
    }
    static randomColor(s = 1, l = 0.5) {
        s = this.clamp(s, 0, 1);
        l = this.clamp(l, 0, 1);
        return this.HslToRgb(Math.random(), s, l);
    }
    /**
     * 属性点随机分配，每个至少分配一点
     * @param attr
     * @param count
     * @returns
     */
    static randomAttrPoints(attr, count) {
        let keys = Object.keys(attr);
        if (count < keys.length) {
            keys.forEach((key) => (attr[key] = 1));
            while (count < Object.values(attr).reduce((a, b) => a + b, 0)) {
                let key = keys[Math.floor(Math.random() * keys.length)];
                attr[key] = 0;
            }
        }
        else {
            keys.forEach((key) => (attr[key] = 1));
            count -= keys.length;
            while (count > 0) {
                let key = keys[Math.floor(Math.random() * keys.length)];
                attr[key] += 1;
                count--;
            }
        }
        return attr;
    }
    static removeZeroElements(sth) {
        for (let key in sth) {
            if (!sth[key]) {
                delete sth[key];
            }
        }
        return sth;
    }
    static randomNormal(mean = 0, stdDev = 2) {
        let u1 = Math.random();
        let u2 = Math.random();
        let z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        let x = mean + z0 * stdDev;
        // console.log(mean, stdDev, x)
        return x;
    }
    static isOneDayPass(t, hour = 1) {
        let prev = new Date(t).setHours(hour, 0, 0, 0);
        let diff = new Date().setHours(hour, 0, 0, 0) - prev;
        // console.log(diff)
        return diff >= OneDayTime;
    }
    static getDayPass(t, hour = 1) {
        let prev = new Date(t).setHours(hour, 0, 0, 0);
        let diff = new Date().setHours(hour, 0, 0, 0) - prev;
        // console.log(diff)
        return Math.floor(diff / OneDayTime);
    }
    static isOneDayPass24(t) {
        let prev = new Date(t).setHours(0, 0, 0, 0);
        let diff = new Date().setHours(0, 0, 0, 0) - prev;
        // console.log(diff)
        return diff >= OneDayTime;
    }
    // static isNextDay(hour:number) {
    //     let thisDay = new Date().setHours(hour, 0, 0, 0)
    //     return thisDay - OneDayTime > OneDayTime
    // }
    static getTimeLeftStr(t, hour) {
        if (hour) {
            t = new Date(t).setHours(hour, 0, 0, 0);
        }
        let diff = Date.now() - t;
        return this.formatSeconds(OneDayTime - diff);
    }
    static arraySwitchEle(array, ele1, ele2) {
        let index1 = array.indexOf(ele1);
        let index2 = array.indexOf(ele2);
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
    static arraySetEleIndex(array, ele1, index) {
        let removed = array.splice(array.indexOf(ele1), 1)[0];
        array.splice(index, 0, removed);
    }
    static vec2LikeEqual(a, b) {
        return a.x == b.x && a.y == b.y;
    }
    static randomIntByFloat(n) {
        let base = Math.floor(n);
        let diff = n - base;
        if (Math.random() < diff) {
            return base + 1;
        }
        else {
            return base;
        }
    }
}
Snippet.formatSeconds = (value, noHour = false) => {
    let secondTime = value / 1000; // 秒
    let minuteTime = 0; // 分
    let hourTime = 0; // 小时
    if (secondTime > 60) {
        //如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = Math.floor(secondTime / 60);
        //获取秒数，秒数取佘，得到整数秒数
        secondTime = Math.floor(secondTime % 60);
        //如果分钟大于60，将分钟转换成小时
        if (minuteTime > 60) {
            //获取小时，获取分钟除以60，得到整数小时
            hourTime = Math.floor(minuteTime / 60);
            //获取小时后取佘的分，获取分钟除以60取佘的分
            minuteTime = Math.floor(minuteTime % 60);
        }
    }
    else {
        secondTime = Math.floor(secondTime);
    }
    if (noHour)
        return `${Snippet.pad(minuteTime, 2)}:${Snippet.pad(secondTime, 2)}`;
    return `${Snippet.pad(hourTime, 2)}:${Snippet.pad(minuteTime, 2)}:${Snippet.pad(secondTime, 2)}`;
};
Snippet.mapJoin = (...maps) => {
    const rt = {};
    for (const map of maps) {
        for (const key in map) {
            rt[key] = rt[key] || 0;
            rt[key] += map[key];
        }
    }
    for (const key in rt) {
        if (rt[key] == 0) {
            delete rt[key];
        }
    }
    return rt;
};
export default Snippet;
//# sourceMappingURL=snippet.js.map