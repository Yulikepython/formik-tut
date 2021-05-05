import React from "react"
import { useFormik } from "formik"

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            lastName: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    console.log(formik)
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="lastName">苗字</label>
            <input 
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <button type="submit">登録</button>
        </form>
    )
}

export default SignupForm