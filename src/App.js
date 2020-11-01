import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <img src={require("./components/img/tcf_mockup.jpg")} alt="test" />
        <img src={require("./components/img/gymclipart2.svg")} />
        <img src={require("./components/img/workout.svg")} />
      <Social />
    </div>
  );
}

export default App;
