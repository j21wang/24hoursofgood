function textScreen(){
    $("#screen").html("<h1 id='contact'>Mom</h1><div id='textsBox'></div><input type='text' name='textMessage' class='textMessage' autocomplete='off'><button class='send'>Send</button><script src='text.js'></script>");
}

function gmailScreen1(){
    $("#screen").html("My Emails<h3 onclick='showInbox()'>Inbox</h3><h3 onclick='showImportant()'>Important</h3><h3 onclick='showSent()'>Sent Mail</h3><h3 onclick='showDrafts()'>Drafts</h3><h3>More</h3>");
}

gmailScreen1();
