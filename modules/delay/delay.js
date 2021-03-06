var bind = require('amp-bind');


module.exports = function delay(func, wait, context) {
    if (context) func = bind(func, context);
    return setTimeout(func, wait);
};
