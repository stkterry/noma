const Validator = require("validator");
const { toValidText } = require("./validation-util");

module.exports = ({username, email, password, password2 }) => {
  username = toValidText(username);
  email = toValidText(email);
  password = toValidText(password);
  password2 = toValidText(password2);

  const USERNAME = [
    ...(!Validator.isLength(username, { min: 4, max: 30 }) ? ["Username is between 4 and 30 characters"] : []),
    ...(Validator.isEmpty(username) ? ["Username field is required"] : []),
  ]

  const EMAIL = [
    ...(Validator.isEmpty(email) ? ["Email field is required"] : []),
    ...(!Validator.isEmail(email) ? ["Not a valid email"] : []),
  ]

  const PASSWORD = [
    ...(!Validator.isLength(password, { min: 6, max: 30 }) ? ["Password is between 6 and 30 characters"] : []),
    ...(Validator.isEmpty(password) ? ["Password field is required"] : []),
    ...(Validator.isEmpty(password2) ? ["You must confirm password"] : []),
    ...(!Validator.equals(password, password2) ? ["Passwords must match"] : []),   
  ]

  const errors = {
    ...(USERNAME.length && { username: USERNAME }),
    ...(EMAIL.length && { email: EMAIL }),
    ...(PASSWORD.length && { password: PASSWORD })
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};