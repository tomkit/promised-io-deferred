promised-io-deferred
====================

This makes <a href="https://github.com/kriszyp/promised-io">promised-io</a>'s whenPromise more similar to jQuery's <a href="http://api.jquery.com/category/deferred-object/">deferred object</a> syntax:

mypromise.doThis(someFunc(someVar));
<br>mypromise.ifSuccess(function(obj) {
<blockquote>
// code
</blockquote>
});
<br>mypromise.ifFail(function(obj) {
<blockquote>
// code
</blockquote>
});

or

var successHandler = function(obj) {
<blockquote>
// code
</blockquote>
};

var failHandler = function(obj) {
<blockquote>
// code
</blockquote>
};

mypromise.doThis(someFunc(someVar));
<br>mypromise.ifSuccess(successHandler);
<br>mypromise.ifFail(failHandler);
