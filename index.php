<?php

	$url = strtok("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", '?');

?>

<?php require_once 'partials/_header.php' ?>

<?php require_once 'partials/pages/_home.php' ?>

<?php require_once 'partials/_footer.php' ?>