import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter, Link } from 'react-router-dom';

import BtnDef from '../buttons/BtnDef';
import ErrorList from '../errors/ErrorList';

const defaultValues = {
  email: "",
  password: ""
}

export default withRouter(function LoginForm (props) {

  const [errors, setErrors] = useState({});
  useEffect(() => { setErrors(props.errors) }, [props.errors]);
  
  const onSubmit = formData => props.login(formData);

  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <div id="form-page">
      <div id="login_form-container">
        <h2 className="logoHead">NOMADORY</h2>
        <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="formHead">Login</h2>
          <input 
            name="email"
            type="text"
            ref={register}
            placeholder="Email"
          />
          <br />
          <ErrorList errors={errors.email} />
          <input
            name="password"
            type="password"
            ref={register}
            placeholder="Password"
          />
          <br />
          <ErrorList errors={errors.password} />

          <BtnDef onClick={handleSubmit}>Login</BtnDef>
        </form>

        <p>Not a Nomadory verified vendor? <Link className="inline-link" to="/signup">Signup</Link></p>
      </div>
    </div>
  )

})