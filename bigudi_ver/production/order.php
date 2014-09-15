<?
   $to = 'bigudimarket@yandex.ru';
   $subject = 'Запрос с сайта '.$_SERVER['HTTP_REFERER']." Форма Заказа";
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Телефон: ".$_POST['phone']."\nИмя: ".$_POST['fio']."\nE-mail: ".$_POST['email'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";

   mail($to, $subject, $message, $headers);
   $_POST['phone'] = $_POST['fio'] = $_POST['email'] = '';
   header("Location:thanks.html");
?>