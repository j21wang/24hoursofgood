function textScreen(){
    $("#screen").html("<h1 id='contact'>Mom</h1><div id='textsBox'></div><input type='text' name='textMessage' class='textMessage' autocomplete='off'><button class='send'>Send</button><script src='text.js'></script>");
}

function gmailScreen(){
    $("#screen").html("My Emails<h3 onclick='showInbox()'>Inbox</h3><h3 onclick='showImportant()'>Important</h3><h3 onclick='showSent()'>Sent Mail</h3><h3 onclick='showDrafts()'>Drafts</h3><h3>More</h3>");
}

function gPlusScreen(){
    $("#screen").html("<img id='profile' src='Images/GooglePlusIcon.jpg' /><img id='background' src='Images/GooglePlusBackground.jpg'/><div class='box' id='name'></div><div class='tabs'>About Posts Photos</div><div class='boxed' id='mystory'><h1>My Story</h1><h6>Tagline</h6><p>The kid who never grew up.</p><h6>Bragging Rights</h6><p>Never age, own an island called Neverland, leader of Lost Boys.</p></div><div class='boxed' id='address'></div><div class='boxed' id='work'></div><div class='boxed' id='contactinfo'></div><div class='boxed' id='contactinfo'></div><div class='boxed' id='basicinfo'></div><div class='boxed' id='school'></div><div class='click>Identity Collection</div></div>");

    $("#name").text("Name: "+name);
    $("#address").text("Address: "+address);
    $("#work").text("Work: "+work);
    $("#contactinfo").text("Contact Information: "+phone);
    $("#basicinfo").text("Basic Information: "+birthday);
    $("#school").text("Education: "+school);

}

gPlusScreen();
