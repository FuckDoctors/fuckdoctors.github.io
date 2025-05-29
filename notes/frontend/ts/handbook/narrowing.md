---
url: 'https://zhaobc.site/notes/frontend/ts/handbook/narrowing.md'
---
# Narrowing

Imagine we have a function called `padLeft`.

```ts twoslash
function padLeft(padding: number | string, input: string): string {
  throw new Error('Not implemented yet!')
}
```

If `padding` is a `number`, it will treat that as the number of spaces we want to prepend to `input`.
If `padding` is a `string`, it should just prepend `padding` to `input`.

Let's try to implement the logic for when `padLeft` is passed a `number` for `padding`.

```ts twoslash
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input
    //                ^?
  }

  return padding + input
  //     ^?
}
```

## `typeof` type guards

JavaScript supports a `typeof` operator which can give very basic information about the type of values we have at runtime.
TypeScript expects this to return a certain set of strings:

* `"string"`
* `"number"`
* `"bigint"`
* `"boolean"`
* `"symbol"`
* `"undefined"`
* `"object"`
* `"function"`

In TypeScript, checking against the value returned by `typeof` is a *type guard*.

`typeof` doesn't return the string `null`, `typeof null` is actually `"object"`!

```ts twoslash
// @errors: 18047
function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    for (const s of strs) {
      console.log(s)
    }
  } else if (typeof strs === 'string') {
    console.log(strs)
  } else {
    // do nothing
  }
}
```

In the `printAll` function, we try to check if `strs` is an object to see if it's an array type, But it turns out that in JavaScript, `typeof null` is actually `"object"`!

## Truthiness narrowing

Values like

* `0`
* `NaN`
* `''` (the empty string)
* `0n` (the `bigint` version of zero)
* `null`
* `undefined`

all coerce to `false`, and other values get coerced to `true`.

You can always coerce values to `boolean`s by running them through the `Boolean` function, or by using the shorter double-Boolean negation.

It's fairly popular to leverage this behavior, especially for guarding against values like `null` or `undefined`.

```ts twoslash
// @errors: 2872
// both of these result in 'true'
Boolean('hello')
!!'world'
```

### Equality narrowing

TypeScript also uses `switch` statements and equality checks like `===`, `!==`, `==`, and `!=` to narrow types.
For example:

```ts twoslash
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    console.log(x.toUpperCase())
    //          ^?

    console.log(y.toUpperCase())
    //          ^?
  } else {
    console.log(x)
    //          ^?

    console.log(y)
    //          ^?
  }
}
```

Since `string` is the only common type that both `x` and `y` could take on, TypeScript knows that `x` and `y` must be `string`s in the first branch.

JavaScript's looser equality checks with `==` and `!=` also get narrowed correctly.

If you're unfamiliar, checking whether something `== null` actually not only checks whether it is specifically the value `null` - it also checks whether it's potentially `undefined`.
The same applies to `== undefined`: it checks whether a value is either `null` or `undefined`.

```ts twoslash
interface Container {
  value: number | null | undefined
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value)
    //                    ^?

    // Now we can safely multiply 'container.value'.
    container.value *= factor
  }
}
```

### The `in` operator narrowing

TypeScript takes this into account as a way to narrow down potential types.

```ts twoslash
type Fish = {
  swim: () => void
}

type Bird = {
  fly: () => void
}

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim()
  }

  return animal.fly()
}
```

To reiterate, optional properties will exist in both sides for narrowing.
For example, a human could both swim and fly (with the right equipment) and thus should show up in both sides of the `in` check:

```ts twoslash
type Fish = {
  swim: () => void
}

type Bird = {
  fly: () => void
}

type Human = {
  swim: () => void
  fly: () => void
}

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    return animal.swim()
    //     ^?
  }

  return animal.fly()
  //     ^?
}
```

### `instanceof` narrowing

```ts twoslash
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString())
  } else {
    console.log(x.toUpperCase())
  }
}
```

### Assignments

When we assign to any variable, TypeScript looks at the right side of the assignment and narrows the left side appropriately.

### Control flow analysis

TypeScript narrows within specific branches.

### Using type predicates

Sometimes you want more direct control over how types change throughout your code.

To define a user-defined type guard, we simply need to define a function whose return type is a type *predicate*:

```ts twoslash
type Fish = {
  swim: () => void
}

type Bird = {
  fly: () => void
}
// ---cut---
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}
```

`pet is Fish` is our type predicate in this example. A predicate takes the form `parameterName is Type`, where `parameterName` must be the name of a parameter from the current function signature.

Any time `isFish` is called with some variable, TypeScript will *narrow* that variable to that specific type if the original type is compatible.

