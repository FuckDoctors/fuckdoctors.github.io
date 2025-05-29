---
url: 'https://zhaobc.site/notes/frontend/ts/handbook/types.md'
---
# Types

## The primitives: `string`, `number`, and `boolean`

JavaScript has three very commonly used primitives: `string`, `number`, and `boolean`.

`number`: JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number

::: tip
The type names `String`, `Number`, and `Boolean` (starting with *capital letters*) are legal, but refer to some special *built-in types* that will very rarely appear in your code. *Always* use `string`, `number`, or `boolean` for types.
:::

## Arrays

To specify the type of an array, you can use the syntax `number[]`.
this syntax works for any type (e.g. `string[]` is an array of strings, and so on).
You may also see this written as `Array<number>`, which means the same thing

## any

TypeScript also has a special type, `any`, that you can use whenever you don’t want a particular value to cause typechecking errors.

When a value is of type `any`, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

```ts
let obj: any = { x: 0 }
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo()
obj()
obj.bar = 100
obj = 'hello'
const n: number = obj
```

### `noImplicitAny`

When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to `any`.

You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag `noImplicitAny` to flag any implicit any as an error.

## Type Annotations on Variables

When you declare a variable using `const`, `var`, or `let`, you can optionally add a type annotation to explicitly specify the type of the variable.

In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically *infer* the types in your code.

```ts
const myName: string = 'Alice'

// No type annotation needed -- 'myName' inferred as type 'string'
const myName2 = 'Alice'
```

## Functions

### Parameter Type Annotations

When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:

```ts twoslash
function greet(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!')
}
```

When a parameter has a type annotation, arguments to that function will be checked:

```ts twoslash
declare function greet(name: string): void
// ---cut---
// @errors: 2345
// Would be a runtime error if executed!
greet(42)
```

### Return Type Annotations

You can also add return type annotations. Return type annotations appear after the parameter list:

```ts twoslash
function getFavoriteNumber(): number {
  //                          ^^^^^^
  return 26
}
```

Much like variable type annotations, you usually don't need a return type annotation because TypeScript will infer the function's return type based on its `return` statements.

### Functions Which Return Promises

If you want to annotate the return type of a function which returns a promise, you should use the `Promise` type:

```ts twoslash
async function getFavoriteNumber(): Promise<number> {
  return 26
}
```

### Anonymous Functions

When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

This process is called *contextual typing* because the *context* that the function occurred within informs what type it should have.

```ts twoslash
const names = ['Alice', 'Bob', 'Eve']

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase())
})

// Contextual typing also applies to arrow functions
names.forEach(s => {
  console.log(s.toUpperCase())
})
```

## Object Types

Apart from primitives, the most common sort of type you’ll encounter is an object type. This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.

```ts twoslash
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}
printCoord({ x: 3, y: 7 })
```

### Optional Properties

Object types can also specify that some or all of their properties are optional. To do this, add a `?` after the property name:

In JavaScript, if you access a property that doesn't exist, you'll get the value `undefined` rather than a runtime error.
Because of this, when you *read* from an optional property, you'll have to *check* for `undefined` before using it.

```ts twoslash
// @errors: 18048
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase())
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase())
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase())
}
```

## Union Types

TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.
Now that we know how to write a few types, it’s time to start combining them in interesting ways.

### Defining a Union Type

A union type is a type formed from two or more other types, representing values that may be any one of those types.

```ts twoslash
// @errors: 2345
function printId(id: number | string) {
  console.log('Your ID is: ' + id)
}
// OK
printId(101)
// OK
printId('202')
// Error
printId({ myId: 1234 })
```

### Working with Union Types

It's easy to *provide* a value matching a union type - simply provide a type matching any of the union's members.

TypeScript will only allow an operation if it is valid for *every* member of the union.
For example, if you have the union `string | number`, you can't use methods that are only available on `string`:

```ts twoslash
// @errors: 2339
function printId(id: number | string) {
  console.log(id.toUpperCase())
}
```

