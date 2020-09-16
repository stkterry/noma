const Validator = require('validator');
const { toValidText } = require("./validation-util");


module.exports = ({ email, password }) => {
  email = toValidText(email);
  password = toValidText(password);

  let emailErrs = [
    ...(!Validator.isEmail(email) ? ["Not a valid email"] : []),
    ...(Validator.isEmpty(email) ? ["Email field required"] : []),
  ]

  let passwordErrs = [
    ...(Validator.isEmpty(password) ? ["Password field required"] : [])
  ]

  const errors = {
    ...(emailErrs.length && { email: emailErrs }),
    ...(passwordErrs.length && { password: passwordErrs }),
  };

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};