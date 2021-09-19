import React from 'react';
import css from '../assets/logo_css.png'
import {useHistory} from 'react-router';

function Css() {
  let history = useHistory();
    return (
        <div className="px-4 py-5 my-5 text-center">
          <img className="d-block mx-auto mb-4" src={css} alt="css" style={{width:"10%"}} />
          <h1 className="display-5 fw-bold">CSS</h1>
          <div className="col-md-8 mx-auto">
            <p className="mb-4">
            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]
            CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content as well as enabling the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.
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

export default Css
