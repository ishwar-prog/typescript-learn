function makeChai(type:string, cups:number){
    console.log(`making ${cups} cups of ${type} chai`);
}

makeChai("masala", 2)

function getChaiPrice():number{
    return 25
}

function makeOrder(order:string) {
    if(!order) return null
    return order
}

function logChai(): void{
    console.log("Chai is served");
}

// function orderchai(type?:string){

// }

function orderchai(type:string = "masala"){

}

function createChai(order:{
    type:string;
    sugar:number;
    size:"small"|"large"
}):number{
    return 4
}