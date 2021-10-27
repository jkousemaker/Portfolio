<?php
include 'head.php';
include 'jumbo.php';
?>

<body>
    <section class="form">
        <div class="wrapper">
            <form action="" method="post">
                <label>Name</label>
                <input type="text" name="name">
                <label>Email</label>
                <input type="text" name="email">
                <label>Subject</label>
                <input type="text" name="subject">
                <label>Message</label>
                <textarea type="text" name="message"></textarea>
                <input type="submit" name="send" value="Send">
            </form>
        </div>
    </section>
</body>
    
    <?php
    if(isset($_POST['send'])) {
        $mailFrom = $_POST["email"];
        $name = $_POST["name"];
        $message = $_POST["message"];
        $subject = $_POST["subject"];

        $mailTo = "j.l.kousemaker@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have reived an e-mail from".$name.".\n\n".$message;
   

        mail($mailTo, $subject, $txt, $headers);
        header("location: emailform.php?emailsent");
    }