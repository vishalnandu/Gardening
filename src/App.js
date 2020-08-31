import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss"
import AppNavbar from "./components/navbar/AppNavbar"
import {Login, Registration} from './components/account/Account'
import Carousel from './components/carousel/Carousel'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Blog} from "./components/blog/Blog";
import {About} from "./components/about/About";

class App extends React.Component {


  render() {
    
    return (
      <Router>
        <div className="App">
            <div className="AppNavbar">
                <AppNavbar/>
            </div>
            <Route path="/" exact component={Carousel}/>
            <Route path="/Blog" component={Blog}/>
            <Route path="/About" component={About}/>
            <Route path="/Login" component={Login}/> 
            <Route path="/Registration" component={Registration}/>        
        </div>
      </Router>
    )}
}

export default App;
