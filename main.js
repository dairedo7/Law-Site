let contactData = document.getElementsByClassName('dane-kontaktowe');
let myBr = document.createElement('br');

function myFunction () {
  contactData.onClick = alert("Nasze dane kontaktowe:  " + " " + "nr. telefonu: +48 886 516 270"
+ " " + "e-mail: venturionlawyer@gmail.com");
}

// function mouseOver () {
//   contactData = style.color = "red";
// }
