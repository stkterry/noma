import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter, Link } from 'react-router-dom';

import BtnDef from '../buttons/BtnDef';
import ErrorList from '../errors/ErrorList';

const defaultValues = {
  username: "",
  email: "",
  password: "",
  password2: "",
  firstName: "",
  lastName: ""
}

export default withRouter(function SignupForm(props) {


  useEffect(() => { 
    if(props.isSignedIn) props.login(getValues(['email', 'password']))
  }, [props.isSignedIn])

  const onSubmit = formData => props.signup(formData);
  
  const { register, handleSubmit, getValues } = useForm({ defaultValues });

  const [errors, setErrors] = useState([]);
  useEffect(() => { setErrors(props.errors) }, [props.errors]);
  useEffect(() => { setErrors([]) }, []);

  return (
    <div id="form-page">
      <div id="login_form-container">
        <h2 className="logoHead">NOMADORY</h2>
        <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="formHead">Signup</h2>
          <input
            onFocus={() => setErrors([])}
            name="username"
            type="text"
            ref={register}
            placeholder="Username"
          />
          <br />
          {errors.username && <ErrorList errors={errors.username} />}
          <input
            onFocus={() => setErrors([])}
            name="email"
            type="text"
            ref={register}
            placeholder="Email"
          />
          <br />
          {errors.email && <ErrorList errors={errors.email} />}
          <input
            onFocus={() => setErrors([])}
            name="password"
            type="password"
            ref={register}
            placeholder="Password"
          />
          <br />
          <input
            onFocus={() => setErrors([])}
            name="password2"
            type="password"
            ref={register}
            placeholder="Confirm Password"
          />
          <br />
          {errors.password && <ErrorList errors={errors.password} />}
          <BtnDef onClick={handleSubmit}>Create Nomadory account</BtnDef>
        </form>

        <p>Already a Nomadory verified vendor? <Link className="inline-link" to="/login">Login</Link></p>
      </div>
    </div>
  )

})