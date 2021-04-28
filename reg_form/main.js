//Creating forms
document.getElementById('reg__form');
addEventListener("submit", checkForm);
//Обработчик события адд ивент лисенер вешается на обьект определенный по ид
//или классу.
function validation ()
{
  var form = document.getELementById("reg__form");
  var email = document.getELementById("email").value;

  var text = document.getELementById("text");
  var pattern = /^[^ ]+@+[a-z]{3,7}\.[a-z]{2,3}/;
  //   if (email.match(pattern)){
  //     form.classList.add("valid");
  //   }
  //   else {
  //     form.classList.remove("valid");
  //   }
  // }
}
function checkForm(element) {
event.preventDefault();
var el = document.getElementById('reg__form');
//var name = document.getElementById('name').value;
var fname = el.fname.value;
var lname = el.lname.value;
var sex = el.sex.value;
var nkontaktowy = el.numer__kontaktowy.value;
var email = el.email.value;
var kraj = el.country.value;
var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var fail = "";

if(fname == "" || lname == "" || sex == "" || nkontaktowy == "" || email == ""
|| kraj == "")
 fail = "Wypełnij wszystkie pola!";
 else if (fname.length <= 3 || fname.length > 25)
 fail = "Wpisz właściwe imię";
 else if (lname.length <= 3 || lname.length > 25)
 fail = "Wpisz właściwe nazwisko";
 else if (isNaN(nkontaktowy) || nkontaktowy.length <= 8 )
 fail = "Niepoprawny numer telefonu!"
 else if (pattern.test(email) == false || email.length < 9 || email.length >= 35)
 fail = "Niepoprawny adres skrzyńki pocztowej!";

if (fail != "") {
  document.getElementById('error').innerHTML = fail;
} else {
  alert ("Zgłoszenie zostało zarejestrowane!");
  window.location = '../index.html';
}
// return false;
}
