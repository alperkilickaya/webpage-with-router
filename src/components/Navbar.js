
import { Collapse } from 'bootstrap'
import React, {useState, useEffect} from 'react';
import logo from '../assets/cw.svg'
import {NavLink, useHistory} from 'react-router-dom';

function Navbar() {
    let history = useHistory();

    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        const myCollapse = document.getElementById('navbarTogglerDemo02')
        const bsCollapse = new Collapse(myCollapse, {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
        console.log("alper");
    },[])



    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" style={{cursor:"pointer"}} onClick={()=>history.push("/")}>
                    <img className="me-2" src={logo} style={{width:"35px"}} alt="" />
                    Web Design
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page">Home</a>        
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Disabled</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;
