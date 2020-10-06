import { Formik } from 'formik'
import React from 'react'
import '../App.css'




export default function PersonalDetails(props) {
    return (
        <div>
            <Formik
initialValues = {{firstname:'',lastname:'',address:'',city:'',pincode:''}}
validate={(values) => {
    const errors={};
    if(!values.firstname){
        errors.firstname = "firstname must"
    }else if(values.firstname.length < 6){
        errors.firstname="min 6 characters"
    }else if(!values.lastname){
        errors.lastname = "lastname must"
    }else if(values.lastname.length < 6){
        errors.lastname="min 6 characters"
}else if(!values.address){
        errors.address = "address must"
    }
    else if(!values.city){
        errors.city = "city mandatory"
    }else if(!values.pincode){
        errors.pincode = "Bio must"
    }else if(values.pincode.length < 6){
        errors.pincode = "Invalid"
    }
    return errors;
}} 
// errors = {{}}
onSubmit={(values, { setSubmitting }) => {
   props.setActiveForm(3)
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
          name="firstname"
          placeholder="Firstname"
        onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstname}
         />
          {/* <div class="label-text">Username</div> */}
        </label>
        <p>{errors.firstname && touched.firstname && errors.firstname}</p>
        <label>
          <input type="text" 
          name="lastname"
          placeholder="Lastname"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastname}
         />
          {/* <div class="label-text">Username</div> */}
        </label>
        <p>{errors.lastname  && touched.lastname && errors.lastname}</p>

        <label>
          <textarea type="address" 
          name="address"
          placeholder="Address"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.address} />
          <p>{errors.address  && touched.address && errors.address}</p>
          {/* <div class="label-text">Email</div> */}
        </label>
        <label>
          <input 
          type="text"
          name="city"
          placeholder="City"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.city}
          />
          <p>{errors.city  && touched.city && errors.city}</p>
        </label>
        <label>
          <input type="text" 
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.pincode} />
          <p>{errors.pincode  && touched.pincode && errors.pincode}</p>
          {/* <div class="label-text">bio</div> */}
        </label>
        <button type="submit" >Proceed</button>
      </form>
    )}

</Formik>
        </div>
    )
}
