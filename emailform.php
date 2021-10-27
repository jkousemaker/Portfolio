<?php
include_once 'includes/db.php';

include 'head.php';
include 'jumbo.php';
?>

<body>
    <section class="form">
        <div class="wrapper">
                <form method="post">
                    <textarea name="name"></textarea>
                    <textarea name="email"></textarea>
                    <textarea name="message"></textarea>
                    <input type="submit">
                </form>
        </div>
    </section>
</body>