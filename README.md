promised-io-deferred
====================

This makes promised-io's whenPromise more similar to jQuery's deferred object syntax:

mypromise.doThis(someFunc(someVar));
mypromise.ifSuccess(function(obj) {
    // code
});
mypromise.ifFail(function(obj) {
    // code
});

or

var successHandler = function(obj) {
    // code
};

var failHandler = function(obj) {
    // code
};

mypromise.doThis(someFunc(someVar));
mypromise.ifSuccess(successHandler);
mypromise.ifFail(failHandler);
