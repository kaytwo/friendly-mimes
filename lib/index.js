"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveName = exports.resolveFileType = exports.resolveMime = void 0;
var data_1 = require("./data");
/**
 * Resolves Mime type (eg: text/csv, application/mp4 etc) of the mime to the specific mime.
 * @param mime MimeType of the file
 * @returns The resolved item.
 */
exports.resolveMime = function (mime) {
    var item = data_1.data.filter(function (filterItem) { return filterItem.mime.toLowerCase() === mime.toLowerCase(); })[0];
    if (item) {
        return item;
    }
    throw new Error("\n    Mimetype (" + mime + ") doesn't exist in our collection, please raise a Request to add the same.\n\n    Please add it to - https://github.com/kirananto/friendly-mimes/blob/master/src/data.ts ");
};
/**
 * Resolves File type (.mp4, .mp3 etc) of the mime to the specific mime.
 * @param fileType FileType of the file
 * @returns The resolved item.
 */
exports.resolveFileType = function (fileType) {
    var item = data_1.data.filter(function (filterItem) { return filterItem.fileType.toLowerCase() === fileType.toLowerCase(); })[0];
    if (item) {
        return item;
    }
    throw new Error("FileType (" + fileType + ") doesn't exist in our collection, please raise a Request to add the same.\n\n    Please add it to - https://github.com/kirananto/friendly-mimes/blob/master/src/data.ts");
};
/**
 * Resolves name of the mime to array of related mimes.
 * @param name Name of the file
 * @returns Array of related items.
 */
exports.resolveName = function (name) {
    var items = data_1.data.filter(function (filterItem) { return filterItem.name.toLowerCase().includes(name.toLowerCase()); });
    if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
        return items;
    }
    throw new Error("Name (" + name + ") doesn't exist in our collection, please raise a Request to add the same.\n\n    Please add it to - https://github.com/kirananto/friendly-mimes/blob/master/src/data.ts");
};
exports.default = {
    resolveName: exports.resolveName,
    resolveMime: exports.resolveMime,
    resolveFileType: exports.resolveFileType
};
