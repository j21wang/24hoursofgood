var notes = new Array();
notes[0]="aaaaaaaaaaaaa";
notes[1]="Go shopping<br>Watch TV<br>Fall in love";
notes[2]="Mitt Romney";
notes[3]="Amazon: monkey";
notes[4]="Infinite Jest";
notes[5]="";
notes[6]="Kevin Durant is beautiful";
notes[7]="Eggs, butter, sour patches";

function displayNote(noteNum) {
	document.getElementById("note").innerHTML=notes[noteNum];
}
