import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss"
import AppNavbar from "./components/navbar/AppNavbar"
import {Login, Registration} from './components/account/Account'
import Carousel from './components/carousel/Carousel'
import NewArrival from './components/new arrival/NewArrival'
import Footer from './components/footer/Footer'
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
            <div className="topic-container">
               <h2>NEW ARRIVALS</h2>              
            </div>
            <div className="new-arrival">
              <NewArrival/>
            </div>
            {/* <div className="topic-container">
               <h2>LATEST BLOGS</h2> 
            </div> */}
            <div className="footer">
              <Footer/>
            </div>
            <Route path="/Blog" component={Blog}/>
            <Route path="/About" component={About}/>
            <Route path="/Login" component={Login}/> 
            <Route path="/Registration" component={Registration}/>     
            </div>
            </Router>
    );
  }
}
export default App;
