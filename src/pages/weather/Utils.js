export const weatherImg = (code) => {
    return code ? require('../../assets/images/' + code + '.svg') : require('../../assets/images/100.svg');
};

export const nameOfImg = (name) => {
    return require('../../assets/images/' + name);
};

export const dayOfWeek = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日', '今天'];
