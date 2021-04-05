import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

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
