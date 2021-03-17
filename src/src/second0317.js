import React from "react"
import { useFormik } from "formik"

const validate = values => {
    const errors = {}
    if (!values.lastName){
        errors.lastName = "Required"
    } else if (values.lastName.length > 15){
        errors.lastName = "苗字にしては長すぎます！"
    }
    if (!values.firstName){
        errors.firstName = "Required"
    } else if (values.firstName.length > 20){
        errors.firstName = "名前にしては長すぎます！"
    }
    if (!values.email){
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "無効なアドレスです"
    }
    return errors
}

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            lastName: "",
            firstName:"",
            email:"",
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    console.log(formik.touched)
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="lastName">姓</label>
            <input 
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
                {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div>:null}
            <label htmlFor="firstName">名</label>
            <input 
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div>: null}
            <label htmlFor="email">Eメール</label>
            <input 
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>: null}

            <button type="submit">登録</button>
            
        </form>
    )
}

export default SignupForm