import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useMediaPredicate } from "react-media-hook";
//React imports
import Foot from './Footer/Footer';
import Header from './Header/Navbar';
import FootPayment from './Footer/FooterPayment'
//Basic components
import PageContent from './Content/Landing page/PageContent';
import Contact from './Content/Other pages/Contact Us/Contact';
import Register from './Content/Other pages/Register/Autogrid';
import About from './Content/Other pages/About/About';
import PaymentPortal from './Content/Other pages/Razorpay payment/Payment';
import Events from './Content/Other pages/Events/Events';
import PaymentSuccess from './Content/Other pages/Razorpay payment/PaymentSuccess';
import TandC from './Content/Other pages/T&C/TandC';
import Temp from './Content/Other pages/Events/Temp';
import Team from './Content/Other pages/Team/Team'
//Pages

import "./App.css";
//imports

function App() { 
    
    const smallerThan1000 = useMediaPredicate("(max-width: 1000px)");//media-query hook  
    return(<Router>
    <Switch>
    <Route exact path="/"><Redirect to='/home'/></Route>
    <Route exact path="/home"><div className={!smallerThan1000?"bg_image_home":"bg_image_home_mobile"}><Header/><PageContent/><Foot/></div></Route>
    <Route exact path="/about"><div className={!smallerThan1000?"bg_image_about":"bg_image_about_mobile"}><Header/><About/></div></Route>
    <Route exact path="/team"><div className={!smallerThan1000?"bg_image_team":"bg_image_team_mobile"}><Header/><Team/></div></Route>
    <Route exact path="/events"><div className={!smallerThan1000?"bg_image_events":"bg_image_events_mobile"}><Header/><Temp/></div></Route>
    <Route exact path="/contact"><div className={!smallerThan1000?"bg_image_contact":"bg_image_contact_mobile"}><Header/><Contact/></div></Route>
    <Route exact path="/register"><div className={!smallerThan1000?"bg_image_register":"bg_image_register_mobile"}><Header/><Register/></div></Route>
    <Route exact path="/payment"><div className={!smallerThan1000?"bg_image_payment":"bg_image_payment_mobile"}><Header/><PaymentPortal/><FootPayment/></div></Route>
    <Route exact path="/terms"><div className={!smallerThan1000?"bg_image_paymentterms":"bg_image_payment_mobileterms"}><TandC/></div></Route>
    <Route exact path="/payment/success"><div className={!smallerThan1000?"bg_image_payment":"bg_image_payment_mobile"}><PaymentSuccess/><FootPayment/></div></Route>
    </Switch>
    </Router>)
}
//functions
export default App;
//exports
