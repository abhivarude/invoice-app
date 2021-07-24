import React from "react";
import {Route,BrowserRouter,NavLink,Switch,Redirect} from "react-router-dom";

import './App.css';
import Login from "./login";
import  Home from "./home";
import Signup from "./signup";
import Project from "./project";
import Addelement from "./addelement";
import Dashboard from "./dashboard";


function App() {

  return (
    <div className="App">


<BrowserRouter>


<Switch>


<Route path="/home" component={Home}></Route>
<Route path="/login" component={Login}></Route>
<Route path="/signup" component={Signup}></Route>
<Route path="/dashboard/project" component={Project}></Route>
<Route exact path="/dashboard/addelement" component={Addelement}></Route>
<Route path="/dashboard" component={Dashboard}></Route>

<Route exact path="/"><Redirect to="/home"></Redirect> </Route>
</Switch>

</BrowserRouter>
      


    </div>
  );
}

export default App;
