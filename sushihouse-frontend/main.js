//All form elements
const form = document.getElementById("form");
const menu = document.getElementById("select-menu");
const cbEdamame = document.getElementById("cb-edamame");
const cbMisoSoup = document.getElementById("cb-miso-soup");
const cbWakameSalad = document.getElementById("cb-wakame-salad");
const cbGyoza = document.getElementById("cb-gyoza");
const comment = document.getElementById("tf-comment");
const firstname = document.getElementById("input-firstname");
const lastname = document.getElementById("input-lastname");
const email = document.getElementById("input-email");
const tel = document.getElementById("input-tel");
const address = document.getElementById("input-address");
const city = document.getElementById("input-city");
const zip = document.getElementById("input-zip");
const cbNewsletter = document.getElementById("cb-newsletter");

function validateForm() {
  //All validation functions in validation.js file
  let check1 = checkMenu(menu);
  let check2 = minOneCheck([cbEdamame, cbMisoSoup, cbWakameSalad, cbGyoza]);
  let check3 = checkComment(comment);
  let check4 = checkName(firstname);
  let check5 = checkName(lastname);
  let check6 = checkEmail(email);
  let check7 = checkTel(tel);
  let check8 = checkAddress(address);
  let check9 = checkCity(city);
  let check10 = checkZip(zip);
  let check11 = checkNewsletter(cbNewsletter);

  return (check1 && check2 && check3 && check4 && check5 && check6 && check7 && check8 && check9 && check10 && check11);
}

function sendForm() {
  let order = {
    menu: menu.value,
    side: {
      edamame: cbEdamame.checked,
      misoSoup: cbMisoSoup.checked,
      wakameSalad: cbWakameSalad.checked,
      gyoza: cbGyoza.checked
    },
    comment: comment.value,
    user: {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      tel: tel.value,
      address: address.value,
      city: city.value,
      zip: zip.value,
      newsletter: cbNewsletter.checked
    }
  }

  const SERVER = "http://localhost:3000";
  fetch(SERVER+'/order/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  }).then(response => response.json()
  ).then(data => {
    alert(data.msg);
  });
}

form.addEventListener('submit', function(e) {
//Prevents reload
  e.preventDefault();

  //Validate form
  let valid = validateForm();

  //Everything is good, send form
  if (valid) {
    sendForm();
  }
});