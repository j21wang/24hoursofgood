<?php

$u = $_GET["user"];
$s = $_GET["score"];

$file = fopen("highscores.txt", 'r');
$top = array(array());
$i = 0;
while (!feof($file)) {
	$user = fgets($file); // index 0
	$score= fgets($file); // index 1
	$top[$i][0] = $user;
	$top[$i][1] = $score;
}
fclose($file);

if (count($top) == 15 && s <= $top[14][1])
	exit(-1);

//if reached this point, made it to high score, find which position
$newhighscore = array(array());
$i = 0;
$insertedIndex = 0;
foreach($top as $o) {
	if ($s > $o[1]) {
		$newhighscore[$i][0] = $u;
		$newhighscore[$i][1] = $s;
		$insertedIndex = $i++;
	}
	if (count($newhighscore == 15)) {
		break;
	}

	$newhighscore[$i][0] = $o[0];
	$newhighscore[$i][1] = $o[1];
	$i++;
}

$file = fopen("highscores.txt", 'w');
foreach($newhighscore as $score) {
	fwrite($file, $score[0]."\n");
	fwrite($file, $score[1]."\n");
}
fclose($file);

echo $insertedIndex;
?>
