/*!
* Qoopido.js library v3.6.1, 2015-2-5
* https://github.com/dlueth/qoopido.js
* (c) 2015 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(n){window.qoopido.register("function/unique/string",n)}(function(){"use strict";function n(n){var t="",e=0;for(n=parseInt(n,10)||12;n>e;e++)t+=r[parseInt(Math.random()*(r.length-1),10)];return t}var t={},r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");return function(r){var e;do e=n(r);while("undefined"!=typeof t[e]);return t[e]=!0,e}});