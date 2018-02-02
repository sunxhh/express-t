/**
 * 去除左边的空字符
 * @param {*字符串} str 
 */
let leftTrim = exports.leftTrim = function(str) {
    let result = "";
    let regexp = new RegExp("(^\\s*)", 'g');
    try {
        result = str.replace(regexp, "");
    } catch (e) {
        result = str;
        console.error(e);
    }
    return result;
};

/**
 * 去除右边的空字符
 * @param {*字符串} str 
 */
let rightTrim = exports.rightTrim = function(str) {
    let result = "";
    let regexp = new RegExp("(\\s*)$", 'g');
    try {
        result = str.replace(regexp, "");
    } catch (e) {
        result = str;
        console.error(e);
    }
    return result;
};

/**
 * 去除左右的空字符
 * @param {*字符串} str 
 */
let trim = exports.trim = function(str) {
    str = leftTrim(str);
    str = rightTrim(str);
    return str;
};
