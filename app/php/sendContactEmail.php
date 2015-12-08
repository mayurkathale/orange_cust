<?php
 if (isset($_POST['email']))  {
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $name = $_POST['name'];
  $admin_email = "mayur.kathale@gmail.com";

  //send email
  mail($admin_email, $subject, "\nName ".$name."\nE-mail: ".$email."\nSubject :".$subject."\nMessage :".$message);
  }
  header('Location: ' . $_SERVER['HTTP_REFERER']."/#!/contact");
?>
