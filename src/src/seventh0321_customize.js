import React from "react"
import {Formik, Form, Field, FieldArray } from "formik"

const rendered_func = arrayHelpers => {
    console.log("arrayHelpers", arrayHelpers)
    const {form} = arrayHelpers
    const {values} = form
    return (
    <div>
        {values.friends && values.friends.length >0 ?
             (values.friends.map((friend, index) => 
                (
                 <div key={index}>
                     <Field name={`friends.${index}`} />
                     <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                     >-</button>
                     <button
                        type="button"
                        onClick={() => arrayHelpers.push('')}
                     >+</button>
                 </div>
                ))
                ): (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                        Add a friend
                    </button>
                )}
                <div>
                    <button type="submit">Submit</button>
                </div>
    </div>
)}

const FriendList = () => (
    <div>
        <h1>友達リスト</h1>
        <Formik 
            initialValues={{ friends: ["jared", "ian", "brent"]}}
            onSubmit={values =>
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                }, 500)
            }
        >
            <Form>
                <FieldArray 
                    name="friends"
                    render={rendered_func}
                />
            </Form>
        </Formik>

    </div>
)

export default FriendList