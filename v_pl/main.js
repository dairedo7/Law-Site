let contactData = document.getElementsByClassName('dane-kontaktowe');
let myBr = document.createElement('br');

function myFunction () {
  contactData.onClick = alert("Наша контактна інформація:  " + " " + "нр. телефону: +48 886 516 270" + " , "
+ "e-mail: iustitia@gmail.com");
}

// function mouseOver () {
//   contactData = style.color = "red";
// }
