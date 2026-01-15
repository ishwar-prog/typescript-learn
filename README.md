# 🎓 TypeScript Mastery — From Basics to React

> Quick-reference guide for TypeScript & React+TS patterns.

## 📁 Structure
```
src/           → TypeScript fundamentals (types, functions, generics, OOP)
reactts/src/   → React + TypeScript (components, hooks, forms)
```

---

# 📘 Part 1: TypeScript Fundamentals

## 1️⃣ Basic Types
```ts
let drink = "water";              // inferred as string
let flavour: string = "vanilla";  // explicit
let price: number = 25;
let isHot: boolean = true;
```
💡 Let TS infer when possible. Annotate when type isn't obvious.

## 2️⃣ Functions
```ts
function makeChai(type: string, cups: number): void { }
function getPrice(): number { return 25; }

// Optional & Default
function order(type?: string) { }           // optional
function order(type: string = "masala") { } // default
```

## 3️⃣ Objects & Type Aliases
```ts
type Tea = { name: string; price: number; ingredients: string[] }

const chai: Tea = { name: "Adrak", price: 30, ingredients: ["ginger"] };
```

**Utility Types:** `Partial<T>` (all optional) | `Required<T>` (all required) | `Readonly<T>`

## 4️⃣ Arrays, Tuples & Enums
```ts
const flavours: string[] = ["Masala", "Ginger"];
const tuple: [string, number] = ["masala", 20];  // fixed length

enum CupSize { SMALL, MEDIUM, LARGE }                    // numeric
enum ChaiType { MASALA = "masala", GINGER = "ginger" }   // string
```

## 5️⃣ Union & Literal Types
```ts
let id: number | string = "1M";                          // union
let status: "pending" | "success" | "error" = "pending"; // literal
```

## 6️⃣ Interfaces
```ts
interface Chai { flavour: string; price: number; milk?: boolean }
interface Shop { readonly id: number; name: string }
interface Rating { [key: string]: number }   // dynamic keys

// Declaration merging & extending
interface User { name: string }
interface User { age: number }    // merged!
interface C extends A, B { }      // inheritance
```

## 7️⃣ Generics
```ts
function wrap<T>(item: T): T[] { return [item]; }

interface Box<T> { content: T }
interface ApiResponse<T> { status: number; data: T }
```

## 8️⃣ Type Narrowing
```ts
// Guards
typeof x === "string"
obj instanceof ClassName
function isX(o: any): o is X { }   // custom guard

// Discriminated Unions — switch on a common property
type A = { type: "a"; value: number }
type B = { type: "b"; name: string }
type Union = A | B
```

## 9️⃣ OOP
| Modifier | Scope |
|----------|-------|
| `public` | Everywhere |
| `private` | Class only |
| `protected` | Class + children |
| `readonly` | Set once |

```ts
abstract class Drink { abstract make(): void }
class Chai extends Drink { make() { } }

// Static & Accessors
static shopName = "Cafe"
get sugar() { }  
set sugar(v) { }
```

---

# ⚛️ Part 2: React + TypeScript

## Props & State
```tsx
interface Props { name: string; price: number; isSpecial?: boolean }

const [count, setCount] = useState<number>(0);
```

## Event Types
| Event | Type |
|-------|------|
| Form submit | `React.FormEvent<HTMLFormElement>` |
| Input change | `React.ChangeEvent<HTMLInputElement>` |
| Button click | `React.MouseEvent<HTMLButtonElement>` |

## Children
```tsx
interface Props extends PropsWithChildren { title: string; footer?: ReactNode }
```

## Generic Hook
```tsx
function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null }
```

## Callback Props
```tsx
interface Props { onSubmit(order: { name: string; cups: number }): void }
```

---

## 🚀 Cheatsheet

| Concept | Syntax |
|---------|--------|
| Type alias | `type X = { }` |
| Interface | `interface X { }` |
| Union | `A \| B` |
| Optional | `prop?: T` |
| Generic | `<T>` |
| Guard | `typeof`, `instanceof`, `is` |

## 🛠️ Run
```bash
npx tsc file.ts && node file.js   # TypeScript
cd reactts && npm i && npm run dev # React
```

> 💡 Hover over variables in VS Code to see inferred types!