import { Formik } from 'formik'
import React from 'react'
import '../App.css'
// import Mui from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton'

export default function Profile(props) {
    return (
        <div>
            <Formik
            initialValues = {{username:'',email:'',contact:'',bio:''}}
            validate={(values) => {
                const errors={};
                if(!values.username){
                    errors.username = "username must"
                }else if(values.username.length < 8){
                    errors.username="min 8 characters"
                }else if(!values.email){
                    errors.email = "email must"
                }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                    errors.email = "email must"
                }else if(!values.contact){
                    errors.contact = "Mobile number is mandatory"
                }else if(!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/gm.test(values.contact)){
                    errors.contact="Invalid Number"
                }
                else if(values.contact.length< 10){
                    errors.contact = "Min 10 digits"
                }else if(!values.bio){
                    errors.bio = "Bio must"
                }else if(values.bio.length < 10){
                    errors.bio = "Atleast 20 words"
                }
                return errors;
            }} 
            // errors = {{}}
            onSubmit={(values, { setSubmitting }) => {
               props.setActiveForm(2);
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
                      name="username"
                      placeholder="Username"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.username}
                     />
                      {/* <div class="label-text">Username</div> */}
                    </label>
                    <p>{errors?.username && touched.username && errors?.username}</p>

                    <label>
                      <input type="email" 
                      name="email"
                      onBlur={handleBlur}
                      placeholder="Email"
                      onChange={handleChange}
                      value={values.email} />
                      {/* <div class="label-text">Email</div> */}
                    </label>
                    <p>{errors?.email  && touched.email && errors?.email}</p>
                    <label>
                      <input 
                      type="text"
                      name="contact"
                      placeholder="Contact"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.contact} />
                    </label>
                    <p>{errors.contact  && touched.contact && errors.contact}</p>
                    <label>
                      <textarea type="bio" 
                      name="bio"
                      placeholder="Bio"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.bio} />
                      {/* <div class="label-text">bio</div> */}
                    </label>
                    <p>{errors.bio  && touched.bio && errors.bio}</p>
                    <button type="submit" >Proceed</button>
                  </form>
                )}

            </Formik>
        </div>
    )
}
