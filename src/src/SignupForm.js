import React from "react"
import { Formik, Form, useField } from "formik"
import * as Yup from "yup"

const MyTextInput = ({ label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        < >
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error"> {meta.error} </div>
            ) : null}
        </>
    )
}

const MyCheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({...props, type: "checkbox"})
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field }{ ... props } />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}

const SignupForm = () => {
    return (
        <Formik
            initialValues={{ 
                    firstName:"", 
                    lastName:"", 
                    email:"",
                    acceptedTerms: false,
                    jobType: "",
                }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be less than 15 characters')
                    .required("Required"),
                lastName: Yup.string()
                    .max(20, 'Must be less than 20 characters')
                    .required("Required"),
                email: Yup.string()
                    .email("Invalid Email Address")
                    .required("Required"),
                acceptedTerms: Yup.boolean()
                    .required("Required")
                    .oneOf([true], "You must accept the terms and conditions."),
                jobType: Yup.string()
                    .oneOf(
                        ["designer", "development", "product", "other"],
                        "Invalid Job Type"
                    )
                    .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                }, 400)
            }}
        >
            <Form>
                <MyTextInput 
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                />

                <MyTextInput 
                    label="last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                />

                <MyTextInput 
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Yu@itc.tokyo"
                />
                
                <MySelect label="Job Type" name="jobType">
                    <option value="">Select a job type</option>
                    <option value="designer">Designer</option>
                    <option value="development">Developer</option>
                    <option value="product">Product Manager</option>
                    <option value="other">Other</option> 
                </MySelect>

                <MyCheckBox name="acceptedTerms">
                    I accept the terms and conditions
                </MyCheckBox>
                <button type="submit">Submit</button>
            </Form>
        </Formik>    
    )
}

export default SignupForm