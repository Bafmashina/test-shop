import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Header />
      {/* ВВЕРХ */}
      <div className="content p-40">
        <h1>Наушники</h1>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          {/* Вторая тройка */}
        </div>
        {/* НИЗ */}
        <h1>Беспроводные Наушники</h1>
        <div className="hedPhones">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Футер */}

      <Footer />
    </div>
  );
}

export default App;
