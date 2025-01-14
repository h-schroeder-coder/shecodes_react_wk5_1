import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hannah's React Weather App</h1>
        </header>
        <footer className="App-footer">
          This webpage was coded by{" "}
          <a
            href="https://github.com/h-schroeder-coder"
            target="_blank"
            rel="noreferrer"
          >
            Hannah Schroeder
          </a>{" "}
          as part of a{" "}
          <a
            href="https://www.shecodes.io/workshops"
            target="_blank"
            rel="noreferrer"
          >
            SheCodes Plus Workshop,
          </a>{" "}
          and is on{" "}
          <a
            href="https://github.com/h-schroeder-coder/shecodes_react_wk5_1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
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
