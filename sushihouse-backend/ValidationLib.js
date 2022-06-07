function showError(id, message) {
  return `${id}: ${message}`;
}

// Show success outline
function showSuccess(id) {
  return `${id} successfully validated!`;
}

function checkMenu(id, input) {
  const re = /\D/;
  let result = {
    isNotValid: false,
    msg: showSuccess(id)
  }

  if (input <= 0 || input > 3  || re.test(input)) {
    result = {
      isNotValid: true,
      msg: showError(id, 'Menu is not valid')
    }
  }

  return result;
}

function minOneCheck(id, inputs) {
  let result = {
    isNotValid: true,
    msg: showError(id, 'Side is not valid')
  }

  for (const key in inputs) {
    if (inputs[key]) {
      result = {
        isNotValid: false,
        msg: showSuccess(id)
      }
    }
  }

  return result;
}

function checkComment(id, input) {
  //Always true
  let result = {
    isNotValid: false,
    msg: showSuccess(id)
  }

  return result;
}

function checkName(id, input) {
  const re = /\d/;
  let result = {
    isNotValid: false,
    msg: showSuccess(id)
  }

  if (input.trim().length < 2 || re.test(input)) {
    result = {
      isNotValid: true,
      msg: showError(id, 'Name is not valid')
    }
  }

  return result;
}

function checkEmail(id, input) {
  let result = {
    isNotValid: false,
    msg: showSuccess(id)
  }

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.trim())) {
    result = {
      isNotValid: true,
      msg: showError(id, 'Email is not valid')
    }
  }

  return result;
}

function checkTel(id, input) {
  let result = {
    isNotValid: false,
    msg: showSuccess(id)
  }

  //Has anything other than a digit
  const re = /\D/;

  if (input.length != 10 || re.test(input)) {
    result = {
      isNotValid: true,
      msg: showError(id, 'Telephone is not valid')
    }
  }

  return result;
}

function checkAddress(id, input) {
  let result = {
    isNotValid: false,
    msg: showSuccess(id)
  }

  if (input.length < 2) {
    result = {
      isNotValid: true,
      msg: showError(id, 'Address is not valid')
    }
  }

  return result;
}

function checkCity(id, input) {
  let result = {
    isNotValid: false,
    msg: showSuccess(id)
  }

  if (input.length < 2) {
    result = {
      isNotValid: true,
      msg: showError(id, 'City is not valid')
    }
  }

  return result;
}

function checkZip(id, input) {
  let result = {
    isNotValid: false,
    msg: showSuccess(id)
  }

  //Has anything other than a digit
  const re = /\D/;

  if (input.length != 4 || re.test(input)) {
    result = {
      isNotValid: true,
      msg: showError(id, 'Zip is not valid')
    }
  }

  return result;
}

function checkNewsletter(id, input) {
  //Always true
  let result = {
    isNotValid: false,
    msg: showSuccess(id)
  }

  return result;
}

module.exports = {
  checkMenu,
  minOneCheck,
  checkComment,
  checkName,
  checkEmail,
  checkTel,
  checkAddress,
  checkCity,
  checkZip,
  checkNewsletter
}