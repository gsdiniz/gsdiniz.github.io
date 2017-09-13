<?php

session_start();
//configuration 
$path = 'uploads';
$filename = (isset($_POST['file']) && $_POST['file'] != '') ? $_POST['file'] : NULL;

$message = $_POST['message'];
$from = $_POST['email'];
$subject = $_POST['subject'];
$mailto = 'guilhermesousad@hotmail.com';

// check if any attachment

if ($filename) {
  $file = $path . "/" . $filename;
  $file_size = filesize($file);
  $handle = fopen($file, "r");
  $content = fread($handle, $file_size);
  fclose($handle);
  $content = chunk_split(base64_encode($content));
}

// a random hash will be necessary to send mixed content
$separator = md5(time());

// carriage return type (we use a PHP end of line constant)
$eol = PHP_EOL;

// main header (multipart mandatory)
$headers = "From: ". $_POST['fullname']." <" . $from . ">" . $eol;
$headers .= 'Reply-To: <'.$from.'>' . $eol;
$headers .= "MIME-Version: 1.0" . $eol;
$headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" ;


$body.= "--" . $separator . $eol;
$body.= "Content-Transfer-Encoding: 7bit" . $eol . $eol;
$body.= "This is a MIME encoded message." . $eol;

// message
$body.= "--" . $separator . $eol;
$body.= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
$body.= "Content-Transfer-Encoding: 8bit" . $eol . $eol;
$body.= $message . $eol;

// attachment
if ($filename) {
  $body.= "--" . $separator . $eol;
  $body.= "Content-Type: application/octet-stream; name=\"" . $filename . "\"" . $eol;
  $body.= "Content-Transfer-Encoding: base64" . $eol;
  $body.= "Content-Disposition: attachment" . $eol . $eol;
  $body.= $content . $eol;
  $body.= "--" . $separator . "--";
}

$ress = array('error' => NULL, 'msg' => NULL);

// check captcha first;
if (isset($_SESSION['simpleCaptchaAnswer']) && $_POST['captchaSelection'] == $_SESSION['simpleCaptchaAnswer']) {
  //SEND Mail
  if (mail($mailto, utf8_decode($subject), $body, $headers)) {
    $ress['msg'] = "Opa, te respondo em alguns instantes!";
  } else {
    $ress['error'] = $headers;
  }
} else {
  $ress['error'] = "Por favor, verifique a sua resposta";
}
//respond to json
echo json_encode($ress);