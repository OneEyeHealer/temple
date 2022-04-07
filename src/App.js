import React, {Fragment, useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import auth from './services/authService';

import NavBar from "./components/nav/navBar";
import Footer from "./components/footer/footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Activity from "./components/pages/Activity";
import Offering from "./components/pages/Offering";
import Contact from "./components/pages/Contact";
import LoginForm from "./components/pages/LoginForm";
import NotFound from "./components/pages/NotFound";
import OfferingForm from "./components/offer/OfferingForm";
import Logout from "./components/Logout";
import RegisterForm from "./components/pages/RegisterForm";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [homeClick, setHomeClick] = useState(false);
    const[user, setUser] = useState({});
    useEffect(()=>{
        const user = auth.getActiveUser();
        setUser(user);
    },[]);
  return (
    <Router>
        <div className="">
            <ToastContainer />
            <NavBar
                homeClick={homeClick}
                setHomeClick={setHomeClick}
                user={user}
            />
        </div>
        <div className="main">
            <Switch>
                <Route path="/offerings/:id" component={OfferingForm} />
                <Route path="/home" render={(props)=> <Home {...props}/>} />
                <Route path="/about" component={About} />
                <Route path="/activity" component={Activity} />
                <Route path="/offerings" render={(props) => <Offering {...props} user={user}/>}/>
                <Route path="/contact" component={Contact} />
                <Route path="/login" render={(props) => <LoginForm {...props}/>} />
                <Route path="/logout" component={Logout} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/register" render={(props) => <RegisterForm {...props}/>} />
                <Redirect from="/" exact to="/home" />
                <Redirect to="/not-found" />
            </Switch>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
