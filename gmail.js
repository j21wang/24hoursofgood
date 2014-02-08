var e_fafsa = new Object();
e_fafsa.from = "noreply@fafsa.ed.gov";
e_fafsa.title = "You fafsa statement for 2013-2014 (IMPORTANT)";
e_fafsa.body = "<b>Your fafsa statement for this year is ready!</b><br><br>Name: " +name+"<br>Address: "+address+"<br>Birthday: "+birthday+"<br>Social Security Number: "+ssn+"<br>Work Place: "+work+"<br>Confirmation code:sdafdi43dsfio83<br<br>This is an automatically generated email. Please do not respond.";
var e_monoprice = new Object();
e_monoprice.from = "customersupport@monoprice.com";
e_monoprice.title = "Thank you for your purchase!";
e_monoprice.body = "Thank you so much for your purchase! This is a confirmation email for your purchase of:<br><b>Quantity 1: iPhone 5/5s Case Bundle</b><br><br>The credit card provided is: "+creditCard+"<br><br>This is a great buy! This case is so slim and slippery, it almost makes it feel like your phone is not even in your pocket! How great is that!?<br><br> Sincerely,<br>The monoprice team";
var e_bankofamerica = new Object();
e_bankofamerica.from = "boa@bankofamerica.com";
e_bankofamerica.title = "Thank you for signing up with Bank of America!";
e_bankofamerica.body = "Thanks for opening a bank account with the best bank in America. That's why we are called THE BANK of America. <br><br> Your information is as follows:<br>Name: "+name+"<br>address"+address+"<br>Account Number: "+bankAccount+"<br>Credit limit: 3000<br><br>We hope to have you as our customer for a long time!";
var e_bankofamerica2 = new Object();
e_bankofamerica2.from = "boa@bankofAmerica.com";
e_bankofamerica2.title = "Your credit card has been approved!";
e_bankofamerica2.body = "Hello "+name+"<br><br>You have been approved for a credit account too!<br>Your information is as follows:<br><br>Credit Card Number: "+creditCard+"<br>Credit limit: 3000<br><br>Thank you for your continued use of our bank and it's services!";
var e_amazon = new Object();
e_amazon.from = "customersupport@amazon.com";
e_amazon.title = "Amazon forgotten password";
e_amazon.body = "Hello "+name+"<br><br>You requested an email to be sent containing your password because you forgot it. Here it is in plain-text. Please DELETE this email when you're done.<br><br>Password: "+emailPass+"<br><br>P.S. We took the liberty of testing this password against your email account and we have determined that is the exact same... Please change one of them. You didn't hear this from us.<br><br>You're friendly neighborhood Amazon";
var e_paypal = new Object();
e_paypal.from = "support@paypal.com";
e_paypal.title = "Your paypal information (new credit card added)";
e_paypal.body = "Hello "+name+" from "+address+". We don't know why we just repeated your address to you like that, but here is the credit card you just recently added.<br><br>Credit card provider: Bank of America<br>Credit card number: "+creditCard+". I hope you make a lot of purchases. If your account gets stolen, I hope they make a lot of purchases on your behalf. Thanks! Your trustworthy friends,<br> Paypal";
var e_psn = new Object();
e_psn.from = "alert@playstation.com";
e_psn.title = "Your account information is at risk";
e_psn.body = "Dear customer,<br><br>Your account information may be at risk. We recently had a break in and millions of account information has been stolen. This includes passwords and appearance information. For example... they know you have green eyes and dirty blonde hair color. <br><br>We will try to fix this hole and promise that it will never happen again. Sorry! PSN";
var e_rutgers = new Object();
e_rutgers.from = "ruscrew@rutgerscamden.edu";
e_rutgers.title = "Rutgers Camden - New car added to parking permit";
e_rutgers.body = "Hi "+name+"<br><br>This is confirmation email that we have successfully added your new car to our database. I hope you park outside of your assigned spot so that we can continue to give you tickets. Heres the information we have on file:<br><br>Contact information: "+phone+"<br>driver's license: "+driversLicense+"<br><br><br>Be \"safe\"<br>P.S. we hate you.";
var e_birthright = new Object();
e_birthright.from = "jew@birthright.com";
e_birthright.title = "RE: Your birthright trip to Israel";
e_birthright.body = "Hello Joe,<br><br>Thank you for accepting me on this trip! Here is my passport information as requested: "+passport+" <br><br>Sincerely,<br>"+name;
var e_boss= new Object();
e_boss.from = "me@thisisme.com";
e_boss.title = "I QUIT";
e_boss.body = "I hate this job! I quit. Peace out homie!";

