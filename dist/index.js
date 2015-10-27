// List of the characters we want to escape and their HTML escaped version
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var chars = {
	"&": "&amp;",
	">": "&gt;",
	"<": "&lt;",
	'"': "&quot;",
	"'": "&#39;",
	"`": "&#96;"
};

// Dynamically create a RegExp from the `chars` object
var re = new RegExp(Object.keys(chars).join("|"), "g");

// Return the escaped string

exports["default"] = function (str) {
	return str != null ? String(str).replace(re, function (match) {
		return chars[match];
	}) : "";
};

module.exports = exports["default"];
