import Pizza from "./components/Pizza";
import "./app.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="company-name">
      <h1>Fast React Pizza Co.</h1>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  return (
    <>
      <footer>{new Date().toLocaleTimeString()}----We'r currently open.</footer>
    </>
  );
}

export default App;
