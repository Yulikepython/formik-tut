import React from "react"
import {ErrorMessage, Formik, Field, Form } from "formik"
import * as Yup from "yup"

const SignupForm = () => {
    return (
        <Formik 
            initialValues = {{
                "lastName": "",
                "firstName": "",
                "email":""
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                lastName: Yup.string()
                  .max(20, 'Must be 20 characters or less')
                  .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
        >
          <Form>
            <label htmlFor="lastName">苗字</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />
            
            <label htmlFor="firstName">名</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" />
    
            <label htmlFor="email">Eメールアドレス</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
    
            <button type="submit">Submit</button>
          </Form>
        </Formik>
    )
}


export default SignupForm