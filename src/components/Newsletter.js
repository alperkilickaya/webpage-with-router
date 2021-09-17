import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';

function Newsletter() {
    return (
        <div className="container-fluid bg-secondary p-3 border-bottom border-white" style={{marginTop:"65px"}}>
            <div className="row">
                <div className="col-md-6 text-start ps-4">
                    <h3 className="text-white">Subscribe to Our Newsletter</h3>
                </div>
                <div className="col-md-6">
                    <form action="#" className="row g-3">
                        <div className="col-md-4">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            />
                        </div>
                        <div className="col-md-4 text-start">
                            <button className="btn btn-success btn-warning">Submit</button>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
    )
}

export default Newsletter
