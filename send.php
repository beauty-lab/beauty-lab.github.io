<!DOCTYPE html>
<html lang="ru">
<head>
   <?php include("blocks/head.php"); ?>
</head>
<body>
    <div class="popup_wrap">
        <form class="popup_content">
            <div class="title">ЗАПИСАТЬСЯ НА ПРОСМОТР</div>
            <input placeholder="Введите Ваше имя" type="text">
            <input class="popup__phone" placeholder="Введите Ваш телефон" type="tel">
            <textarea placeholder="Напишите ваши вопросы..."></textarea>
            <button>Отправить заявку</button>
        </form><!--popup_content-->
    </div><!--popup_wrap-->
</body>
<?php include("blocks/footer_src.php"); ?>
</html>