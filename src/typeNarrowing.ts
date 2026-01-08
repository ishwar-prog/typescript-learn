function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }
    return `Chai order : ${kind}`
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

function orderChai(size:"small" | "medium" | "large" | number){
    if(size === "small"){
        return `small cutting chai...`
    }
    if(size==='medium' || size==='large'){
        return `make extra chai`
    }
    return `chai order #${size}`
}

class kulhadChai{
    serve(){
        return `serving kulhad chai`
    }
}
class Cutting{
    serve(){
        return `serving cutting chai`
    }
}

function serve(chai: kulhadChai | Cutting){
    if(chai instanceof kulhadChai){
        return chai.serve()
    }
    return chai.serve()
}

type ChaiOrder = {
    type:string,
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`
    }
    return `serving custom chai: ${item}`
}

type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; spicelevel: number};
type ElaichiChai = {type: "elaichi"; spicelevel: number};

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai){
    switch(order.type){
        case "masala":
            return `Masala Chai`
            break;
        case "ginger":
            return `Ginger Chai`
            break;
        case "elaichi":
            return `Elaichi Chai`
            break;
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        //
    }
}

function isStringArray(arr: unknown): arr is string[]{
    return true;
}