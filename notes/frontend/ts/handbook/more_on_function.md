---
url: 'https://zhaobc.site/notes/frontend/ts/handbook/more_on_function.md'
---
# More on Functions

## Function Type Expressions

The simplest way to describe a function is with a *function type expression*.
These types are syntactically similar to arrow functions:

```ts twoslash
function greeter(fn: (a: string) => void) {
  fn('Hello World')
}

function printToConsole(s: string) {
  console.log(s)
}

greeter(printToConsole)
```

The syntax `(a: string) => void` means "a function with one parameter, named `a`, of type `string`, that doesn't have a return value".
Just like with function declarations, if a parameter type isn't specified, it's implicitly `any`.

> Note that the parameter name is **required**. The function type `(string) => void` means "a function with a parameter named `string` of type `any`"!

Of course, we can use a type alias to name a function type:

```ts twoslash
type GreetFunction = (a: string) => void

function greeter(fn: GreetFunction) {
  // ...
}
```

## Call Signatures

In JavaScript, functions can have properties in addition to being callable.
However, the function type expression syntax doesn't allow for declaring properties.
If we want to describe something callable with properties, we can write a *call signature* in an object type:

```ts twoslash
type DescribableFunction = {
  description: string
  (someArg: number): boolean
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ', fn(6))
}

function myFunc(someArg: number) {
  return someArg > 3
}
myFunc.description = 'default description: is greater than 3'

doSomething(myFunc)
```

Note that the syntax is slightly different compared to a function type expression - use `:` between the parameter list and the return type rather than `=>`.

## Construct Signatures

JavaScript functions can also be invoked with the `new` operator.
TypeScript refers to these as *constructors* because they usually create a new object.
You can write a *construct signature* by adding the `new` keyword in front of a call signature:

```ts twoslash
type SomeObject = any
// ---cut---
type SomeConstructor = {
  new (s: string): SomeObject
}

function fn(ctor: SomeConstructor) {
  return new ctor('hello')
}
```

Some objects, like JavaScript's `Date` object, can be called with or without `new`.
You can combine call and construct signatures in the same type arbitrarily:

```ts twoslash
interface CallConstructor {
  (n?: number): string
  new (s: string): Date
}
```

## Generic Functions

It's common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way.

In TypeScript, *generics* are used when we want to describe a correspondence between two values.
We do this by declaring a *type parameter* in the function signature:

```ts twoslash
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}
```

By adding a type parameter `Type` to this function and using it in two places, we've created a link between the input of the function (the array) and the output (the return value).
Now when we call it, a more specific type comes out:

```ts twoslash
declare function firstElement<Type>(arr: Type[]): Type | undefined
// ---cut---
// s is of type 'string'
const s = firstElement(['a', 'b', 'c'])
// n is of type 'number'
const n = firstElement([1, 2, 3])
// u is of type undefined
const u = firstElement([])
```

### Inference

Note that we didn't have to specify `Type` in this sample.
The type was *inferred* - chosen automatically - by TypeScript.

```ts twoslash
// prettier-ignore
function map<Input, Output>(arr: Input[], func: (arr: Input) => Output): Output[] {
  return arr.map(func)
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(['1', '2', '3'], n => parseInt(n))
```

Note that in this example, TypeScript could infer both the type of the `Input` type parameter (from the given `string` array), as well as the `Output` type parameter based on the return value of the function expression (`number`).

### Constraints

We've written some generic functions that can work on *any* kind of value.
Sometimes we want to relate two values, but can only operate on a certain subset of values.
In this case, we can use a *constraint* to limit the kinds of types that a type parameter can accept.

Let's write a function that returns the longer of two values.
To do this, we need a `length` property that's a number.
We *constrain* the type parameter to that type by writing an `extends` clause:

```ts twoslash
// @errors: 2345 2322
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a
  } else {
    return b
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3])
// longerString is of type 'alice' | 'bob'
const longerString = longest('alice', 'bob')
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100)
```

Because we constrained `Type` to `{ length: number }`, we were allowed to access the `.length` property of the `a` and `b` parameters.

### Working with Constrained Values

Here's a common error when working with generic constraints:

```ts twoslash
// @errors: 2322
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj
  } else {
    return { length: minimum }
  }
}
```

It might look like this function is OK - `Type` is constrained to `{ length: number }`, and the function either returns `Type` or a value matching that constraint.
The problem is that the function promises to return the *same* kind of object as was passed in, not just *some* object matching the constraint.

### Specifying Type Arguments

TypeScript can usually infer the intended type arguments in a generic call, but not always.

```ts twoslash
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2)
}
```

Normally it would be an error to call this function with mismatched arrays:

```ts twoslash
// @errors: 2322
declare function combine<Type>(arr1: Type[], arr2: Type[]): Type[]
// ---cut---
const arr = combine([1, 2, 3], ['hello'])
```

If you intended to do this, however, you could manually specify `Type`:

```ts twoslash
declare function combine<Type>(arr1: Type[], arr2: Type[]): Type[]
// ---cut---
const arr = combine<string | number>([1, 2, 3], ['hello'])
//                  ^^^^^^^^^^^^^^^
```

