//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUpC from './SignUpC';
import SignUpH from './SignUpH';
import SignUp from './Components/SignUp'

function App() {
  return (
<>
<Switch>
<Route exact path="/" component={Login} />
<Route exact path="/SignUpC" component={SignUpC} />
<Route exact path="/SignUpH" component={SignUpH} />
</Switch>

</>
  )
}

export default App;
