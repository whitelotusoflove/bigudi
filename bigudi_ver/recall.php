<?
   $to = 'bigudimarket@yandex.ru';
   $subject = 'Запрос с сайта '.$_SERVER['HTTP_REFERER']." Форма Жду звонка";
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Телефон: ".$_POST['phone']."\nИмя: ".$_POST['fio'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";

   mail($to, $subject, $message, $headers);
   $_POST['phone'] = $_POST['fio'] = '';
   header("Location:thanks.html");
?>