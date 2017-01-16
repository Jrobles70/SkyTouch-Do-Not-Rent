var do_not_rent = { //list of People who are not allowed to rent rooms. Left alligned to make it easier to change through Notepad
'Virginia Bishop':true,
'Randy Blanchette':true,
'Geoffrey Blaskey':true,
'Jason Bolt':true,
'Christopher Bowden':true,
'Jason Briese':true,
'William Campbell':true,
'Seth Comstock':true,
'Nickie Connolley':true,
'Eady James Costello':true,
'Eady Costello':true,
'James Costello':true,
'Heather Crenshaw':true,
'Gabriel Robles Ellis':true,
'Gabriel Ellis':true,
'Gabriel Robles':true,
'Chad Enos':true,
'Taniqua Boe Essman':true,
'Taniqua Essman':true,
'Taniqua Boe':true,
'Victor Ferguson':true,
'Josh Garnett':true,
'Jason Garza':true,
'Charlene Hallstrom':true,
'Robert Harp':true,
'Tiffany Harrison':true,
'Aleah Harvy':true,
'Aleah Harney':true,
'Rachel Hasselhun':true,
'Jana Marie Hodgins':true,
'Jana Hodgins':true,
'Jana Marie':true,
'Erica Hunsinger':true,
'Raymond Jay Jemison':true,
'Raymond Jay':true,
'Raymond Jemison':true,
'Katherin Johnson':true,
'Nikkole Kau':true,
'Katy Kennedy':true,
'Jennifer Leslie':true,
'Linda Lilly':true,
'Theresa Lloyd':true,
'Pat McLaughlin':true,
'José Mendoza':true,
'Jose Mendoza':true,
'Brittany Mitchell':true,
'Jazmini Vargas Montes':true,
'Jazmini Montes':true,
'Jazmini Vargas':true,
'Christina Morris':true,
'Tracy Motelewski':true,
'Joseph Nesbitt':true,
'Antron Phillips':true,
'Tarren Marie Quest':true,
'Tarren Marie':true,
'Tarren Quest':true,
'Thomas Rappe':true,
"Jena Ray":true,
"Ardis Rivers":true,
"Brenda Ruiz":true,
"Kevin Saavedra":true,
"Santin Sandoval":true,
"Justin Saylor":true,
"Corinne Scott":true,
"Trevor Sims":true,
"Judson Patrick Smith":true,
"Judson Smith":true,
"Patrick Smith":true,
"Todd Smith":true,
"Zachary Spence":true,
"Sheldon Stark":true,
"Pamela Thompson":true,
"Robert Thompson":true,
"Charlene Toler":true,
"Art Toler":true,
"Mark Ukolov":true,
"Scott Waldorf":true,
"Joana Wallace":true,
"Hunny White":true,
"Andrew White":true
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
