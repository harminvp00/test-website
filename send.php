
<?php 
    require 'config/mailer_config.php';
    
    echo "WELCOME TO THE SEND_EMAIL.PHP PAGE";
    if(isset($_POST['send_email_btn'])){
        // userdata 
        $name = $_POST['user_name'];
        $email_address = $_POST['user_email'];
        $phone_number = $_POST['user_phone_number'];
        $message = $_POST['user_message'];

        try {
            sendEmail($name, $email_address, $phone_number, $message);
            header("Location: index.html?status=success");
            exit;
        } catch (Exception $e) {
            header("Location: index.html?status=error");
            exit;
        }
    } 
?>
