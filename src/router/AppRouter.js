import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar'

import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Main from "../components/Main";
import Css from '../pages/Css';
import Html from '../pages/Html';
import Js from '../pages/Js';
import Home from '../pages/Home';
import About from "../pages/About";
import Services from "../pages/Services";


const AppRouter = () => {
    return(
        <Router basename="tatangalar">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/css" component={Css} />
                <Route path="/html" component={Html} />
                <Route path="/js" component={Js} />

            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter;