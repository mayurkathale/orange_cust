<?php
 if (isset($_POST['email']))  {
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $name = $_POST['name'];
  $admin_email = "mayur.kathale@gmail.com";
  $from = "mayur.mbll@gmail.com";

  //send email
  mail($admin_email, $subject, $message." from ".$name." (".$email.")");
  }
  header('Location: ' . $_SERVER['HTTP_REFERER']);
?>
