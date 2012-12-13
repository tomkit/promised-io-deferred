promised-io-deferred
====================

This makes promised-io's whenPromise more similar to jQuery's deferred object syntax:

mypromise.doThis(someFunc(someVar));
<br/>mypromise.ifSuccess(function(obj) {
<br/>    // code
<br/>});
<br/>mypromise.ifFail(function(obj) {
<br/>    // code
<br/>});

or

<br/>var successHandler = function(obj) {
<br/>    // code
<br/>};

<br/>var failHandler = function(obj) {
<br/>    // code
<br/>};

<br/>mypromise.doThis(someFunc(someVar));
<br/>mypromise.ifSuccess(successHandler);
<br/>mypromise.ifFail(failHandler);
