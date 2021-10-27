<?php
include_once 'includes/db.php';

include 'head.php';
include 'jumbo.php';
?>

<section class="project">
    <h1 class="Title">Projects</h1>
    <div class="projects">
        <?php
            $sql = "SELECT * FROM projects;";
            $lsql = "SELECT * FROM languages";
            $result = mysqli_query($conn, $sql);
            $resultCheck = mysqli_num_rows($result);

            if ($resultCheck > 0) {
                    while ($row = mysqli_fetch_assoc($result)) {
                        echo '<div class = "card">';
                        echo '<p>' . $row['Name'] . '</p> <p>' .  $row['Language'] . '</p> <img src="' . $row['Img'] . '"> </img> <p>' . $row['Description'] . '</p> <p>' . $row['Date'] .'</p> </div>';
                    }
            } else {
                echo "No results!";
            }
        ?>
    </div>
</Section>
