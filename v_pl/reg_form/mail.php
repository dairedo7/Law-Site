<?php

   $name = $_POST['name']; 
   $email = $_POST['email'];
   $country = $_POST['country'];
   $phone = $_POST['phone']; 
   $message = $_POST['message']; 

   $subject = "=?utf-8?B?".base64_encode("VINTURION - Сообщение от клиента!")."?=";
   $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
   


      $message = "Ім'я:".$name."\r\n"."Email: ".$email."\r\n"."Країна: ".$country."\r\n"."Телефон: ".$phone."\r\n"."Деталі заявки: ".$message."\r\n";
      // $message .= "Email:".$email."\r\n";
      // $message .= "Country: ".$country "\r\n";
      // $message .= "Phone: ".$phone "\r\n";
      // $text = str_replace($message, "\n", $name);
      $to = 'vladik719@gmail.com';

   $success = mail($to, $subject, $message, $headers);
   echo $success;




?>