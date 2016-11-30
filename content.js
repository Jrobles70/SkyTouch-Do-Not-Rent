var do_not_rent = [ //list of People who are not allowed to rent rooms. Left alligned to make it easier to change through Notepad
'Justin Robles',
'John Doe'
				  ]

// This calls the function when you have finished entering the names and click the address
// box.
document.getElementsByName('homeAddressOne')[0].onclick = verifyGuest;

// Event listener for keyup
function checkTabPress(e) {
	// Function will call verifyGuest if you are using tab to go through the boxes
    "use strict";
    // pick passed event of global event object
    e = e || event;
    if (e.keyCode == 9)
        verifyGuest();
}

var body = document.querySelector('body');
body.addEventListener('keyup', checkTabPress);

function verifyGuest(){ 
	// Function will take value from the First and Last name input box and 
	// check it with the do_not_rent array
	var first = document.getElementsByName("firstName")[0].value;
	var last = document.getElementsByName("lastName")[0].value;
	var whole_name = first.toLowerCase() + " " + last.toLowerCase();
	for(i = 0; i < do_not_rent.length; i++){ 
		if(whole_name == do_not_rent[i].toLowerCase()){ 
			alert(do_not_rent[i] + " is on our do not rent list");
			return
		}

	}
}

function verifyArrivals(){
	//FIXME: This function will check the skytouch arrival page for anyone on the do not rent list
	// 		 that booked a room online
}

	//FIXME: Make an easier way for the user to input names rather then having them add to the do_not_rent array.
	//		 Editing the code may be intimidating to some people
	//IDEAS: An extension webpage that can add and delete names with a simple input box and add button