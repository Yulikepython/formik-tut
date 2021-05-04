import React from "react"
import { Formik, Form, useField, Field } from "formik"

const MyTextInput = ({label, ...props}) => {    
    const [field] = useField(props)
    console.log(useField(props))
    console.log("props", props)
    console.log("field: ", field)
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} />
            {/* <input className="text-input" {...props} /> */}
        </>
    )
}

const SignupForm = () => {
    return (
        <Formik 
            initialValues = {{
                "lastName": "",
                "firstName":"",
            }}
            onSubmit = {values => 
              console.log(values)
            }
          
        >
          <Form>
            <label htmlFor="lastName">苗字</label>
            <Field
              name="lastName"
              type="text"
              placeholder="苗字"
            >
            </Field>
            <MyTextInput
                label="名"
                name="firstName"
                type="text"
                placeholder="名"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
    )
}

export default SignupForm