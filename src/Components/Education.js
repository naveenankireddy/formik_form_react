import { Formik } from 'formik'
import '../App.css'
import React from 'react'



export default function Education(props) {
    return (
        <div>
            <Formik
            initialValues = {{school:'',college:'',postgraduate:''}}
            validate={(values) => {
                const errors={};
                if(!values.school){
                    errors.school = "school must"
                }else if(!values.college){
                    errors.college = "college must"
                }else if(!values.postgraduate){
                    errors.postgraduate = "postgraduate must"
                }
                return errors;
            }} 
            // errors = {{}}
            onSubmit={(values, { setSubmitting }) => {
                props.setActiveForm(4);
              }}
            >
                {({values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting}) => (
                    <form onSubmit = {handleSubmit}>
                    <label>
                      <input type="text" 
                      name="school"
                      placeholder="School"
                    onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.school}
                     />
                      {/* <div class="label-text">Username</div> */}
                    </label>
                    <p>{errors.school  && touched.school && errors.school}</p>
                    <label>
                      <input 
                      type="text"
                      name="college"
                      placeholder="College"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.college} />
                      <p>{errors.college  && touched.college && errors.college}</p>
                    </label>
                    <label>
                      <input type="text" 
                      name="postgraduate"
                      placeholder="Postgradate"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.postgradate} />
                      <p>{errors.postgraduate  && touched.postgraduate && errors.postgraduate}</p>
                      {/* <div class="label-text">bio</div> */}
                    </label>
                    <button type="submit" >Submit</button>
                  </form>
                )}

            </Formik>
        </div>
    )
}
