type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize{
    size: "small" | "large" = "small";
}

// type Response = {ok: true} | {ok: false}
// class myRes implements Response{
//     ok:boolean = true;
// }

type TeaType = "masala" | "ginger" | "cardamom";

function orderChai(t: TeaType) {
    console.log(t);
}

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup : MasalaChai ={
    teaLeaves:2,
    masala:1
}

type User ={
    username : string;
    bio?: string;
}

const user1 : User= {username: "Ishwar"}
const user2 : User={username: "krsna", bio: "I love Rap"}

type config={
    readonly appName: string;
    version:number
}

const cfg: config={
    appName: "Gemini Ai",
    version: 3.0
}

// cfg.appName = "OpenAi"