/*
var e_ = new Object();
e_.from = "";
e_.title = "";
e_.body = "";
*/


//SPAM EMAILS

var spamEmails = new Array();
var e_0 = new Object();
e_0.from = "hdclive@live.com";
e_0.title = "Bomb her womb from your huge cannon!";
e_0.body = "Bomb her womb from your huge cannon!";
spamEmails[0] = e_0;
var e_1 = new Object();
e_1.from = "terauau@gmail.com";
e_1.title = "Looking for Additional lubrication? We grant that.";
e_1.body = "Looking for Additional lubrication? We grant that.";
spamEmails[1] = e_1;
var e_2 = new Object();
e_2.from = "jabu_moleketi@yahoo.com";
e_2.title = "Lead your boner to leadership";
e_2.body = "Lead your boner to leadership";
spamEmails[2] = e_2;
var e_3 = new Object();
e_3.from = "soeungkheng34@yahoo.com";
e_3.title = "Deeper in her entrails";
e_3.body = "Deeper in her entrails";
spamEmails[3] = e_3;
var e_4 = new Object();
e_4.from = "desk433@yahoo.com";
e_4.title = "Angelina Jolie invited you to join Facebook;";
e_4.body = "Angelina Jolie invited you to join Facebook;";
spamEmails[4] = e_4;
var e_5 = new Object();
e_5.from = "caf432@ig.com.br";
e_5.title = "I learned what females do on a farm. NEVER leave them there abandoned!";
e_5.body = "I learned what females do on a farm. NEVER leave them there abandoned!";
spamEmails[5] = e_5;
var e_6 = new Object();
e_6.from = "samanthakipkalya24@yahoo.in";
e_6.title = "Gay Rights Terrorist Kills Eight In fabulous Bombing";
e_6.body = "Gay Rights Terrorist Kills Eight In fabulous Bombing";
spamEmails[6] = e_6;
var e_7 = new Object();
e_7.from = "cpt.jane@yahoo.com.ph";
e_7.title = "Truth about bonzai kitties";
e_7.body = "Truth about bonzai kitties";
spamEmails[7] = e_7;
var e_8 = new Object();
e_8.from = "edwardbuma02@hotmail.com";
e_8.title = "Mexico catches submarine loaded with drugs";
e_8.body = "Mexico catches submarine loaded with drugs";
spamEmails[8] = e_8;
var e_9 = new Object();
e_9.from = "mrsgracetoddclark@yahoo.co.jp";
e_9.title = "Hey, are you the guy who cannot make love?";
e_9.body = "Hey, are you the guy who cannot make love?";
spamEmails[9] = e_9;
var e_10 = new Object();
e_10.from = "grace1todd1@daum.net";
e_10.title = "Who and why should we take Viagra?";
e_10.body = "Who and why should we take Viagra?";
spamEmails[10] = e_10;
var e_11 = new Object();
e_11.from = "mrmaxofori1@outlook.fr";
e_11.title = "John Mccain Denies Allegations That He Is A Politician";
e_11.body = "John Mccain Denies Allegations That He Is A Politician";
spamEmails[11] = e_11;
var e_12 = new Object();
e_12.from = "mrmax.ofori@aol.fr";
e_12.title = "Anne Hathaway diaries seized by FBI";
e_12.body = "Anne Hathaway diaries seized by FBI";
spamEmails[12] = e_12;
var e_13 = new Object();
e_13.from = "barakahumao1@yahoo.es";
e_13.title = "Old man dies inside Paris Hilton";
e_13.body = "Old man dies inside Paris Hilton";
spamEmails[13] = e_13;
var e_14 = new Object();
e_14.from = "peter.kofi1@rediffmail.com";
e_14.title = "Get yourself an absolute death to any herpes.";
e_14.body = "Get yourself an absolute death to any herpes.";
spamEmails[14] = e_14;
var e_15 = new Object();
e_15.from = "guaranteloans@aol.com";
e_15.title = "A key from her bedroom is in your pants";
e_15.body = "A key from her bedroom is in your pants";
spamEmails[15] = e_15;
var e_16 = new Object();
e_16.from = "mallam.umaru@yandex.com";
e_16.title = "Bomb her womb from your huge cannon!";
e_16.body = "Bomb her womb from your huge cannon!";
spamEmails[16] = e_16;
var e_17 = new Object();
e_17.from = "consty22@gmail.com";
e_17.title = "Your little friend is watching you tie your shoes";
e_17.body = "Your little friend is watching you tie your shoes";
spamEmails[17] = e_17;
var e_18 = new Object();
e_18.from = "madii002@terra.com";
e_18.title = "Boy eats cats daily";
e_18.body = "Boy eats cats daily";
spamEmails[18] = e_18;
var e_19 = new Object();
e_19.from = "madiii00@aol.fr";
e_19.title = "Tall, Busty Afro-Latina In San Francisco Seeking Travelling Irish Man  Chicago";
e_19.body = "Tall, Busty Afro-Latina In San Francisco Seeking Travelling Irish Man  Chicago";
spamEmails[19] = e_19;
var e_20 = new Object();
e_20.from = "mr-davieswalkermr-prom01@live.com";
e_20.title = "The Breasts Of Lindsay Lohan";
e_20.body = "The Breasts Of Lindsay Lohan";
spamEmails[20] = e_20;
var e_21 = new Object();
e_21.from = "markjerryloans02@hotmail.com";
e_21.title = "The 8th wonder of the world in your pants";
e_21.body = "The 8th wonder of the world in your pants";
spamEmails[21] = e_21;
var e_22 = new Object();
e_22.from = "drgilbertblair_unionbkfundsplc@hotmail.co.uk";
e_22.title = "Eat her then Take her";
e_22.body = "Eat her then Take her";
spamEmails[22] = e_22;
var e_23 = new Object();
e_23.from = "tom_crist_donation@rogers.com";
e_23.title = "Sarah Jessica Parker Arrested For Gross Negligee";
e_23.body = "Sarah Jessica Parker Arrested For Gross Negligee";
spamEmails[23] = e_23;
var e_24 = new Object();
e_24.from = "kasimaiga001@gmail.com";
e_24.title = "You better work!";
e_24.body = "You better work!";
spamEmails[24] = e_24;
var e_25 = new Object();
e_25.from = "mallam2014@yandex.com";
e_25.title = "BREAKING NEWS: Switzerland To Be Devoured By Black Hole";
e_25.body = "BREAKING NEWS: Switzerland To Be Devoured By Black Hole";
spamEmails[25] = e_25;
var e_26 = new Object();
e_26.from = "abena.justinyak02@yahoo.co.uk";
e_26.title = "Your supplier of successful lovemaking.";
e_26.body = "Your supplier of successful lovemaking.";
spamEmails[26] = e_26;
var e_27 = new Object();
e_27.from = "daviesabraham004@gmail.com";
e_27.title = "Dating girls 20-60 years old";
e_27.body = "Dating girls 20-60 years old";
spamEmails[27] = e_27;
var e_28 = new Object();
e_28.from = "iandoncarleonepaisley@gmail.com";
e_28.title = "Britney Spears To Donate Eggs For Darfur";
e_28.body = "Britney Spears To Donate Eggs For Darfur";
spamEmails[28] = e_28;
var e_29 = new Object();
e_29.from = "mrscherryflawer.anderson@yahoo.com";
e_29.title = "We know the method to get your small  fellow up.";
e_29.body = "We know the method to get your small  fellow up.";
spamEmails[29] = e_29;
var e_30 = new Object();
e_30.from = "david_tagro@hotmail.fr";
e_30.title = "Sex Qs; is It a Naked Violence or an Eternal Truth?";
e_30.body = "Sex Qs; is It a Naked Violence or an Eternal Truth?";
spamEmails[30] = e_30;
var e_31 = new Object();
e_31.from = "ahmed_ibrahim4450@yahoo.fr";
e_31.title = "Lord that prick is heroic";
e_31.body = "Lord that prick is heroic";
spamEmails[31] = e_31;
var e_32 = new Object();
e_32.from = "fidelityonlintransfer@live.com";
e_32.title = "IT consultant of perfect love making art.";
e_32.body = "IT consultant of perfect love making art.";
spamEmails[32] = e_32;
var e_33 = new Object();
e_33.from = "felicityfinancialhome@outlook.com";
e_33.title = "A watch that is better than Submariner SS could be only Submariner SS.";
e_33.body = "A watch that is better than Submariner SS could be only Submariner SS.";
spamEmails[33] = e_33;
var e_34 = new Object();
e_34.from = "graham_samuel@ymail.com";
e_34.title = "Your wife need your attention? Solve all the problems with IT.";
e_34.body = "Your wife need your attention? Solve all the problems with IT.";
spamEmails[34] = e_34;
var e_35 = new Object();
e_35.from = "mrbarryfirm1@gmail.com";
e_35.title = "Many have gotten married and we are happy to report the birth of several babies.";
e_35.body = "Many have gotten married and we are happy to report the birth of several babies.";
spamEmails[35] = e_35;
var e_36 = new Object();
e_36.from = "soniakassala@yahoo.co.uk";
e_36.title = "Ride her like a mofo";
e_36.body = "Ride her like a mofo";
spamEmails[36] = e_36;