```ts twoslash
type Fish = {
  swim: () => void
}

type Bird = {
  fly: () => void
}

declare function getSmallPet(): Fish | Bird

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}
// ---cut---
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet()

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}
```

Notice that TypeScript not only knows that `pet` is a `Fish` in the `if` branch; it also knows that in the `else` branch, you don’t have a `Fish`, so you must have a `Bird`.

You may use the type guard `isFish` to filter an array of `Fish | Bird` and obtain an array of `Fish`:

```ts twoslash
type Fish = {
  name: string
  swim: () => void
}

type Bird = {
  name: string
  fly: () => void
}

declare function getSmallPet(): Fish | Bird

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}
// ---cut---
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish)
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[]

// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === 'sharkey') {
    return false
  }

  return isFish(pet)
})
```

In addition, classes can use `this is Type` to narrow their type.

## Discriminated unions

```ts twoslash
interface Shape {
  kind: 'circle' | 'square'
  radius?: number
  sideLength?: number
}
```

Notice we're using a union of string literal types: `"circle"` and `"square"` to tell us whether we should treat the shape as a circle or square respectively. By using `"circle" | "square"` instead of `string`, we can avoid misspelling issues.

```ts twoslash
// @errors: 2367
interface Shape {
  kind: 'circle' | 'square'
  radius?: number
  sideLength?: number
}
// ---cut---
function handleShape(shape: Shape) {
  // oops!
  if (shape.kind === 'rect') {
    // ...
  }
}
```

We can write a `getArea` function that applies the right logic based on if it's dealing with a circle or square. We'll first try dealing with circles.

```ts twoslash
// @errors: 2532 18048
interface Shape {
  kind: 'circle' | 'square'
  radius?: number
  sideLength?: number
}
// ---cut---
function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2
}
```

Under `strictNullChecks` that gives us an error - which is appropriate since `radius` might not be defined.
But what if we perform the appropriate checks on the kind property?

```ts twoslash
// @errors: 2532 18048
interface Shape {
  kind: 'circle' | 'square'
  radius?: number
  sideLength?: number
}
// ---cut---
function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2
  }
}
```

Hmm, TypeScript still doesn't know what to do here.

We've hit a point where we know more about our values than the type checker does. We could try to use a non-null assertion (a `!` after `shape.radius`) to say that radius is definitely present.

```ts twoslash
interface Shape {
  kind: 'circle' | 'square'
  radius?: number
  sideLength?: number
}
// ---cut---
function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius! ** 2
  }
}
```

But this doesn't feel ideal. We had to shout a bit at the type-checker with those non-null assertions (`!`) to convince it that `shape.radius` was defined, but those assertions are error-prone if we start to move code around.

```ts twoslash
interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

type Shape = Circle | Square
```

Here, we've properly separated `Shape` out into two types with different values for the `kind` property, but `radius` and `sideLength` are declared as required properties in their respective types.

Let's see what happens here when we try to access the `radius` of a `Shape`.

```ts twoslash
// @errors: 2339
interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

type Shape = Circle | Square
// ---cut---
function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2
}
```

Like with our first definition of Shape, this is still an error.
because TypeScript couldn't tell whether the property was present.

But what if we tried checking the kind property again?

```ts twoslash
interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

type Shape = Circle | Square
// ---cut---
function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2
    //               ^?
  }
}
```

That got rid of the error! When every type in a union contains a common property with literal types, TypeScript considers that to be a *discriminated union*, and can narrow out the members of the union.

In this case, `kind` was that common property (which is what's considered a *discriminant* property of `Shape`). Checking whether the `kind` property was `"circle"` got rid of every type in `Shape` that didn't have a `kind` property with the type `"circle"`. That narrowed shape down to the type `Circle`.

## The `never` type

When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a `never` type to represent a state which shouldn't exist.

## Exhaustiveness checking

The `never` type is assignable to every type; however, no type is assignable to `never` (except `never` itself). This means you can use narrowing and rely on `never` turning up to do exhaustive checking in a `switch` statement.

```ts twoslash
interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

type Shape = Circle | Square
// ---cut---
function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2
    default:
      const _exhaustiveCheck: never = shape
      return _exhaustiveCheck
  }
}
```

Adding a new member to the Shape union, will cause a TypeScript error:

```ts twoslash
// @errors: 2322
interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}
// ---cut---

interface Triangle {
  kind: 'triangle'
  sideLength: number
}

type Shape = Circle | Square | Triangle

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2
    default:
      const _exhaustiveCheck: never = shape
      return _exhaustiveCheck
  }
}
```
