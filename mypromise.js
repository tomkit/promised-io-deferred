/**
 * Wrapper around promised-io/promise's whenPromise()
 * 
 * This creates an API that is less nested than the original API.
 * 
 * Sample code:
 * 
 * var MyPromise = require('mypromise.js');
 * 
 * var mypromise = MyPromise.getMyPromise();
 * mypromise.doThis(somefunc(somevar));
 * mypromise.ifSuccess(function(obj) {
 *     // code
 * });
 * mypromise.ifFail(function(obj) {
 *     // code
 * });
 * 
 * 
 */

var promise = require('promised-io/promise');

var MyPromise = function() {
};

MyPromise.prototype.doThis = function(valueOrPromise) {
    var that = this;
    
    /**
     * Success handler
     * @private
     */
    var ifSuccessSuper = function() {
        that.successHandler.apply(this, arguments);
    };
    
    /**
     * Fail handler
     * @private
     */
    var ifFailSuper = function() {
        that.failHandler.apply(this, arguments);
    };
    
    promise.whenPromise(valueOrPromise, ifSuccessSuper, ifFailSuper);
};

/**
 * Handler for success scenarios
 * User can override this via the prototype chain if they want, but 
 * using ifSuccess() is the intended use case
 * 
 * @override: consumer overrides via ifSuccess()
 * 
 * @param obj - object that deferred object returns
 */
MyPromise.prototype.successHandler = function(obj) {
};

/**
 * Handler for fail scenarios
 * User can override this via the prototype chain if they want, but 
 * using ifFail() is the intended use case
 * 
 * @override: consumer overrides via ifFail()
 * 
 * @param obj - object that deferred object returns
 */
MyPromise.prototype.failHandler = function(obj) {
};

/**
 * @public: Sets up a success handler for a resolved promise
 * 
 * @param func
 */
MyPromise.prototype.ifSuccess = function(func) {
    this.successHandler = func;
};

/**
 * @public: Sets up fail handler for a rejected promise
 * 
 * @param func
 */
MyPromise.prototype.ifFail = function(func) {
    this.failHandler = func;
};

/**
 * @public: Factory that generates a new instance of this
 */
exports.getMyPromise = function() {
    return new MyPromise();
};