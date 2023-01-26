<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require $_SERVER['DOCUMENT_ROOT'] . 'export/mailer/Exception.php';
require $_SERVER['DOCUMENT_ROOT'] . 'export/mailer/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'] . 'export/mailer/SMTP.php';



// Получаемые поля
$formId = isset($_POST['formID']) ? $_POST['formID'] : null; // id формы с котороый была отправка
/* 
    previewMeet - записатися на перегляд
    getPrice    - форма в попапе "узнать цену"
*/

// Основные
$name = isset($_POST['name']) ? $_POST['name'] : ' - ';
$email = isset($_POST['email']) ? $_POST['email'] : ' - ';
$phone = isset($_POST['phone']) ? $_POST['phone'] : ' - ';
$message = isset($_POST['message']) ? $_POST['message'] : ' - ';

// area_type
$area_type = isset($_POST['area_type']) ? $_POST['area_type'] : null;
$coordinates = isset($_POST['coordinates']) ? $_POST['coordinates'] : null;
 

// Данные страницы 
$page_title = isset($_POST['page_title']) ? $_POST['page_title'] : null;
$page_url = isset($_POST['url']) ? $_POST['url'] : null;

$files = isset($_FILES['userFiles']) ? $_FILES['userFiles'] : null;

$mail = new PHPMailer(); // Create a new PHPMailer instance
$mail->CharSet = 'UTF-8'; // Кодировка
$mail->IsHTML(true);
$mail->setFrom('molodist@iammarketing.com.ua', 'Сайт: Molodist'); // Отправитель
$mail->addAddress('e.sparrow.life@gmail.com'); // Получатели ('mail1', 'mail2')


if ($formId == 'previewMeet') {
    $mail->Subject = 'Форма: Запис на перегляд'; 
} elseif ($formId == 'getPrice') {
    $mail->Subject = 'Форма: Дізнатися вартість'; 
} elseif ($formId == 'ownersForm' ) {
    $mail->Subject = 'Форма: Власникам земельних ділянок'; 
} elseif ($formId == 'vocationForm' ) {
    $mail->Subject = 'Форма: Надіслати резюме'; 
} else {
    $mail->Subject = 'Заявка з сайту "Molodist"'; 
}


$body = '';
// Формируем тело письма

// "Власникам земельних ділянок"
if ($formId == 'ownersForm') { 
    $body .= "<p>Тип земельної ділянки: <b>" . $area_type . "</b></p>";
    $body .= "<p>Координати: <b>" . $coordinates . "</b></p>";
}



$body .= "<p>Ім'я: <b>" . $name . "</b></p>";
$body .= '<p>Телефон: <b>' . $phone . '</b></p>';
$body .= '<p>Повідомлення: <b>' . $message . '</b></p>';
if ($page_url) {
    $body .= '<p>Посилання: <b><a target="_blank" href="'. $page_url  . '" >' . $page_title . '</a></b></p>';
}
$mail->Body = $body;


// Прикрепляем файл если он есть
if (!empty($files)) {
    $mail->addAttachment($files['tmp_name'], $files['name']);
}


// Отправка сообщения
if (!$mail->send()) {
    // echo $mail->ErrorInfo;
    $message = 'Ошибка';
} else {
    $message = 'Отправлено!';
}


// Формированние ответа
$response = ['message' => $message];


header('Content-type: application/json');
die(json_encode($response)); //выводим массив в json формате и умираем 
?>