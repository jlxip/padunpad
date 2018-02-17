// PAD, UNPAD
// Created by JlXip
// As a javascript port of the padding functions used here: https://goo.gl/GmYPhZ
// 			(lines 20, 21)

// In python:
// pad = lambda s: s + (BS - len(s) % BS) * chr(BS - len(s) % BS).encode()
// In JS:
exports.pad = (str, n) => {
	let x = n - str.length % n	// Remaining characters to reach n
	let ret = str + Array(x+1).join(String.fromCharCode(x))	// Join the string with x times the character representing x
	return ret
}

// In python:
// unpad = lambda s: s[:-ord(s[len(s)-1:])]
// In JS:
exports.unpad = (str) => {
	let x = str.charCodeAt(str.length-1)	// Get the character code of the last character.

	let ret = ''
	for(let i=0;i<(str.length-x);++i) ret += str[i]	// All characters but the final x.
	return ret
}