### Guidelines for Writing Good Generic Functions

Writing generic functions is fun, and it can be easy to get carried away with type parameters.
Having too many type parameters or using constraints where they aren't needed can make inference less successful, frustrating callers of your function.

#### Push Type Parameters Down

Here are two ways of writing a function that appear similar:

```ts twoslash
function firstElement1<Type>(arr: Type[]) {
  return arr[0]
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0]
}

// a: number (good)
const a = firstElement1([1, 2, 3])
// b: any (bad)
const b = firstElement2([1, 2, 3])
```

These might seem identical at first glance, but `firstElement1` is a much better way to write this function.
Its inferred return type is `Type`, but `firstElement2`'s inferred return type is `any` because TypeScript has to resolve the `arr[0]` expression using the constraint type, rather than "waiting" to resolve the element during a call.

> **Rule**: When possible, use the type parameter itself rather than constraining it

#### Use Fewer Type Parameters

> **Rule**: Always use as few type parameters as possible

#### Type Parameters Should Appear Twice

> **Rule**: If a type parameter only appears in one location, strongly reconsider if you actually need it

## Optional Parameters

We can model this in TypeScript by marking the parameter as *optional* with `?`:

```ts twoslash
function f(x?: number) {
  // ...
}

f() // OK
f(10) // OK
```

Although the parameter is specified as type `number`, the `x` parameter will actually have the type `number | undefined` because unspecified parameters in JavaScript get the value `undefined`.

You can also provide a parameter *default*:

```ts twoslash
function f(x = 10) {
  // ...
}
```

Now in the body of `f`, `x` will have type `number` because any `undefined` argument will be replaced with `10`.
Note that when a parameter is optional, callers can always pass `undefined`, as this simply simulates a "missing" argument:

### Optional Parameters in Callbacks

```ts twoslash
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
}
```

What people usually intend when writing `index?` as an optional parameter is that they want both of these calls to be legal:

```ts twoslash
declare function myForEach(
  arr: any[],
  callback: (arg: any, index?: number) => void
): void
// ---cut---
myForEach([1, 2, 3], a => console.log(a))
myForEach([1, 2, 3], (a, i) => console.log(a, i))
```

What this *actually* means is that *`callback` might get invoked with one argument*.

TypeScript will enforce this meaning and issue errors that aren't really possible:

```ts twoslash
// @errors: 2532 18048
declare function myForEach(
  arr: any[],
  callback: (arg: any, index?: number) => void
): void
// ---cut---
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed())
})
```

In JavaScript, if you call a function with more arguments than there are parameters, the extra arguments are simply ignored.
TypeScript behaves the same way.
Functions with fewer parameters (of the same types) can always take the place of functions with more parameters.

> **Rule**: When writing a function type for a callback, *never* write an optional parameter unless you intend to *call* the function without passing that argument

## Function Overloads

Some JavaScript functions can be called in a variety of argument counts and types.

In TypeScript, we can specify a function that can be called in different ways by writing *overload signatures*.

```ts twoslash
// @errors: 2575
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}
const d1 = makeDate(12345678)
const d2 = makeDate(5, 5, 5)
const d3 = makeDate(1, 3)
```

In this example, we wrote two overloads: one accepting one argument, and another accepting three arguments.
These first two signatures are called the *overload signatures*.

Then, we wrote a function implementation with a compatible signature.
Functions have an *implementation* signature, but this signature can't be called directly.
Even though we wrote a function with two optional parameters after the required one, it can't be called with two parameters!

### Overload Signatures and the Implementation Signature

Again, the signature used to write the function body can't be "seen" from the outside.

> The signature of the *implementation* is not visible from the outside.
> When writing an overloaded function, you should always have *two* or more signatures above the implementation of the function.

The implementation signature must also be *compatible* with the overload signatures.

### Writing Good Overloads

Like generics, there are a few guidelines you should follow when using function overloads.
Following these principles will make your function easier to call, easier to understand, and easier to implement.

> Always prefer parameters with union types instead of overloads when possible

This function is fine; we can invoke it with strings or arrays.
However, we can't invoke it with a value that might be a string *or* an array, because TypeScript can only resolve a function call to a single overload:

```ts twoslash
// @errors: 2769
declare function len(s: string): number
declare function len(arr: any[]): number
// ---cut---
len('') // OK
len([0]) // OK
len(Math.random() > 0.5 ? 'hello' : [0])
```

Because both overloads have the same argument count and same return type, we can instead write a non-overloaded version of the function:

```ts twoslash
function len(x: any[] | string) {
  return x.length
}
```

This is much better!
Callers can invoke this with either sort of value, and as an added bonus, we don't have to figure out a correct implementation signature.

## Other Types to Know About

### `void`

`void` represents the return value of functions which don't return a value.
It's the inferred type any time a function doesn't have any `return` statements, or doesn't return any explicit value from those return statements:

```ts twoslash
// The inferred return type is void
function noop() {
  return
}
```

In JavaScript, a function that doesn't return any value will implicitly return the value `undefined`.
However, `void` and `undefined` are not the same thing in TypeScript.

