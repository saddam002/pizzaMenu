// import Pizza from "./components/Pizza";
import "./app.css";

const pizzaData = [
  {
    name: "Facaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "src/assets/focaccia.jpg",
    soldout: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "src/assets/magerita.webp",
    soldout: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach and ricotta cheese",
    price: 12,
    photoName: "src/assets/spinaci.jpg",
    soldout: false,
  },

  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 12,
    photoName: "src/assets/funghi.jpg",
    soldout: false,
  },

  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "src/assets/salamino.jpg",
    soldout: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "src/assets/prosciutto.jpg",
    soldout: false,
  },
];
function App() {
  return (
    <div className="bg-orange-900 m-0 p-0 w-full h-screen flex flex-col   items-center">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="text-5xl text-center text-white font-serif underline mb-5">
      <h1 className=" pt-8">Fast React Pizza Co.</h1>
    </div>
  );
}

function Menu() {
  return (
    <main className="w-full text-center bg-orange-900 mt-10 p-2.5">
      <h2 className="text-white text-2xl mb-4 underline">Our Menu</h2>
      <div className="flex justify-center flex-wrap gap-3">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            imageName={pizza.photoName}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
          />
        ))}
      </div>
    </main>
  );
}

function Pizza({ imageName, name, ingredients, price }) {
  return (
    <div className="h-70 w-56 shadow-2xl rounded-2xl bg-white">
      <img src={imageName} className="h-2/3 w-full object-cover" alt="" />
      <h3 className="mt-2 font-bold">{name}</h3>
      <p className="leading-none">{ingredients}</p>
      <p className="font-bold">Price: {price}</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-orange-900 w-full text-center text-white ">
      <footer className="mb-6 mt-6">
        {new Date().toLocaleTimeString()}----We'r currently open.
      </footer>
    </div>
  );
}

export default App;
