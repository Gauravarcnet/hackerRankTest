/**
 * A promise is an object that may produce a single value some time in the 
 * future: either a resolved value, or a reason that it’s not resolved 
 * (e.g., a network error occurred). A promise may be in one of 3 possible states: 
 * fulfilled, rejected, or pending. Promise users
*  can attach callbacks to handle the fulfilled value or the reason for rejection.
 */

 let promise = new Promise(function (resolve,reject) {
    request.get(options, function(err, resp, body) { 
        if (err) { 
            reject(err); 
        } else { 
            resolve(JSON.parse(body)); 
        } 
    }) 
 }) 


 /**
  * 
  * Promise.all() : full information how to use promise.all()
  * https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/
  * 
  * Nodejs architecture
  * https://www.vskills.in/certification/tutorial/web-development/mean-stack/node-js-architecture-2/
  * __proto__ is the actual object that is used in the lookup chain to resolve methods.
  *  It is a property that all objects have. This is the property which is used by 
  * the JavaScript engine for inheritance. According to ECMA specifications it is
  *  supposed to be an internal property, however most vendors allow it to be accessed
  *  and modified.
  * 
  * <b>prototype</b>

prototype is a property belonging only to functions. It is used to build __proto__ 
when the function happens to be used as a constructor with the <i>new</i> keyword


  * Symbol
  https://flaviocopes.com/javascript-symbols/
  * /