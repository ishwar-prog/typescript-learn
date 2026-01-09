const chai= {
    name: "masala chai",
    price: "20",
    isHot: true
}

// {
//     name:string;
//     price: number;
//     isHot: boolean
// }

let tea :{
    name:string;
    price: number;
    isHot: boolean
}

tea ={
    name : "ginger tea",
    price: 15,
    isHot: false
}

type Tea ={
    name:string;
    price:number;
    ingredients: string[]
}

const adrakChai : Tea={
    name: "Adrak Chai",
    price : 30,
    ingredients: ["water", "milk", "ginger", "tea leaves", "sugar"]
}

type Cup = {size:string};
let smallCup : Cup = {size: "200ml"}

let bigCup = {size: "500ml" , material : "steel"}

smallCup = bigCup;

type Brew = {brewTime: number}
const coffee = {brewTime:5 , beans: "arabica"}
const chaiBrew: Brew = coffee;

type User = {
    username: string;
    password: string
}

const u: User ={
    username: "admin",
    password: "root"
}

type Item= {name:string ; quantity : number}
type Address = {street:string ; pin:number}

type Order = {
    id:string;
    items : Item[];
    address : Address
}

type Chai = {
    name:string;
    price: number;
    isHot: boolean
}

const updateChai = (updates:Partial<Chai>)=>{
    console.log("updating chai with ", updates);
}

updateChai({price:25})
updateChai({isHot:false})
updateChai({})

type ChaiOrder = {
    name?:string;
    quantity?:number
}

const placeOrder = (order: Required<ChaiOrder>)=>{
    console.log(order);

}

placeOrder({
    name: "masala chai",
    quantity: 2
})

type ChaiS = {
    name: string;
    price:number;
    isHot:boolean;
    ingredients:string[]
}

type BasicChaiInfo = Pick<ChaiS , "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "lemon tea",
    price: 30
}

type ChaiNew ={
    name: string;
    price:number;
    isHot:boolean;
    secretingredients:string[]
};

type PublicChai = Omit<Chai, "secretingredients">;



