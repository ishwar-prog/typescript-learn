import { Card } from "./components/Card.tsx";
import { ChaiCard } from "./components/ChaiCard.tsx";
import ChaiList from "./components/ChaiList.tsx";
import { Counter } from "./components/Counter.tsx";
import { OrderForm } from "./components/OrderForm.tsx";
import type { Chai } from "./types.ts";

const menu: Chai[] = [
  { id: 1, name: "Masala Chai", price: 20 },
  { id: 2, name: "Ginger Chai", price: 40 },
  { id: 3, name: "Lemon Chai", price: 50 },
];

function App() {
  return (
    <>
      <div className="container">
        <div>
          <h1>Vite + React</h1>
          <ChaiCard name="Masala Chai" price={20} />
          <ChaiCard name="Ginger Chai" price={30} />
        </div>
        <div>
          <Counter />
        </div>
        <div>
          <ChaiList items={menu} />
        </div>
        <div>
          <OrderForm
            onSubmit={(order) => {
              console.log("Placed", order.name, order.cups);
            }}
          />
        </div>
        <div>
          <Card
            title = "TypeScript "
            footer= {<button>order now</button>}
          />
        </div>
      </div>
    </>
  );
}

export default App;
