"use strict";
exports.__esModule = true;
exports.createSearch = void 0;
var hangul_js_1 = require("hangul-js");
var getChars = function (keyword) {
    var chars = {};
    (0, hangul_js_1.disassemble)(keyword).map(function (char) {
        return (chars[char] = typeof chars[char] !== 'undefined' ? chars[char] + 1 : 1);
    });
    return chars;
};
var createSearch = function (items) {
    var itemCounts = items.map(function (item) { return getChars(item); });
    var search = function (keyword) {
        var keywordCounts = getChars((0, hangul_js_1.disassemble)(keyword).join(''));
        var founds = [];
        itemCounts.map(function (itemCount, index) {
            var matchCount = 0;
            Object.entries(itemCount).map(function (_a) {
                var itemKey = _a[0], itemValue = _a[1];
                Object.entries(keywordCounts).map(function (_a) {
                    var keywordKey = _a[0], keywordValue = _a[1];
                    if (itemKey === keywordKey && itemValue >= keywordValue)
                        matchCount += keywordValue;
                });
            });
            if (matchCount !== 0)
                founds.push([items[index], matchCount]);
        });
        return founds.sort(function (min, max) { return max[1] - min[1]; }).map(function (found) { return found[0]; });
    };
    return search;
};
exports.createSearch = createSearch;
exports["default"] = exports.createSearch;
