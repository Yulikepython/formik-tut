import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

const SignupFormYup = () => {
    const formik = useFormik({
        initialValues: {
            firstName:"",
            lastName:"",
            email: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be less than 15 characters')
                .required("Required"),
            lastName: Yup.string()
                .max(20, 'Must be less than 20 characters')
                .required("Required"),
            email: Yup.string()
                .email("Invalid Email Address")
                .required("Required"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input 
                id="firstName"
                type="text"
                {...formik.getFieldProps("firstName")}
            />
            { formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null }

            <label htmlFor="lastName">Last Name</label>
            <input 
                id="lastName"
                type="text"
                {...formik.getFieldProps("lastName")}
            />
             { formik.touched.lastName &&formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input 
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
            />
             { formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <button type="submit">Submit</button>
        </form>
    )
}

export default SignupFormYup