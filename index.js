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
	$("#screen").html("<div id='wrapNote'><div class='backbutton' onclick='notesScreen()'>Back</div><br><h3 style='position:relative; left:5px;'>"+notes[noteNum]+"</h3></div>");
}

function textScreen(){

    loadScript("text.js");
    $("#screen").html("<h1 id='contact'>Mom</h1><div id='textsBox'></div><input type='text' name='textMessage' class='textMessage' autocomplete='off'><button class='send'>Send</button>");
}

function loadScript(url){
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}


function gmailScreen(){
    $("#screen").html("<br><br><center><h1>My Emails</h1><hr><h2 onclick='showInbox()'>Inbox</h2><h2 onclick='showImportant()'>Important</h2><h2 onclick='showSent()'>Sent Mail</h2><h2 onclick='showDrafts()'>Drafts</h2><h2>More</h2></center>");
}

function gPlusScreen(){
    $("#screen").html("<div id='screenWrap'><center><img id='profile' src='Images/GooglePlusIcon.jpg' /><img id='background' src='Images/GooglePlusBackground.jpg'/><div class='cont'><div class='box' id='name'></div><br><br></div></center><div id='wrapper'><div class='boxed' id='mystory'><h3 style='margin:0'>About Me</h3><br><b>Tagline</b><br>The kid who never grew up.<br><br><b>Bragging Rights</b><br>Never age, own an island called Neverland, leader of Lost Boys.</div><br><div class='boxed' id='work'></div><br><div class='boxed' id='contactinfo'></div><br><div class='boxed' id='basicinfo'></div><br><div class='boxed' id='school'></div></div>");

    $("#name").html("<h2>"+name+"</h2>");
    $("#work").html("<h3 style='margin:0'>Work</h3><br>"+"<h4 style='margin:0'>Occupation</h4>"+work+" Software Engineer");
    $("#contactinfo").html("<h3 style='margin:0'>Contact Information</h3><br> <h4 style='margin:0'>Cell Number</h4>" +phone);
    $("#basicinfo").html("<h3 style='margin:0'>Basic Information</h3><br>"+"<h4 style='margin:0'>DOB</h4>"+birthday);
    $("#school").html("<h3 style='margin:0'>Education</h3><br>" +"<h4 style='margin:0'>College</h4>" +school);

}



function settingsScreen(){

    $("#screen").html("<div style='background-color:lightGrey'><img id='about' src='Images/iphone-general-settings.gif' align='left'/><img id='passlock' src='Images/settings.gif'/></div>");
    $("#about").click(function(){
        $("#screen").html("<center><h1 style='position:relative; top:20px;'>Phone Information</h1><div class='boxi' id='Name'><br></div><div class='boxi' id='Network'><br>Network: AT&T</div><div class='boxi' id='Model'><br>Model: M876E2</div><div class='boxi' id='SerialNumber'><br>Serial Number: FIHUESR38947Y2QY98</div></center>");
        $("#Name").html("<br>Name: "+name+ "'s Phone");
    });
    $("#passlock").click(function(){
        $("#screen").html("<div class='boxl' id='Passlock'>Turn Passlock On</div><div class='boxl' id='Changepass'>Change Passcode</div>");
    });

}

function photosScreen(){

    $("#screen").html("<table><tr><td><img class='photo' src='photos/1.jpg'><td><img class='photo' src='photos/2.jpg'><td><img class='photo' src='photos/3.jpg'><td><img class='photo' src='photos/3.jpg'></tr><tr><td><img class='photo' src='photos/4.jpg'><td><img class='photo' src='photos/5.jpg'><td><img class='photo' src='photos/6.jpg'><td><img class='photo' src='photos/7.jpg'></tr><tr><td><img class='photo' src='photos/8.jpg'><td><img class='photo' src='photos/9.jpg'><td><img class='photo' src='photos/10.jpg'><td><img class='photo' src='photos/11.jpg'></tr><tr><td><img class='photo' src='photos/12.jpg'><td><img class='photo' src='photos/21.jpg'><td><img class='photo' src='photos/22.jpg'><td><img class='photo' src='photos/23.jpg'></tr><tr><td><img class='photo' src='photos/24.jpg'><td><img class='photo' src='photos/25.jpg'><td><img class='photo' src='photos/26.jpg'><td><img class='photo' src='photos/27.jpg'></tr><tr><td><img class='photo' src='photos/28.jpg'><td><img class='photo' src='photos/29.jpg'><td><img class='photo' src='photos/30.jpg'><td><img class='photo' src='photos/32.jpg'></tr><!--<tr><td><img class='photo' src='photos/33.jpg'><td><img class='photo' src='photos/34.jpg'><td><img class='photo' src='photos/35.jpg'><td><img class='photo' src='photos/36.jpg'></tr>--></table>");
}

