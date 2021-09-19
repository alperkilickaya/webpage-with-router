import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues={
    name:"",
    email:"",
}

const onSubmit=(values)=>{
    alert("Values:",values)
}

const validationSchema=Yup.object({
    name:Yup.string()
    .max(15,"Max 15 characters!")
    .required("Please write name!"),
    email:Yup.string()
    .email("Invalid email !")
    .required("Please write email!"),
})


function Newsletter() {
    const formik=useFormik({ 
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <div className="container-fluid bg-secondary p-3 border-bottom border-white" style={{marginTop:"65px"}}>
            <div className="row">
                <div className="col-md-6 text-start ps-4">
                    <h3 className="text-white">Subscribe to Our Newsletter</h3>
                </div>
                <div className="col-md-6">
                    <form action="#" className="row g-3" onSubmit={formik.handleSubmit}>
                        <div className="col-md-4">
                            <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter name"
                            name="name"
                            onChange={formik.handleChange} 
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name ? <span className="text-danger fw-normal bg-light p-1 rounded fs-6">{formik.errors.name}</span> : null}

                        </div>
                        <div className="col-md-4">
                            <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter email"
                            name="email"
                            onChange={formik.handleChange} value={formik.values.email}
                            onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ? <span  className="text-danger fw-normal bg-light p-1 rounded">{formik.errors.email} </span> : null}

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
