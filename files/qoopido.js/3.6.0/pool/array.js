/*!
* Qoopido.js library v3.6.0, 2014-12-2
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(o){window.qoopido.register("pool/array",o,["../pool"])}(function(o,n){"use strict";var r=o.pool.extend({_dispose:function(o){return o.length=0,o},_obtain:function(){return[]}});return n.pool=n.pool||{},n.pool.array=r.create(),r});