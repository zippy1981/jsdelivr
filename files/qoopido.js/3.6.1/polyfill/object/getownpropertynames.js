/*!
* Qoopido.js library v3.6.1, 2015-2-5
* https://github.com/dlueth/qoopido.js
* (c) 2015 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e,o){o.register?o.register("polyfill/object/getownpropertynames",e):(o.modules=o.modules||{})["polyfill/object/getownpropertynames"]=e()}(function(){"use strict";return Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object");var o,t=[];for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.push(o);return t}),Object.getOwnPropertyNames},window.qoopido=window.qoopido||{});