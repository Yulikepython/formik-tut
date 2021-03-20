import React from "react"
import { Formik, Form, useField } from "formik"
import * as Yup from "yup"

//TextInput
const MyTextInput = ({label, ...props}) => {
    // console.log('props:', props)
    // {
    //     "name": "lastName",
    //     "type": "text",
    //     "placeholder": "last name"
    // }
    // const test = useField(props)
    // console.log('usefield: ', test)
    // [
    //     {
    //         "name": "lastName",
    //         "value": ""
    //     },
    //     {
    //         "value": "",
    //         "touched": false,
    //         "initialValue": "",
    //         "initialTouched": false
    //     },
    //     {}
    // ]
    const [field, meta, f, n] = useField(props)
    console.log("field: ", field)
    // console.log("meta: ", meta)
    // console.log("f: ", f) //setValue
    // console.log("n: ", n) //undefined
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const MyCheckbox = ({ children, ...props }) => {
    // console.log("checkbox props: ", props)
    // {
    //     "label": "Termsに同意",
    //     "name": "acceptedTerms"
    // }


    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`

    const [field, meta] = useField({ ...props, type: 'checkbox' });
    // console.log("checkbox field: ", field)
    // {
    //     "name": "acceptedTerms",
    //     "value": false,
    //     "checked": false
    // }
    // console.log("checkbox meta: ", meta)
    // {
    //     "value": false,
    //     "touched": false,
    //     "initialValue": false,
    //     "initialTouched": false
    // }
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  const MySelect = ({ label, ...props }) => {
    //   console.log("select props: ", props)
    //   {name: "jobType", children: Array(5)}
    //childrenはoptionの5つ
    const [field, meta] = useField(props);
    // console.log("select field: ", field)
    // {
    //     "name": "jobType",
    //     "value": ""
    // }
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

const SignupForm = (formProps) => {
    const {tst} = formProps
    return (
        <Formik 
            initialValues = {{
                "lastName": tst,
                "firstName": "",
                "email":"",
                "acceptedTerms":false,
                "jobType":""
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                lastName: Yup.string()
                  .max(20, 'Must be 20 characters or less')
                  .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                acceptedTerms: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.'),
                jobType: Yup.string()
                    .oneOf(
                    ['designer', 'development', 'product', 'other'],
                    'Invalid Job Type'
                    )
                    .required('Required'),
                    })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
        >
          <Form>
            <MyTextInput
                label="苗字"
                name="lastName"
                type="text"
                placeholder="last name"
            />
            <MyTextInput
                label="名"
                name="firstName"
                type="text"
                placeholder="first name"
            />
            
            <MyTextInput
                label="Eメール"
                name="email"
                type="email"
                placeholder="email@abc.com"
            />
            <MySelect label="Job Type" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
           </MySelect>
            <MyCheckbox 
                label="Termsに同意"
                name="acceptedTerms"
            >
                Termsに同意します
            </MyCheckbox>


    
            <button type="submit">Submit</button>
          </Form>
        </Formik>
    )
}


export default SignupForm