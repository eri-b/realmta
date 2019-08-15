<?php

header('Content-type: application/xml');
echo file_get_contents("http://web.mta.info/status/serviceStatus.txt");

?>