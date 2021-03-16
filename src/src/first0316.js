import React from "react"
import { useFormik } from "formik"

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            lastName: "",
            firstName:"",
            email:""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="lastName">姓</label>
            <input 
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <label htmlFor="firstName">名</label>
            <input 
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <label htmlFor="email">Eメール</label>
            <input 
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <button type="submit">登録</button>
            
        </form>
    )
}

export default SignupForm