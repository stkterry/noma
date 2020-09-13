const Validator = require("validator");
const { toValidText } = require("./validation-util");

module.exports = ({username, email, password, password2 }) => {
  username = toValidText(username);
  email = toValidText(email);
  password = toValidText(password);
  password2 = toValidText(password2);

  const errors = {
    ...(!Validator.isLength(username, { min: 4, max: 30 })
      && { "Username is between 4 and 30 characters: ": false }),
    ...(Validator.isEmpty(username) && { "Username field is required": null }),
    ...(Validator.isEmpty(email) && { "Email field is required": null }),
    ...(!Validator.isEmail(email) && { "Valid email: ": false }),
    ...(!Validator.isLength(password, { min: 6, max: 30 })
      && { "Password is between 6 and 30 characters: ": false }),
    ...(Validator.isEmpty(password) && { "Password field is required": null }),
    ...(Validator.isEmpty(password2) && { "Must confirm password": null }),
    ...(!Validator.equals(password, password2) && { "Passwords must match: ": false })
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};