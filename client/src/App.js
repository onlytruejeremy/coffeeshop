import "./styles.css";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/menu" exact>
          <Menu />
        </Route>
      </Switch>
    </div>
  );
}
