function textScreen(){
    $("#screen").html("<h1 id='contact'>Mom</h1><div id='textsBox'></div><input type='text' name='textMessage' class='textMessage' autocomplete='off'><button class='send'>Send</button><script src='text.js'></script>");
}

function gmailScreen(){
    $("#screen").html("<br><br><center><h1>My Emails</h1><hr><h2 onclick='showInbox()'>Inbox</h2><h2 onclick='showImportant()'>Important</h2><h2 onclick='showSent()'>Sent Mail</h2><h2 onclick='showDrafts()'>Drafts</h2><h2>More</h2></center>");
}

function gPlusScreen(){
    $("#screen").html("<img id='profile' src='Images/GooglePlusIcon.jpg' /><img id='background' src='Images/GooglePlusBackground.jpg'/><div class='box' id='name'></div><div class='tabs'>About Posts Photos</div><div class='boxed' id='mystory'><h1>My Story</h1><h6>Tagline</h6><p>The kid who never grew up.</p><h6>Bragging Rights</h6><p>Never age, own an island called Neverland, leader of Lost Boys.</p></div><div class='boxed' id='address'></div><div class='boxed' id='work'></div><div class='boxed' id='contactinfo'></div><div class='boxed' id='basicinfo'></div><div class='boxed' id='school'></div><div class='click>Identity Collection</div></div>");

    $("#name").text("Name: "+name);
    $("#address").text("Address: "+address);
    $("#work").text("Work: "+work);
    $("#contactinfo").text("Contact Information: "+phone);
    $("#basicinfo").text("Basic Information: "+birthday);
    $("#school").text("Education: "+school);

}

function settingsScreen(){

    $("#screen").html("<a href='setting-about.html'><img id='about' src='Images/iphone-general-settings.gif' align='left'/><a href='settings-passlock'><img id='passlock' src='Images/settings.gif'/>");

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

amazonScreen();