spamEmails.splice(31,0, e_amazon);
spamEmails.splice(5,0, e_monoprice);
spamEmails.splice(16,0, e_bankofamerica);
spamEmails.splice(28,0, e_bankofamerica2);
spamEmails.splice(32,0, e_psn);
spamEmails.splice(7,0, e_paypal);
spamEmails.splice(2,0, e_rutgers);



function showEmail(e)
{
	if (e == -1)
		document.getElementById("screen").innerHTML=e_fafsa.body;
	else if (e == -2)
		document.getElementById("screen").innerHTML=e_boss.body;
	else if (e == -3)
		document.getElementById("screen").innerHTML=e_birthright.body;
	else
		document.getElementById("screen").innerHTML=spamEmails[e].body;
}


function showInbox()
{
	var inbox = "";
	for (var i=0; i < spamEmails.length; i++) {
		inbox = inbox + "<tr onclick=\"showEmail("+i+")\"><td>"+spamEmails[i].from+"</td><td>"+spamEmails[i].title+"</td></tr>";
	}
	var wholehtml = "Inbox<table><tr><th>Sender</th><th>Subject Line</th></tr>"+inbox+"</table>";
	document.getElementById("screen").innerHTML=wholehtml;
}

function showImportant()
{
	var wholehtml = "Important Emails<br><table><tr><th>Sender</th><th>Subject Line</th></tr><tr><td onclick=\"showEmail(-1)\">"+e_fafsa.from+"</td><td>"+e_fafsa.title+"</td></tr></table>";
	document.getElementById("screen").innerHTML=wholehtml;
}

function showDrafts()
{
	var wholehtml = "Drafts<br><table><tr><th>Sender</th><th>Subject Line</th></tr><tr><td onclick=\"showEmail(-2)\">"+e_boss.from+"</td><td>"+e_boss.title+"</td></tr></table>";
	document.getElementById("screen").innerHTML=wholehtml;
}

function showSent()
{
	var wholehtml = "Sent Emails<br><table><tr><th>Sender</th><th>Subject Line</th></tr><tr><td onclick=\"showEmail(-3)\">"+e_birthright.from+"</td><td>"+e_birthright.title+"</td></tr></table>";
	document.getElementById("screen").innerHTML=wholehtml;
}
