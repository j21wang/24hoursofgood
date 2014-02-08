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
	$("#screen").html("<div class='backbutton' onclick='notesScreen()'>Back</div><br>"+notes[noteNum]);
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
    $("#screen").html("<div id='screenWrap'><center><img id='profile' src='Images/GooglePlusIcon.jpg' /><img id='background' src='Images/GooglePlusBackground.jpg'/><div class='cont'><div class='box' id='name'></div><br><br></div></center><div id='wrapper'><div class='boxed' id='mystory'><h3 style='margin:0'>About Me</h3><br><b>Tagline</b><br>The kid who never grew up.<br><br><b>Bragging Rights</b><br>Never age, own an island called Neverland, leader of Lost Boys.</div><div class='boxed' id='work'></div><div class='boxed' id='contactinfo'></div><div class='boxed' id='basicinfo'></div><div class='boxed' id='school'></div></div><div class='click>Identity Collection</div></div></div>");

    $("#name").html("<h2>"+name+"</h2>");
    $("#work").html("Work: <br>"+work);
    $("#contactinfo").text("Contact Information: "+phone);
    $("#basicinfo").text("Basic Information: "+birthday);
    $("#school").text("Education: "+school);

}

function settingsScreen(){

    $("#screen").html("<img id='about' src='Images/iphone-general-settings.gif' align='left'/><img id='passlock' src='Images/settings.gif'/>");
    $("#about").click(function(){
        $("#screen").html("<div class='boxi' id='Name'></div><div class='boxi' id='Network'>Network: AT&T</div><div class='boxi' id='Model'>Model: M876E2</div><div class='boxi' id='SerialNumber'>Serial Number: FIHUESR38947Y2QY98</div>");
        $("#Name").text("Name: "+name+ "'s Phone");
    });
    $("#passlock").click(function(){
        $("#screen").html("<div class='boxl' id='Passlock'>Turn Passlock On</div><div class='boxl' id='Changepass'>Change Passcode</div>");
    });

}

function photosScreen(){

    $("#screen").html("<table><tr><td><img class='photo' src='photos/1.jpg'><td><img class='photo' src='photos/2.jpg'><td><img class='photo' src='photos/3.jpg'><td><img class='photo' src='photos/3.jpg'></tr><tr><td><img class='photo' src='photos/4.jpg'><td><img class='photo' src='photos/5.jpg'><td><img class='photo' src='photos/6.jpg'><td><img class='photo' src='photos/7.jpg'></tr><tr><td><img class='photo' src='photos/8.jpg'><td><img class='photo' src='photos/9.jpg'><td><img class='photo' src='photos/10.jpg'><td><img class='photo' src='photos/11.jpg'></tr><tr><td><img class='photo' src='photos/12.jpg'><td><img class='photo' src='photos/21.jpg'><td><img class='photo' src='photos/22.jpg'><td><img class='photo' src='photos/23.jpg'></tr><tr><td><img class='photo' src='photos/24.jpg'><td><img class='photo' src='photos/25.jpg'><td><img class='photo' src='photos/26.jpg'><td><img class='photo' src='photos/27.jpg'></tr><tr><td><img class='photo' src='photos/28.jpg'><td><img class='photo' src='photos/29.jpg'><td><img class='photo' src='photos/30.jpg'><td><img class='photo' src='photos/32.jpg'></tr><!--<tr><td><img class='photo' src='photos/33.jpg'><td><img class='photo' src='photos/34.jpg'><td><img class='photo' src='photos/35.jpg'><td><img class='photo' src='photos/36.jpg'></tr>--></table>");
}

function amazonScreen(){
	$("#screen").html("<div class='amazonbutton' onclick='openAccount()'>Your Account</div><br><div class='amazonbutton' onclick='openCart()'>Shopping Cart</div><br><div class='amazonbutton' onclick='openOrders()'>Orders</div>");
}

function openOrders() {
	$("#screen").html("<div class='backbutton' onclick='amazonScreen()'>Back</div><div class='orderinfo'>Order Date: 2/1/2013<br>Recipient: Me<br>Items Ordered: You<br><div style='color:blue' onclick='viewOrder(1)'>View Order</div></div><div class='orderinfo'>Order Date: 7/4/1776<br>Recipient: King George<br>Items Ordered: George Washington<br><div style='color:blue' onclick='viewOrder(1)'>View Order</div></div><div class='orderinfo'>Order Date: ------<br>Recipient: Peter Pan<br>Items Ordered: Wendy<br><div style='color:blue' onclick='viewOrder(1)'>View Order</div></div>");
}

function viewOrder(orderNum) {
	$("#screen").html("<div class='backbutton' onclick='openOrders()'>Back</div><div>Order Date: 2/1/2013<br>Order #: 22222222<br>Order Total: $333.33<br>Ship To:<br>0 Never Landing<br>Never, Never Land</div>");
}

function boaScreen(){
    $("#screen").html("<div id='strip'></div><div id='boa'><img src=\"Images/boa_logo.png\" width=\"100%\"><center><h1>Hello<i>, "+name+"</i></h1><h3>Account Number: "+bankAccount+"</h3><h3>Credit Card Number: "+creditCard+"</h3><hr><h3>Savings Account Balance: $10002.39</h3><h3>Checkings Account Balance: $244.34</h3></center></div>");
}

function notesScreen(){
	$("#screen").html("<div id='sidebar'><div id='note0' class='notebutton' onclick='displayNote(0)'>Wifi Password</div><div id='note1' class='notebutton' onclick='displayNote(1)'>To do list</div><div id='note2' class='notebutton' onclick='displayNote(2)'>My least favorite people</div><div id='note3' class='notebutton' onclick='displayNote(3)'>Passwords</div><div id='note4' class='notebutton' onclick='displayNote(4)'>Books to read</div><div id='note5' class='notebutton' onclick='displayNote(5)'>Dreams</div><div id='note6' class='notebutton' onclick='displayNote(6)'>Basketball</div><div id='note7' class='notebutton' onclick='displayNote(7)'>Groceries</div></div>");
}

gPlusScreen();
function openAccount(){
	$("#screen").html("<div class='backbutton' onclick='amazonScreen()'>Back</div><br><div>Account Settings</div><br><div>Payment Methods</div><br><div>Personalized Content</div>");
}

function openCart(){
	$("#screen").html("<div class='backbutton' onclick='amazonScreen()'>Back</div><br><div>Blowtorch</div><br><div>Chainsaw</div><br><div>Oreos</div>");
}

