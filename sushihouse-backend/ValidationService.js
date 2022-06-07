// Validate form input elements
const validateLib = require('./ValidationLib');

function validateOrder(orderObj) {

  // Check all fields
  let result = validateLib.checkMenu("menu", orderObj.menu);
  if (result.isNotValid) { return result; }

  result = validateLib.minOneCheck("side", orderObj.side);
  if (result.isNotValid) { return result; }

  result = validateLib.checkComment("comment", orderObj.comment);
  if (result.isNotValid) { return result; }

  result = validateLib.checkName("firstname", orderObj.user.firstname);
  if (result.isNotValid) { return result; }

  result = validateLib.checkName("lastname", orderObj.user.firstname);
  if (result.isNotValid) { return result; }

  result = validateLib.checkEmail("email", orderObj.user.email);
  if (result.isNotValid) { return result; }

  result = validateLib.checkTel("tel", orderObj.user.tel);
  if (result.isNotValid) { return result; }

  result = validateLib.checkAddress("address", orderObj.user.address);
  if (result.isNotValid) { return result; }

  result = validateLib.checkCity("city", orderObj.user.city);
  if (result.isNotValid) { return result; }

  result = validateLib.checkZip("zip", orderObj.user.zip);
  if (result.isNotValid) { return result; }

  result = validateLib.checkNewsletter("newsletter", orderObj.user.newsletter);
  if (result.isNotValid) { return result; }

  //all inputs are valid and isNotValid=false
  return false;
}

module.exports = {
  validateOrder
}