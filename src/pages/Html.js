import React from 'react';
import html from '../assets/logo_html.png'
import {useHistory} from 'react-router';

function Html() {
  let history = useHistory();
    return (
        <div className="px-4 py-5 my-5 text-center">
          <img className="d-block mx-auto mb-4" src={html} alt="css" style={{width:"10%"}} />
          <h1 className="display-5 fw-bold">HTML</h1>
          <div className="col-md-8 mx-auto">
            <p className="mb-4">
            The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
            Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.              </p>
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

export default Html