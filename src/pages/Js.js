import React from 'react';
import js from '../assets/logo_js.png'
import {useHistory} from 'react-router';

function Js() {
  let history = useHistory();
    return (
        <div className="px-4 py-5 my-5 text-center">
          <img className="d-block mx-auto mb-4" src={js} alt="css" style={{width:"10%"}} />
          <h1 className="display-5 fw-bold">JS</h1>
          <div className="col-md-8 mx-auto">
            <p className="mb-4">
            JavaScript (/ˈdʒɑːvəˌskrɪpt/),[9] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[10] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
            Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[11] Over 97% of websites use it client-side for web page behavior,[12] often incorporating third-party libraries.[13] Most web browsers have a dedicated JavaScript engine to execute the code on the user's device.
             </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3"
              onClick={()=>history.goBack()}
              >
                Go Back
              </button>
            </div>
          </div>
         </div>
    )
}

export default Js