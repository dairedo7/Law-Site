<?php
   $name = $_POST['name']; 
   $email = $_POST['email'];
   $country = $_POST['country'];
   $phone = $_POST['phone']; 
   $message = $_POST['message']; 

   $subject = "=?utf-8?B?".base64_encode("VINTURION - Сообщение от клиента!")."?=";
   $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

   $success = mail("vladik719@gmail.com", $subject, $message, $headers);
   echo $success;
?>