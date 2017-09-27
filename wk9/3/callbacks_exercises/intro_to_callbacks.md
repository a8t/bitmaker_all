# Working With Functions
In JavaScript, functions are not invoked (or 'called') until they're appended with parentheses. "Of course", you say, "but why is that important?" Well, it may not seem significant at first glance, but being able to either *refer to* or *invoke* functions allows us to use them in a variety of ways. For example:

1. A function can be invoked by adding a trailing set of parentheses:

```
function double( number ) {
    return number * 2;
}

double( 5 ); // 10
```

2. Alternatively, we can pass functions around within our program:

```
function double( number ) {
    return number * 2;
}

var timesTwo = double;

double( 5 ); // 10
timesTwo( 5 ); // 10
```

This ability to pass function references around allows us to take advantage of a useful pattern: callbacks.

## What Is A 'Callback'?
Simply put, a 'callback' is a function that has been passed as an argument to another function. In our example above, we invoked `double()` and passed in the number `5`, making it available within the body of the function. However, what if we wanted `double()` to return the new number *and* log some information to the console? We could achieve this with just a few changes to our existing code.

```
function double( number, callback ) {
    // First we assign the new number to the `doubledNumber` var.
    var doubledNumber = number * 2;

    // If the `callback` argument exists, we invoke it with `number` and `doubledNumber`.
    if ( callback ) {
        callback( number, doubledNumber );
    }

    // Then we return the `doubledNumber`.
    return newNumber;
}

function printDoubleMessage( number, doubledNumber ) {
    console.log( 'Original number: ', number );
    console.log( 'Doubled number: ', doubledNumber );
}

double( 5, printDoubleMessage ); // 10
```

You may be wondering, "couldn't I have achieved the same thing by putting the console logs *directly inside* the `double()` function?" In this case, the answer is yes. However, updating the function to accept a callback offers a few advantages:
1. Our function definition stays nice and light
    - It doubles a number, invokes a callback with both values, and then returns the doubled number to the outer scope.
2. We can easily change the behaviour of the `double()` function by invoking it with a different callback.
    - `double( 5, printDoubleMessage )`
    - `double( 10, updateTotal )`
3. Since our updated function only invokes the `callback` if it exists*, we're able to call `double()` with **or** without a callback argument.
    - `double( 5 )`
    - `double( 5, printDoubleMessage )`

\* Our example only checks for the *presence* of the `callback` argument, not whether it's actually a function. A real program must do both!

## Synchronous vs. Asynchronous Callbacks
There are two different ways in which we can use the callback approach: synchronously; or asynchronously. This assignment focuses solely on synchronous callbacks. However, a very quick overview of each is useful.
1. Synchronous callbacks
- Like all synchronous operations, this type of callback will cause our program to 'hold' until it is resolved.
- We'll be looking at some applications for synchronous callbacks shortly, so read on!
2. Asynchronous callbacks
- In this case, our program will 'continue' while the asynchronous operation is taking place, and our callback will be invoked when the operation is complete.
- Asynchronous callbacks are often used in cases such as:
    - working with 'timeouts' and 'intervals' (eg. `setTimeout()` and `setInterval`).
    - responding to user input (click, hover, focus, etc.).
    - updating our program *after* a network request has resolved.

### When and Why To Use Callbacks
Callbacks are a core aspect of synchronous programming, especially when it comes to working with arrays!

Say we're given an array, and we want to log each item to the console. We could achieve this like so:

```
var numbers = [ 0,1,2,4,5,6,7,8,9 ];

for ( var i = 0; i < numbers.length; i++ ) {
    console.log( 'The current number is ', numbers[ i ] );
}
```

This gives us the desired result, but it has a couple of downsides:
- We have to define a 'counter' variable (`i`), which will persist after our loop completes.
- We have to define a condition (`i < numbers.length`) to determine whether or not the loop should continue.
- We have to update our 'counter' after each loop iteration (`i++`).
- We have to access the current number using both the 'counter' and the source array (`numbers[ i ]`).

"When you put it like that, it looks like we're doing *a lot* of work just to loop over our `numbers` array!" Luckily, we can achieve this a different way using callbacks.

When working with arrays, we have access to the **Iteration Methods**. One such method, `.forEach()`, gives us an alternative to the example above.

```
var numbers = [ 0,1,2,3,4,5,6,7,8,9 ];

numbers.forEach( function( number ) {
    console.log( 'The current number is', number );
} );
```

"Hmm... both examples are only 3 lines long, so what makes the `.forEach()` approach better?"" I'm glad you asked! When working with `.forEach()`, we append it to our source array (eg. `numbers`) and pass the callback that should be invoked once *for each* item. Each time our callback is invoked, the first argument will contain the current item in the array, which means:
- We **don't** have to define or update a 'counter' variable.
- We **don't** have to define a condition.
- We **don't** have to access the current item using both the source array and the 'counter'.

In short, `.forEach()` allows us to focus on what we want to **do** with the items in our array (eg. by defining our callback function), rather than on how to access each item.

Wait, it gets event better! We're not limited to *just* the `.forEach()` method. There are actually a variety of array **Iteration Methods**, and they all have a few things in common:
- Each method is called *on* an array.
- Each method accepts one argument: a 'callback' function.

