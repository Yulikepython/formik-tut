import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

const validate = Yup.object({
    name: Yup.string().max(15, "名前は15文字までです").required("名前必須"),
    email: Yup.string().email("Eメールアドレスが無効です").required("メールアドレス必須"),
})

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
        },
        validationSchema: validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    console.log(formik.touched)
    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div className="w-25 mx-auto my-3">
                <label htmlFor="name">名前</label>
                <input 
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    className="form-control"
                />
                { formik.touched.name &&formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null }
            </div>
            
            <div className="w-25 mx-auto my-3">
                <label htmlFor="email">メールアドレス</label>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    className="form-control"
                />
                { formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null }
            </div>
            <div className="w-25 text-center mx-auto">
                <button type="submit" className="btn btn-primary w-100 my-3">Submit</button>
            </div>
        </form>
    )
}

export default SignupForm