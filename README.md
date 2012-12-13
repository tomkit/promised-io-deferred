promised-io-deferred
====================

This makes <a href="https://github.com/kriszyp/promised-io">promised-io</a>'s whenPromise more similar to jQuery's <a href="http://api.jquery.com/category/deferred-object/">deferred object</a> syntax:

<pre>
var mypromise = MyPromise.getMyPromise();
mypromise.doThis(someFunc(someVar));
mypromise.ifSuccess(function(obj) {
    // code
});
mypromise.ifFail(function(obj) {
    // code
});
</pre>

or

<pre>
var mypromise = MyPromise.getMyPromise();
var successHandler = function(obj) {
    // code
};

var failHandler = function(obj) {
    // code
};

mypromise.doThis(someFunc(someVar));
mypromise.ifSuccess(successHandler);
mypromise.ifFail(failHandler);
</pre>
