import React from 'react'
import {useHistory} from 'react-router';
import css_logo from '../assets/logo_css.png'
import html_logo from '../assets/logo_html.png'
import js_logo from '../assets/logo_js.png'

function Main() {
    let history = useHistory();
    return (
        <div className="container my-5 mx-auto">
            <div className="row">
                <div className="col-md-4 p-5">
                    <div className="card align-items-center shadow">
                        <img src={css_logo} class="card-img-top p-3" style={{width:"50%"}} alt="css"/>
                        <div className="card-body">
                            <h5 className="card-title">CSS</h5>
                            <p className="card-text">CSS (Cascading Style Sheets) is a declarative language that controls how webpages look in the browser.</p>
                            <a 
                            onClick={()=>history.push("/css")} 
                            className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-5">
                    <div className="card align-items-center shadow">
                        <img src={html_logo} class="card-img-top p-3" style={{width:"50%"}} alt="css"/>
                        <div className="card-body">
                            <h5 className="card-title">HTML</h5>
                            <p className="card-text">HTML (HyperText Markup Language) is a descriptive language
                  that specifies webpage structure.</p>
                            <a 
                            onClick={()=>history.push("/html")}
                            className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-5">
                    <div className="card align-items-center shadow">
                        <img src={js_logo} class="card-img-top p-3" style={{width:"50%"}} alt="css"/>
                        <div className="card-body">
                            <h5 className="card-title">JS</h5>
                            <p className="card-text">JavaScript (JS) is a lightweight, interpreted, or just-in-time
                  compiled programming language.</p>
                            <a
                            onClick={()=>history.push("/js")}
                            className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Main
