$("#sendMail").on("click", function() {
  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var country = $("#country").val().trim();
  var phone = $("#phone").val().trim();
  var message = $("#message").val().trim();
  var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email.length < 6) {
  	$("#error").text("Впишіть правильну адресу e-mail!");
  	return false;
  } else if (name == "") {
    $("#error").text("Впишіть своє ім'я!");
  	return false;
  }
  else if (country == "") {
    $("#error").text("Виберіть країну!");
  	return false;
  }
  else if (phone == "") {
    $("#error").text("Введіть свій номер телефону!");
  	return false;
  }
    else if (message == "") {
    $("#error").text("Вкажіть деталі заявки!");
  	return false;
  }
     else if (pattern.test(email) == false){
    $("#error").text("Введений адрес почтової скриньки не існує!");
    return false;
}
   else if (isNaN(phone) || phone.length <= 8 ) {
    $("#error").text("Не правильний формат номеру телефону!");
    return false;
   }

  $("#error").text("");

  $.ajax({
  	url: 'mail.php',
  	type: 'POST',
  	cache: false,
  	data: { 'name': name, 'email' : email, 'country' : country, 'phone' : phone, 'message' : message },
  	dataType: 'html',
    beforeSend: function () {
    	$("#sendMail").prop("disabled", true);
    },
    success: function(data) {
    	if(!data)
    		alert("Помилка! Заявка не вислана.");
    	else
    		alert("Заявка зареєстрована в системі!");
    		$("#reg__form").trigger("reset");
    	$("#sendMail").prop("disabled", false);
    }
  })
});