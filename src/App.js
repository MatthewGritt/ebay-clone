import "./App.css";
import Header from "./Components/Header";
import Shopping from "./Components/Shopping";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basket from "./Components/Basket";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/basket">
            <div className="app__basket">
              <Header />
              <Basket />
            </div>
          </Route>
          <Route path="/">
            <Header />
            <Banner />
            <Shopping />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
