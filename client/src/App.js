import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Routing
// import PrivateRoute from './components/routing/PrivateRoute'

//screens
// import LoginScreen from './components/views/LoginScreen';
// import RegisterScreen from './components/views/RegisterScreen';
// import Home from './components/views/Home';

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          {/* 
            <Route exact path = "/home" component={Home}/>
            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/register" component={RegisterScreen}/> 
          */}
        </Switch>
    </div>
    </Router>
  );
}

export default App;
