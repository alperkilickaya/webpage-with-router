import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar'

const AppRouter = () => {
    return(
        <Router basename="tatangalar">
            <Navbar />
        </Router>
    )
}

export default AppRouter;