<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$fname = $_POST['first_name'];
$lname = $_POST['last_name'];
$sex   = $_POST['sex'];
$phone = $_POST['nkontaktowy'];
$email = $_POST['email'];
$country = $_POST['country'];
$subject = $_POST['subject'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'Ninshu7@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'dairedo777'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('Ninshu7@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('vladik719@gmail.com');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$first_name. ' ' .$last_name. ' оставил заявку. Его контактные данные: телефон' .$phone. ',  e-mail ' .$email. '<br> Стать: ' .$sex. '<br> Страна: ' .$country '<br> Содержание: ' .$subject;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>
