import "./App.css";
import Button from "react-bootstrap/Button";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather App</h2>
        <Button variant="primary">Primary</Button>
        <footer>
          <p>
            Open sourced code by: Bhing Rudenas on{" "}
            <a
              href="https://github.com/bhingkay/myrreactweatherapp"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
