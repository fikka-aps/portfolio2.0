<?php 


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../assets/phpmailer/src/Exception.php';
require '../assets/phpmailer/src/PHPMailer.php';
require '../assets/phpmailer/src/SMTP.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'fikkaayups@gmail.com';
    $mail -> Password = 'ehzcxlvxtvpdeodt';
    $mail ->Port = 465;

    $mail->setFrom('fikkaayups@gmail.com');

    $mail ->addAddress($_POST['email']);

    $mail ->isHTML(true);

    $mail->Subject = $_POST['email'];
    $mail->Subject = $_POST['message'];

    
    if ($mail->send()) {
        echo 'Email sent successfully!';
    } else {
        echo 'Failed to send email.';
    }
}


?>