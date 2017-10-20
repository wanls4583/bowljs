define(function(require, exports, module) {

var dom = require('dom');
var test = require('./test');
var test1 = require('./dir/test1');
dom.id('title').innerHTML = test.title+','+test1.title;

});