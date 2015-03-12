<?php
	$file = 'server.data.json';

	if(isset($_POST['data'])) {
		@file_put_contents($file, $_POST['data']);
	} else {
		$data = @file_get_contents($file);
		header('Content: application/json');
		echo $data;
	}

	usleep(0.5 * 1000000);

?>