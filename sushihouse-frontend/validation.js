function showValidation(input, success) {
  //Remove previous valid classes
  input.classList.remove("is-valid");
  input.classList.remove("is-invalid");

  if (success) {
    //Input is valid
    input.classList.add("is-valid");
  }else {
    //Input is invalid
    input.classList.add("is-invalid");
  }
}

function checkMenu(input) {
  const re = /\D/;

  if (input.value <= 0 || input.value > 3  || re.test(input.value)) {
    showValidation(input, false);
    return false;
  }else {
    showValidation(input, true);
    return true;
  }
}

function minOneCheck(inputs) {
  let success = false;
  inputs.forEach((cb) => {
    if (cb.checked) {
      success = true;
    }
  });

  inputs.forEach((input) => {
    showValidation(input, success);
  });

  return success;
}

function checkComment(input) {
  //Currently always true
  showValidation(input, true);

  return true;
}

function checkName(input) {
  const re = /\d/;
  if (input.value.trim().length < 2 || re.test(input.value)) {
    showValidation(input, false);
    return false;
  }else {
    showValidation(input, true);
    return true;
  }
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let success = re.test(input.value.trim());

  showValidation(input, success);

  return success;
}

function checkTel(input) {
  //Has anything other than a digit
  const re = /\D/;

  if (input.value.length != 10 || re.test(input.value)) {
    showValidation(input, false);
    return false;
  }else {
    showValidation(input, true);
    return true;
  }
}

function checkAddress(input) {
  if (input.value.length < 2) {
    showValidation(input, false);
    return false;
  }else {
    showValidation(input, true);
    return true;
  }
}

function checkCity(input) {
  if (input.value.length < 2) {
    showValidation(input, false);
    return false;
  }else {
    showValidation(input, true);
    return true;
  }
}

function checkZip(input) {
  //Has anything other than a digit
  const re = /\D/;

  if (input.value.length != 4 || re.test(input.value)) {
    showValidation(input, false);
    return false;
  }else {
    showValidation(input, true);
    return true;
  }
}

function checkNewsletter(input) {
  showValidation(input, true)
  return true;
}