const chaiflavours: string[] = ["Masala", "Ginger"];

const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.0];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "masala", price: 15 },
  { name: "Ginger", price: 20 },
];

const cities: readonly string[] = ["Mumbai", "Pune", "Banglore"];
// cities.push("Hydrabad")

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let chaiTuple: [string, number];
chaiTuple = ["masala", 20];
// chaiTuple= [20, 'masala']

let userInfo: [number, string, boolean?];
userInfo = [1, "ishwar"];

const location: readonly [number, number] = [19.076, 72.8777];

const chaiItems: [name: string, price: number] = ["masala", 25];

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.MEDIUM;

enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making:${type}`);
}

makeChai(ChaiType.GINGER);
// makeChai("masala")

enum RandomEnum {
  ID = 1,
  NAME = "ishwar",
}

const enum Sugars{
    LOW= 1,
    MEDIUM = 2,
    HIGH=3
}

let t: [string, number]= ["chai", 10]
t.push("extra")