import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues={
    name:"",
    email:"",
    textarea:"",
}

const onSubmit=(values)=>{
    console.log("Values:",values)
}

const validationSchema=Yup.object({
    name:Yup.string()
    .max(15,"Must be 15 characters or less!")
    .required("Please write your name!"),
    email:Yup.string()
    .email("Invalid email address!")
    .required("Please write your email address!"),
    textarea:Yup.string()
    .min(2,"Please write something!")
    .required("Please write your message!")
})

function Contact() {
    const formik=useFormik({ 
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
                
        <form className="bg-secondary text-light rounded" onSubmit={formik.handleSubmit}>
            <h4 className="font-weight-bold pt-3">Get A Quote</h4>
            <div className="px-3 text-start">
                <label htmlFor="InputName" className="form-label">Name(*)</label>
                <input type="text" className="form-control mb-2" id="InputName" name="name" 
                  onChange={formik.handleChange} 
                  value={formik.values.name}
                  onBlur={formik.handleBlur}></input>
                  {formik.touched.name && formik.errors.name ?<span className="text-danger fw-normal bg-light p-1 rounded fs-6">{formik.errors.name}</span> : null}
            </div>
            <div className="px-3 text-start">
                <label htmlFor="InputEmail" className="form-label">Email address(*)</label>
                <input type="text" className="form-control mb-2" id="InputEmail" aria-describedby="emailHelp" name="email"
                onChange={formik.handleChange} value={formik.values.email}
                onBlur={formik.handleBlur}></input>
                 {formik.touched.email && formik.errors.email ?<span  className="text-danger fw-normal bg-light p-1 rounded">{formik.errors.email} </span> : null}
            </div>
            <div className="px-3 text-start">
                <label htmlFor="InputTextarea" className="form-label">Message</label>
                <textarea className="form-control mb-2" id="InputTextarea" style={{resize:"none"}} name="textarea"
                 onChange={formik.handleChange} value={formik.values.textarea}
                 onBlur={formik.handleBlur} />
                {formik.touched.textarea && formik.errors.textarea ? <span  className="text-danger fw-normal bg-light p-1 rounded">{formik.errors.textarea} </span> : null}
            </div>
            <button type="submit" className="btn btn-warning my-3 fw-bold">Submit</button>
        </form>
    )
}

export default Contact
