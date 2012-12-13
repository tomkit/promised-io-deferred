promised-io-deferred
====================

This makes promised-io's whenPromise more similar to jQuery's deferred object syntax:

mypromise.doThis(someFunc(someVar));
<br/>mypromise.ifSuccess(function(obj) {
<br/><p/>// code
<br/>});
<br/>mypromise.ifFail(function(obj) {
<br/><p/>// code
<br/>});

or

var successHandler = function(obj) {
<br/><p/>// code
<br/>};

var failHandler = function(obj) {
<br/><p/>// code
<br/>};

mypromise.doThis(someFunc(someVar));
<br/>mypromise.ifSuccess(successHandler);
<br/>mypromise.ifFail(failHandler);
