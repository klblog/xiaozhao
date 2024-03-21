"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notNull = void 0;
const notNull = (options) => {
    if (options === null || options === undefined) {
        return false;
    }
    if (typeof options === 'number' || typeof options === 'string') {
        return Boolean(options);
    }
    if (Array.isArray(options)) {
        return options.length > 0;
    }
    if (typeof options === 'object') {
        return Object.keys(options).length > 0;
    }
};
exports.notNull = notNull;
//# sourceMappingURL=help.js.map