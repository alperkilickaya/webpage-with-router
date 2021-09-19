
import { Collapse } from 'bootstrap'
import React, {useState, useEffect} from 'react';
import logo from '../assets/cw.svg'
import {Link, useHistory} from 'react-router-dom';

function Navbar() {
    let history = useHistory();

    //bootstrap collapse menüsü için
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        const myCollapse = document.getElementById('navbarTogglerDemo02')
        const bsCollapse = new Collapse(myCollapse, {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
    },[])

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top ps-3">
            <div className="container-fluid hstack">
                <a className="navbar-brand" style={{cursor:"pointer"}} onClick={()=>history.push("/")}>
                    <img className="me-2" src={logo} style={{width:"35px"}} alt="" />
                    Web Design
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link
                        to="/"
                        className="nav-link"
                        >Home
                        </Link>         
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/about"
                        className="nav-link"
                        >About
                        </Link> 
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/services"
                        className="nav-link"
                        >Services
                        </Link> 
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;

