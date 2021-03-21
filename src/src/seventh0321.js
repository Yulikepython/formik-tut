//https://formik.org/docs/api/fieldarray
import React from "react"
import {Formik, Form, Field, FieldArray } from "formik"

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
            render={({ values }) => (
                <Form>
                    <FieldArray
                        name="friends"
                        render={arrayHelpers => (
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
                                                onClick={() => arrayHelpers.insert(index, '')}
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
                    />
                </Form>
            )}
        />
    </div>
)

export default FriendList