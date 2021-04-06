import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="Athens" />

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
            <span className="vecteezy">
              {" "}
              Nature Vectors by
              <a href="https://www.vecteezy.com/free-vector/nature">
                {" "}
                Vecteezy
              </a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
