<?php



$file = fopen("highscores.txt", 'r');
$top = array(array());
int i = 0;
while (!feof($file)) {
	$user = fgets($file); // index 0
	$score= fgets($file); // index 1
	$top[$i][0] = $user;
	$top[$i][1] = $score;
}

$lastIndex = count($top);


?>