The solution is to *narrow* the union with code, the same as you would in JavaScript without type annotations.
*Narrowing* occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

```ts twoslash
function printId(id: number | string) {
  if (typeof id === 'string') {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase())
  } else {
    // Here, id is of type 'number'
    console.log(id)
  }
}
```

Another example is to use a function like `Array.isArray`:

```ts twoslash
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log('Hello, ' + x.join(' and '))
  } else {
    // Here: 'x' is 'string'
    console.log('Welcome lone traveler ' + x)
  }
}
```

If every member in a union has a property in common, you can use that property without narrowing:

```ts twoslash
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3)
}
```

## Type Aliases

It's common to want to use the same type more than once and refer to it by a single name.

A *type alias* is exactly that - a *name* for any *type*.
The syntax for a type alias is:

```ts twoslash {1}
type Point = {
  x: number
  y: number
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}

printCoord({ x: 100, y: 200 })
```

You can actually use a type alias to give a name to any type at all, not just an object type.
For example, a type alias can name a union type:

```ts twoslash
type ID = number | string
```

When you use the alias, it's exactly as if you had written the aliased type.

```ts twoslash
type UserInputSanitizedString = string
declare function getInput(): string
declare function sanitize(str: string): string
// ---cut---
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str)
}

// Create a sanitized input
let userInput = sanitizeInput(getInput())

// Can still be re-assigned with a 'string' though
userInput = 'new input'
```

## Interfaces

An *interface declaration* is another way to name an object type:

```ts twoslash {1}
interface Point {
  x: number
  y: number
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}

printCoord({ x: 100, y: 200 })
```

### Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
Almost all features of an `interface` are available in `type`, the key distinction is that a *type cannot be re-opened to add new properties* vs *an interface which is always extendable*.

::: tabs

@tab Interface#interface

Extending an interface

```ts twoslash {5}
declare function getBear(): Bear
// ---cut---
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear()
bear.name
bear.honey
```

Adding new fields to an existing interface

```ts
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"'
window.ts.transpileModule(src, {})
```

@tab Type#type

Extending a type via intersections

```ts twoslash {5}
declare function getBear(): Bear
// ---cut---
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

const bear = getBear()
bear.name
bear.honey
```

A type cannot be changed after being created

```ts
interface Window {
  title: string
}

// Error: Duplicate identifier 'Window'.
interface Window {
  ts: TypeScriptAPI
}
```

:::

## Type Assertions

Sometimes you will have information about the type of a value that TypeScript can’t know about.

In this situation, you can use a *type assertion* to specify a more specific type:

```ts twoslash
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement
```

You can also use the angle-bracket syntax (except if the code is in a `.tsx` file), which is equivalent:

```ts twoslash
const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas')
```

TypeScript only allows type assertions which convert to a *more specific* or *less specific* version of a type.
This rule prevents "impossible" coercions like:

