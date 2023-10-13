import './App.css';
import Home from './Components/Home/Home';
import SourceDestination from './Components/SourceDestination/SourceDestination';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VerifyOtp from './Components/VerifyOtp/VerifyOtp';
function App() {



  return (
    <div className="App">

        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/VerifyOtp"> <VerifyOtp /> </Route>
          <Route exact path="/SourceDestination"> <SourceDestination /> </Route>
        </Switch>
    </div>

  );
}

export default App;
