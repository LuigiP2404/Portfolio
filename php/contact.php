<?php

if(isset($_POST['submit'])) {
  $name=$_POST['name'];
  $subject=$_POST['subject'];
  $mailFrom=$_POST['email'];
  $message=$_POST['message'];

  $mailTo = "luigipaglionicowd@gmail.com";
  $headers = "From: ".$mailFrom ;
  $text = "Hai ricevuto una email da: ".$name.".\n\n".$message;

  mail($mailTo, $subject, $text, $headers);
  header("Location: ../index.html?mailsent");
}

echo '<script> alert("Email inviata con successo!") </script>';

?>
