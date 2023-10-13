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

        <Router>
      
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      
    </Router>



      <Home />
      
    </div>

  );
}

export default App;