function amazonScreen(){
	$("#screen").html("<center><h1 style='position:relative; left:7px'>Amazon</h1><hr><div class='amazonbutton' onclick='openAccount()'><br>Your Account</div><br><div class='amazonbutton' onclick='openCart()'>Shopping Cart</div><div class='amazonbutton' onclick='openOrders()'>Orders</div></center>");
}

function openOrders() {
	$("#screen").html("<div class='backbutton' onclick='amazonScreen()'>Back</div><div class='orderinfo'>Order Date: 2/1/2013<br>Recipient: Me<br>Items Ordered: You<br><div style='color:#008cba' onclick='viewOrder(1)'>View Order</div></div><div class='orderinfo'>Order Date: 7/4/1776<br>Recipient: King George<br>Items Ordered: George Washington<br><div style='color:#008cba' onclick='viewOrder(1)'>View Order</div></div><div class='orderinfo'>Order Date: ------<br>Recipient: Peter Pan<br>Items Ordered: Wendy<br><div style='color:#008cba' onclick='viewOrder(1)'>View Order</div></div>");
}

function viewOrder(orderNum) {
	$("#screen").html("<div class='backbutton' onclick='openOrders()'>Back</div><div>Order Date: 2/1/2013<br>Order #: 22222222<br>Order Total: $333.33<br>Ship To:<br>"+address+"</div>");
}

function boaScreen(){
    $("#screen").html("<div id='strip'></div><div id='boa'><img src=\"Images/boa_logo.png\" width=\"100%\"><center><h1>Hello<i>, "+name+"</i></h1><h3>Account Number: "+bankAccount+"</h3><h3>Credit Card Number: "+creditCard+"</h3><hr><h3>Savings Account Balance: $10002.39</h3><h3>Checkings Account Balance: $244.34</h3></center></div>");
}

function notesScreen(){
	$("#screen").html("<div style='background-color:#E6DD93; height:490px;position:relative; bottom:15px'><center><h1 style='color:red'>Notes</h1></center><hr><div id='sidebar'><div id='note0' class='notebutton' onclick='displayNote(0)'>Wifi Password</div><div id='note1' class='notebutton' onclick='displayNote(1)'><hr>To do list</div><div id='note2' class='notebutton' onclick='displayNote(2)'><hr>My least favorite people</div><div id='note3' class='notebutton' onclick='displayNote(3)'><hr>Passwords<hr></div><div id='note4' class='notebutton' onclick='displayNote(4)'>Books to read</div><div id='note5' class='notebutton' onclick='displayNote(5)'><hr>Dreams</div><div id='note6' class='notebutton' onclick='displayNote(6)'><hr>Basketball</div><div id='note7' class='notebutton' onclick='displayNote(7)'><hr>Groceries</div></div></div>");
}

amazonScreen();
function openAccount(){
	$("#screen").html("<div class='backbutton' onclick='amazonScreen()'>Back</div><br><div style='postion:relative; left:5px'><div style='position:relative; left:5px'><div>Account Settings</div><br><div>Payment Methods</div><br><div>Personalized Content</div></div></div>");
}

function openCart(){
	$("#screen").html("<div class='backbutton' onclick='amazonScreen()'>Back</div><br><div style='position:relative; left:5px;'><div>Blowtorch</div><br><div>Chainsaw</div><br><div>Oreos</div></div>");
}

function changePassword() {
	passChanged = true;
	document.getElementById("passChangedSuccess").style.display = "block";
}

function passwordScreen(){
	$("#screen").html("<center><h1>Password Manager</h1><br><i>Change the password for all your apps from one simple to use app.</i><br><br><b>New Password:</b><input type=\"text\" id=\"newpass\"><input type=\"submit\" value=\"Change Password\" onclick=\"changePassword()\"><br><br><br><div id=\"passChangedSuccess\" style=\"color:green; display:none\">The password was changed successfully!</div></center>");
}
