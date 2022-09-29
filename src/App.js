import "./App.scss";
import "./custom.scss";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
    </div>
  );
}

export default App;
