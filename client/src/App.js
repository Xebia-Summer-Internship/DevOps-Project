import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUpC from "./SignUpC";
import SignUpH from "./SignUpH";
import LoginH from "./LoginH";
import DashBoard from "./DashBoard";
import DashBoardH from "./DashBoardH";
import Hotels from "./Hotels";
import ShowHotels from "./ShowHotels";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/LoginH" component={LoginH} />
        <Route exact path="/SignUpC" component={SignUpC} />
        <Route exact path="/SignUpH" component={SignUpH} />
        <Route exact path="/DashBoard" component={DashBoard} />
        <Route exact path="/Hotels" component={Hotels} />
        <Route exact path="/DashBoardH" component={DashBoardH} />
        <Route exact path="/ShowHotels" component={ShowHotels} />
      </Switch>
    </>
  );
}

export default App;
