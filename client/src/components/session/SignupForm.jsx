import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter, Link } from 'react-router-dom';

import BtnDef from '../buttons/BtnDef';
import ErrorList from '../errors/ErrorList';

const defaultValues = {
  username: "",
  email: "",
  password: "",
  password2: ""
}

export default withRouter(function LoginForm(props) {

  const [errors, setErrors] = useState({});
  useEffect(() => { setErrors(props.errors) }, [props.errors]);

  const onSubmit = formData => props.signup(formData);
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <div id="form-page">
      <div id="login_form-container">
        <h2 className="logoHead">NOMADORY</h2>
        <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="formHead">Signup</h2>
          <input
            name="username"
            type="text"
            ref={register}
            placeholder="Username"
          />
          <br />
          {props.errors.username && <ErrorList errors={props.errors.username} />}
          <input
            name="email"
            type="text"
            ref={register}
            placeholder="Email"
          />
          <br />
          {props.errors.email && <ErrorList errors={props.errors.email} />}
          <input
            name="password"
            type="text"
            ref={register}
            placeholder="Password"
          />
          <br />
          <input
            name="password2"
            type="text"
            ref={register}
            placeholder="Confirm Password"
          />
          <br />
          {props.errors.password && <ErrorList errors={props.errors.password} />}
          <BtnDef onClick={handleSubmit}>Create Nomadory account</BtnDef>
        </form>

        <p>Already a Nomadory verified vendor? <Link className="inline-link" to="/login">Login</Link></p>
      </div>
    </div>
  )

})