<!DOCTYPE html>
<html lang="en">
<head>
<!--    https://codepen.io/peanav/pen/DmZEEp-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dream Calendar</title>
    <script src="https://kit.fontawesome.com/a99d7ad425.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/public/css/global.css">
    <link rel="stylesheet" href="/public/css/calendar.css">
</head>
<body>
    <nav class="navbar">
        <a href="main" class="nav-link">
            <i class="fa-solid fa-house fa-2xl" style="color: #A6A2DA;"></i>
            Main page
        </a>
        <a href="calendar" class="nav-link">
            <i class="fa-solid fa-calendar-days fa-2xl" style="color: #d0cef4;"></i>
            Calendar
        </a>
        <a href="#" class="nav-link">
            <i class="fa-solid fa-user fa-2xl" style="color: #d0cef4;"></i>
            Settings
        </a>
        <form action="/logout" method="post">
            <button type="submit" id="logoutButton" class="nav-link">
                <i class="fa-solid fa-right-from-bracket fa-2xl" style="color: #a6a2da;"></i>
                Log out
            </button>
        </form>
    </nav>
    <?php if(isset($messages)) { ?>

        <div class="messages">
            <?php
            if(isset($messages)){
                foreach($messages as $message) {
                    echo $message;
                }
            }
            ?>
        </div>
    <?php } ?>
    <div id="calendar"></div>
    <script src="/public/js/script.js"></script>
</body>
</html>
