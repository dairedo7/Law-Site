//Creating forms
document.getElementById('main-form');
addEventListener("submit", checkForm);
//Обработчик события адд ивент лисенер вешается на обьект определенный по ид или классу.
function checkForm(element) {
event.preventDefault();
var el = document.getElementById('main-form');
console.log(document.getElementById('main-form').sex)
//var name = document.getElementById('name').value;
var name = el.name.value;
var pass = el.pass.value;
var repass = el.repass.value;
var sex = el.sex.value;

var fail = "";

if(name == "" || pass == "" || sex == "")
 fail = "Fill out all fields";
 else if (name.length <= 3 || name.length > 30)
  fail = "Input the proper name";
 else if (pass.length <= 4 || pass.length > 30)
  fail = "The password is incorrect! Please provide yourself with longer or shorter password";
 else if (pass != repass)
 fail = "Passwords don't match!";
 else if (pass.split("&").length > 1)
   fail = "Wrong password!";

if (fail != "") {
  document.getElementById('error').innerHTML = fail;
} else {
  alert ("All data has been filled our properly");
  window.location = 'G:/Programming/www/law_site/index.html';
}
// return false;
}