> `void` is not the same as `undefined`.

### `object`

The special type `object` refers to any value that isn't a primitive (`string`, `number`, `bigint`, `boolean`, `symbol`, `null`, or `undefined`).
This is different from the *empty object type* `{ }`, and also different from the global type `Object`.

> `object` is not `Object`. **Always** use `object`!

### `unknown`

The `unknown` type represents *any* value.
This is similar to the `any` type, but is safer because it's not legal to do anything with an `unknown` value:

```ts twoslash
// @errors: 2571 18046
function f1(a: any) {
  a.b() // OK
}
function f2(a: unknown) {
  a.b() // NG
}
```

```ts twoslash
declare const someRandomString: string
// ---cut---
function safeParse(s: string): unknown {
  return JSON.parse(s)
}

// Need to be careful with 'obj'!
const obj = safeParse(someRandomString)
```

### `never`

Some functions *never* return a value:

```ts twoslash
function fail(msg: string): never {
  throw new Error(msg)
}
```

The `never` type represents values which are *never* observed.
In a return type, this means that the function throws an exception or terminates execution of the program.

`never` also appears when TypeScript determines there's nothing left in a union.

```ts twoslash
function fn(x: string | number) {
  if (typeof x === 'string') {
    // do something
  } else if (typeof x === 'number') {
    // do something else
  } else {
    console.log(x) // has type 'never'!
    //          ^?
  }
}
```

### `Function`

The global type `Function` describes properties like `bind`, `call`, `apply`, and others present on all function values in JavaScript.
It also has the special property that values of type `Function` can always be called; these calls return `any`:

```ts twoslash
function doSomething(f: Function) {
  return f(1, 2, 3)
}
```

## Rest Parameters and Arguments

::: tip
Background Reading:
[Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
[Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
:::

### Rest Parameters

In addition to using optional parameters or overloads to make functions that can accept a variety of fixed argument counts, we can also define functions that take an *unbounded* number of arguments using *rest parameters*.

A rest parameter appears after all other parameters, and uses the `...` syntax:

```ts twoslash
function multiply(n: number, ...m: number[]) {
  return m.map(x => n * x)
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4)
```

In TypeScript, the type annotation on these parameters is implicitly `any[]` instead of `any`, and any type annotation given must be of the form `Array<T>` or `T[]`, or a tuple type (which we'll learn about later).

### Rest Arguments

Conversely, we can *provide* a variable number of arguments from an iterable object (for example, an array) using the spread syntax.
For example, the `push` method of arrays takes any number of arguments:

```ts twoslash
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
arr1.push(...arr2)
```

Note that in general, TypeScript does not assume that arrays are immutable.
This can lead to some surprising behavior:

```ts twoslash
// @errors: 2556
// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5]
const angle = Math.atan2(...args)
```

The best fix for this situation depends a bit on your code, but in general a `const` context is the most straightforward solution:

```ts twoslash
// Inferred as 2-length tuple
const args = [8, 5] as const
// OK
const angle = Math.atan2(...args)
```

## Parameter Destructuring

::: tip
Background Reading:
[Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
[Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
:::

You can use parameter destructuring to conveniently unpack objects provided as an argument into one or more local variables in the function body.
In JavaScript, it looks like this:

```js
function sum({ a, b, c }) {
  console.log(a + b + c)
}
sum({ a: 10, b: 3, c: 9 })
```

The type annotation for the object goes after the destructuring syntax:

```ts twoslash
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c)
}
```

This can look a bit verbose, but you can use a named type here as well:

```ts twoslash
type ABC = { a: number; b: number; c: number }
function sum({ a, b, c }: ABC) {
  console.log(a + b + c)
}
```

## Assignability of Functions

### Return type `void`

The `void` return type for functions can produce some unusual, but expected behavior.

Contextual typing with a return type of `void` does **not** force functions to **not** return something. Another way to say this is a contextual function type with a `void` return type (`type voidFunc = () => void`), when implemented, can return *any* other value, but it will be ignored.

Thus, the following implementations of the type `() => void` are valid:

```ts twoslash
type voidFunc = () => void

const f1: voidFunc = () => {
  return true
}

const f2: voidFunc = () => true

const f3: voidFunc = function () {
  return true
}
```

And when the return value of one of these functions is assigned to another variable, it will retain the type of `void`:

```ts twoslash
type voidFunc = () => void

const f1: voidFunc = () => {
  return true
}

const f2: voidFunc = () => true

const f3: voidFunc = function () {
  return true
}
// ---cut---
const v1 = f1()

const v2 = f2()

const v3 = f3()
```

This behavior exists so that the following code is valid even though `Array.prototype.push` returns a number and the `Array.prototype.forEach` method expects a function with a return type of `void`.

```ts twoslash
const src = [1, 2, 3]
const dst = [0]

src.forEach(el => dst.push(el))
```

There is one other special case to be aware of, when a literal function definition has a `void` return type, that function must **not** return anything.

```ts twoslash
function f2(): void {
  // @ts-expect-error
  return true
}

const f3 = function (): void {
  // @ts-expect-error
  return true
}
```
