export const weatherImg = (code) => {
    return code ? require('../../assets/images/' + code + '.svg') : require('../../assets/images/100.svg');
};

export const nameOfImg = (name) => {
    return require('../../assets/images/' + name);
};
