promised-io-deferred
====================

This makes promised-io's whenPromise more similar to jQuery's deferred object syntax:

mypromise.doThis(someFunc(someVar));
<br>mypromise.ifSuccess(function(obj) {
<br><blockquote>// code</blockquote>
<br>});
<br>mypromise.ifFail(function(obj) {
<br><blockquote>// code</blockquote>
<br>});

or

var successHandler = function(obj) {
<br><blockquote>// code</blockquote>
<br>};

var failHandler = function(obj) {
<br><blockquote>// code</blockquote>
<br>};

mypromise.doThis(someFunc(someVar));
<br>mypromise.ifSuccess(successHandler);
<br>mypromise.ifFail(failHandler);
