var do_not_rent = [ //list of People who are not allowed to rent rooms. Left alligned to make it easier to change through Notepad
'Virginia Bishop',
'Randy Blanchette',
'Geoffrey Blaskey',
'Jason Bolt',
'Christopher Bowden',
'Jason Briese',
'William Campbell',
'Seth Comstock',
'Nickie Connolley',
'Eady James Costello',
'Eady Costello',
'James Costello',
'Heather Crenshaw',
'Gabriel Robles Ellis',
'Gabriel Ellis',
'Gabriel Robles',
'Chad Enos',
'Taniqua Boe Essman',
'Taniqua Essman',
'Taniqua Boe',
'Victor Ferguson',
'Josh Garnett',
'Jason Garza',
'Charlene Hallstrom',
'Robert Harp',
'Tiffany Harrison',
'Aleah Harvy',
'Aleah Harney',
'Rachel Hasselhun',
'Jana Marie Hodgins',
'Jana Hodgins',
'Jana Marie',
'Erica Hunsinger',
'Raymond Jay Jemison',
'Raymond Jay',
'Raymond Jemison',
'Katherin Johnson',
'Nikkole Kau',
'Katy Kennedy',
'Jennifer Leslie',
'Linda Lilly',
'Theresa Lloyd',
'Pat McLaughlin',
'José Mendoza',
'Jose Mendoza',
'Brittany Mitchell',
'Jazmini Vargas Montes',
'Jazmini Montes',
'Jazmini Vargas',
'Christina Morris',
'Tracy Motelewski',
'Joseph Nesbitt',
'Antron Phillips',
'Tarren Marie Quest',
'Tarren Marie',
'Tarren Quest',
'Thomas Rappe',
"Jena Ray",
"Ardis Rivers",
"Brenda Ruiz",
"Kevin Saavedra",
"Santin Sandoval",
"Justin Saylor",
"Corinne Scott",
"Trevor Sims",
"Judson Patrick Smith",
"Judson Smith",
"Patrick Smith",
"Todd Smith",
"Zachary Spence",
"Sheldon Stark",
"Pamela Thompson",
"Robert Thompson",
"Charlene Toler",
"Art Toler",
"Mark Ukolov",
"Scott Waldorf",
"Joana Wallace",
"Hunny White",
"Andrew White"
				  ]

var lowerDNR = function(x){ 
  return x.toLowerCase();
};
do_not_rent = do_not_rent.map(lowerDNR);

document.getElementsByName('homeAddressOne')[0].onclick = getFirstLast;

// Event listener for keyup
function checkTabPress(e) {
	// Function will call verifyGuest if you are using tab to go through the boxes
    "use strict";
    // pick passed event of global event object
    e = e || event;
    if (e.keyCode == 9)
        getFirstLast();
}

var body = document.querySelector('body');
body.addEventListener('keyup', checkTabPress);

function getFirstLast() {
	// Function will take value from the First and Last name input box and 
	// check it with the do_not_rent array
	var first = document.getElementsByName("firstName")[0].value;
	var last = document.getElementsByName("lastName")[0].value;
	var wholeName = first.toLowerCase() + " " + last.toLowerCase();
	if (do_not_rent.includes(wholeName))
		alert(wholeName + " is on our do not rent list")
}

function verify() {
	half = do_not_rent.length 
}

function verifyArrivals(){
	// Function will be called if the user is viewing the arrivals list
	idName = "arrivalListCell";
	count = 0;
	do {
		currentName = document.getElementById(idName + count);
		
	}
	while(document.getElementById(idName + count)){
		console.log(document.getElementById(idName + count).innerText)
		count++
	}

}

function verifyInHouse(){

}