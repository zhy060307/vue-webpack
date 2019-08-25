export const weatherImg = (code)=>{
    return code ? require('../../assets/images/' + code + '.svg') : require('../../assets/images/100.svg');
};
