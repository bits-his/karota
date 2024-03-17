'use strict';

var Validator = require('validator');
var isEmpty = require('./isEmpty');

function validateLoginForm(data) {
  var errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isLength(data.username, { min: 3, max: 50 })) {
    errors.username = 'Username is invalid';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateLoginForm;
//# sourceMappingURL=login.js.map