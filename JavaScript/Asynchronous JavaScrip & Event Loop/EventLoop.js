// // Things learned:
// 1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
// 2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
// 3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
// 4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
// 5. Micro task is given priority over callback tasks.
// 6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).




// // @akshaymarch7
// 2 years ago (edited)
// Wow, these are some of the best doubts. ❤️
// 1. When does the event loop actually start? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ❤️
// 2.  Are only asynchronous web API callbacks are registered in the web API environment? - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
// 3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
// 4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
// No, there are trust issues with setTimeout() 😅. The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.  It's a very beautiful concept, and I've covered this in detail in the next episode of Namaste JavaScript. 🔥
// Thank you so much for asking all these questions, Shruti. You're a gem. 💎




// //JavaScript Architecture


// Things learned:
// 1. JS runtime environment contains all elements required to run JS.
// 2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
// 3. JS engine is a piece of code.
// 4. Process includes Parsing ---> Compilation -----> Execution.
// 5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
// 6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
// 7. Execution and Compilation are done together.
// 8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
// 9. Fell in love with JS. ❤❤