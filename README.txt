			Do Not Rent

What does it do?
----------------

This chrome extension will read a list of guests who have stayed in
at this location in the past that created issues for the staff and 
other guests. While making a new reservation it will read the input 
in the first and last name input boxes. If the name matches then it
will alert you saying "(Guest name) is on our not rent list."


Usage
-----
This program currently only works with skytouch in the make new reservation page.
In the future I will add being able to check the arrivals list for people on
the do not rent list.


How do I use this?
------------------
This program is very simple to use as it requires the user to do nothing
different than normal. The program is setup to run in the background as 
you are making a new reservation. It will call the program once you have
moved on to the Address one input box. It does not matter if you tab over
or click on it both will work. Also it will work with either upper or lower 
case. Make sure the name is spelled correctly and that there are no extra spaces 
or symbols in the names. In the future I can make it so unnecessary characters 
will not matter.



How do I add names to the list?
-------------------------------
The only way to add names to the list right now is to manually enter 
into the code. This may seem like an intimidating task if you have never 
dealt with code before but I promise it is very simple if you follow these
steps.

--Windows 10--
1. We want to open the file in Notepad. If it does not do this automatically
then right click "content" and select "open with" if Notepad is still not
listed on that list click "choose another app". From there you may have to scroll down
and click more apps to find it.

2. Once you have opened the app in Notepad we can add the names. For simplicity
I have added the list to the very top of the code. You should see var do_not_rent = [
followed by a list of names.

3. Go to the first name and start a new line after it (press enter)

4. Write in the new name with either '' or "" followed by a comma

5. Go to file on the top left and press save or hold down control and press the 's' key

6. Lastly you will need to visit chrome://extensions/ on chrome and hit the Reload (Ctrl+R) option next to our extention Do Not Rent



EXAMPLE:
this is a mock up of how it will look when you open content.js in notepad

var do_not_rent = [
'Justin Robles',
"John Doe",
"Mickey Mouse"
				  ]

STEP 3:
var do_not_rent = [
'Justin Robles',

"John Doe",
"Mickey Mouse"
				  ]

STEP 4
var do_not_rent = [
'Justin Robles',
'donald duck',
"John Doe",
"Mickey Mouse"
				  ]


Installation
------------
I currently do not have this published on the chrome web store as of
11/7/16. I can publish this to make it possible and easier to use for 
other locations. It can be used on any computer with chrome as long as 
you save this folder locally. Here are a few simple steps to get you started.

1. Once you have downloaded the folder you will need to visit chrome://extensions/ in chrome 

2. In the top right corner there will be a checkbox labeled "Developer mode"
   Make sure that box is checked.

3. Next you will want to press the button labelled "Load unpacked extension"

4. Select the Do Not Rent folder and press okay

5. Last you will want to make sure the "Enabled" box by "Do Not Rent" is checked



Questions or Suggestions?
-------------------------
Feel free to contact me: 
Justin Robles
J.70.Robles@gmail.com


