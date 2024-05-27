import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <h1>Esercizo 2</h1>
      <Welcome name="John" age={17} />
      <Welcome name="Alice" age={19} />
      <Welcome name="Bob" age={25} />
      <Welcome name="Charlie" age={15} />
      <Welcome name="David" age={35} />
    </div>
  );
}

export default App;
