import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hannah's React Weather App</h1>
        </header>
        <Weather />
        <footer className="App-footer">
          This webpage was coded by{" "}
          <a
            href="https://github.com/h-schroeder-coder"
            target="_blank"
            rel="noreferrer"
          >
            Hannah Schroeder,
          </a>{" "}
          a{" "}
          <a
            href="https://www.shecodes.io/graduates/157590-hannah-schroeder"
            target="_blank"
            rel="noreferrer"
          >
            graduate
          </a>{" "}
          of {" "}
          <a
            href="https://www.shecodes.io/workshops"
            target="_blank"
            rel="noreferrer"
          >SheCodes,</a>{" "} 
          as part of the{" "}
          <a
            href="https://www.shecodes.io/workshops"
            target="_blank"
            rel="noreferrer"
          >
            SheCodes React Workshop,
          </a>{" "}
          is open source on {" "}
          <a
            href="https://github.com/h-schroeder-coder/shecodes_react_wk5_1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub,
          </a>{" "}
          and is hosted by{" "}
          <a
            href="https://h-schroeder-react-wk-5-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netifly
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
