document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('send');
    // onClick's logic below:
    link.addEventListener('click', function() {
        sendForm();
		
    });
    //Display current budget when extension loads
	var _budget = localStorage.getItem("bName");
    document.getElementById("bOutput").innerHTML = "$" + _budget;
});

//onClick logic of 'send' button
function sendForm()
{
    var z = document.getElementById('budget').value; //budget input
    
    if (z=="")
    {
        document.getElementById('budget').style.border="5px solid red";
        document.getElementById('bg').innerHTML="Please enter a budget"; 
    }
    else         
		if(/^\d+(\.\d+)?$/.test(z)) //If the input is an integer or a decimal
		{
			proceed(z);
			return false;
		}
		else
		{
			document.getElementById('budget').style.border="5px solid red";
			document.getElementById('bg').innerHTML="Please enter only numbers!";   
			
		}
}

function proceed(z)
{
	 var s = parseFloat(z); //Turn input into a float value
    localStorage.setItem("bName", s); //Make a local storage variable with the budget input     
    window.location = "userBudget.html"; //Load the userBudget page
}
