import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar'

import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";


const AppRouter = () => {
    return(
        <Router basename="tatangalar">
            <Navbar />
            <Newsletter />
            <Header />
            <Footer />
        </Router>
    )
}

export default AppRouter;