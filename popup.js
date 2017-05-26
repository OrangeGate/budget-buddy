document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('send');
    // onClick's logic below:
    link.addEventListener('click', function() {
        sendForm(); //starts the function when the 'send' button is clicked
    });
});


function sendForm() //'send' button's functionality
{
    var z = document.getElementById('budget').value; //input by the user
    
    if (z=="") //If the user clicks the button with no input
    {
        document.getElementById('budget').style.border="5px solid red";
        document.getElementById('bg').innerHTML="Please enter a budget"; 
    }
    else         
		if(/^\d+(\.\d+)?$/.test(z)) //if the user enters only decimals and/or integers
		{
			proceed(z);
			return false;
		}
		else //if the user does not enter decimals and/or integers
		{
			document.getElementById('budget').style.border="5px solid red"; 
			document.getElementById('bg').innerHTML="Please enter only numbers!";   
			
		}
}

function proceed(z) //saves input into local storage and sends it to event.js
{
    var s = parseFloat(z);
    localStorage.setItem("bName", s);     
    window.location = "userBudget.html";
}
