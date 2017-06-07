document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('send');
    // onClick's logic below:
    link.addEventListener('click', function() {
        sendForm();
		
    });
	var _budget = localStorage.getItem("bName");
    document.getElementById("bOutput").innerHTML = "$" + _budget;
});

function sendForm()
{
    var z = document.getElementById('budget').value;
    
    if (z=="")
    {
        document.getElementById('budget').style.border="5px solid red";
        document.getElementById('bg').innerHTML="Please enter a budget"; 
    }
    else         
		if(/^\d+(\.\d+)?$/.test(z))
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
	 var s = parseFloat(z);
    localStorage.setItem("bName", s);     
    window.location = "userBudget.html";
}
