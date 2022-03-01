import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Portland" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/marah-deven-rice"
            target="_blank"
            rel="noreferrer"
          >
            Marah Rice
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MarahDeven/marahs-react-weather-app"
            taget="-blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