```ts twoslash
// @errors: 2352
const x = 'hello' as number
```

Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid.
If this happens, you can use two assertions, first to `any` (or `unknown`, which we'll introduce later), then to the desired type:

```ts twoslash
declare const expr: any
type T = { a: 1; b: 2; c: 3 }
// ---cut---
const a = expr as any as T
```

## Literal Types

Both `var` and `let` allow for changing what is held inside the variable, and `const` does not.
This is reflected in how TypeScript creates types for literals.

```ts twoslash
let changingString = 'Hello World'
changingString = 'zhaobc'

// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString
// ^?

const constantString = 'Hello World'
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString
// ^?
```

By themselves, literal types aren't very valuable:

```ts twoslash
// @errors: 2322
let x: 'hello' = 'hello'
// OK
x = 'hello'
// NG
x = 'zhaobc'
```

It's not much use to have a variable that can only have one value!

But by *combining* literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

```ts twoslash
// @errors: 2345
function printText(s: string, alignment: 'left' | 'center' | 'right') {
  // ...
}

printText('Hello', 'left')
printText('World', 'centre')
```

Numeric literal types work the same way:

```ts twoslash
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1
}
```

Of course, you can combine these with non-literal types:

```ts twoslash
// @errors: 2345
interface Options {
  width: number | string
}

function configure(x: Options | 'auto') {
  // ...
}

configure({ width: 100 })
configure('auto')
configure('automatic')
```

### Literal Inference

When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later. For example, if you wrote code like this:

```ts twoslash
declare const someCondition = true
// ---cut---
const obj = {
  counter: 0,
  // ^?
}

if (someCondition) {
  obj.counter = 1
}
```

TypeScript *doesn’t* assume the assignment of `1` to a field which previously had `0` is an error. Another way of saying this is that `obj.counter` must have the type `number`, not `0`, because types are used to determine both reading and writing behavior.

The same applies to strings:

```ts twoslash
// @errors: 2345
declare function handleRequest(url: string, method: 'GET' | 'POST'): void

const req = {
  url: 'http://example.com',
  method: 'GET',
}
handleRequest(req.url, req.method)
```

In the above example `req.method` is inferred to be `string`, not `"GET"`. Because code can be evaluated between the creation of `req` and the call of `handleRequest` which could assign a new string like `"GUESS"` to `req.method`, TypeScript considers this code to have an error.

There are two ways to work around this.

1. You can change the inference by adding a type assertion in either location:

   ```ts twoslash
   declare function handleRequest(url: string, method: 'GET' | 'POST'): void
   // ---cut---
   // Change 1:
   const req = { url: 'https://example.com', method: 'GET' as 'GET' }
   // Change 2
   handleRequest(req.url, req.method as 'GET')
   ```

   Change 1 means "I intend for `req.method` to always have the *literal type* `"GET"`", preventing the possible assignment of `"GUESS"` to that field after.
   Change 2 means "I know for other reasons that `req.method` has the value `"GET"`".

2. You can use `as const` to convert the entire object to be type literals:

   ```ts twoslash
   declare function handleRequest(url: string, method: 'GET' | 'POST'): void
   // ---cut---
   const req = { url: 'https://example.com', method: 'GET' } as const
   handleRequest(req.url, req.method)
   ```

The `as const` suffix acts like `const` but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like `string` or `number`.

## `null` and `undefined`

JavaScript has two primitive values used to signal absent or uninitialized value: `null` and `undefined`.

TypeScript has two corresponding *types* by the same names. How these types behave depends on whether you have the \[`strictNullChecks`] option on.

### `strictNullChecks` off

With \[`strictNullChecks`] *off*, values that might be `null` or `undefined` can still be accessed normally, and the values `null` and `undefined` can be assigned to a property of any type.
The lack of checking for these values tends to be a major source of bugs; we always recommend people turn [`strictNullChecks`](/tsconfig#strictNullChecks) on if it's practical to do so in their codebase.

### `strictNullChecks` on

With \[`strictNullChecks`] *on*, when a value is `null` or `undefined`, you will need to test for those values before using methods or properties on that value.
Just like checking for `undefined` before using an optional property, we can use *narrowing* to check for values that might be `null`:

```ts twoslash
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log(x.toUpperCase())
  }
}
```

### Non-null Assertion Operator (Postfix `!`)

TypeScript also has a special syntax for removing `null` and `undefined` from a type without doing any explicit checking.
Writing `!` after any expression is effectively a type assertion that the value isn't `null` or `undefined`:

```ts twoslash
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed())
}
```

Just like other type assertions, this doesn't change the runtime behavior of your code,
so it's important to only use `!` when you know that the value *can't* be `null` or `undefined`.

## Enums

Enums allow a developer to define a set of named constants.

```ts twoslash
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

## Less Common Primitives

### `bigint`

From ES2020 onwards, there is a primitive in JavaScript used for very large integers, `BigInt`:

```ts twoslash
// @target: es2020

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100)
// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n
```

### `symbol`

There is a primitive in JavaScript used to create a globally unique reference via the function `Symbol()`:

```ts twoslash
// @errors: 2367
const firstName = Symbol('name')
const secondName = Symbol('name')

if (firstName === secondName) {
  // Can't even happen
}
```
