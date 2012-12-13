promised-io-deferred
====================

This makes <a href="https://github.com/kriszyp/promised-io">promised-io</a>'s whenPromise more similar to jQuery's <a href="http://api.jquery.com/category/deferred-object/">deferred object</a> syntax:

mypromise.doThis(someFunc(someVar));
<br>mypromise.ifSuccess(function(obj) {
<pre>    // code</pre>
});
<br>mypromise.ifFail(function(obj) {
<pre>    // code</pre>
});

or

var successHandler = function(obj) {
<pre>    // code</pre>
};

var failHandler = function(obj) {
<pre>    // code</pre>
};

mypromise.doThis(someFunc(someVar));
<br>mypromise.ifSuccess(successHandler);
<br>mypromise.ifFail(failHandler); 
