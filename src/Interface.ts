interface Chai {
    flavour: string
    price:number
    milk?: boolean
}

const masala:Chai={
    flavour: "masala",
    price:30
}

interface Shop{
    readonly id:number
    name:string
}

const s: Shop={ id:1, name:"RIDDHI SIDDHI"}
// s.id=2

interface DiscountCalculator{
    (price:number): number
}

const apply50 : DiscountCalculator = (p)=> p*0.5

interface TeaMachine{
    start():void
    stop():void
}

const machine: TeaMachine ={
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop")
    }
}

interface ChaiRating{
    [flavour: string]:number
}

const ratings : ChaiRating= {
    masala:4.5,
    ginger:4.0
}

interface User{
    name:string
}

interface User {
    age:number
}

const u:User = {
    name:"Ishwar",
    age:19
}

interface A {a:string}
interface B {b:string}

interface C extends A, B {}