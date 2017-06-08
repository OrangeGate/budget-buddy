
function deduction(info,tab) {
  console.log(info.selectionText + " was clicked.");

   
		var input = info.selectionText; //highlighted input from context menu
    	if(/^\d+(\.\d+)?$/.test(input)) //if the input is a float number
    	{
			//chrome.tabs.create({  url:
			//"tab.html",
			//});   
			deduct(input);	//subtraction logic						
    	}
    	else
    	{
    	  alert("Only numbers!");
    	}
        
}

function addition(info,tab) {
  console.log(info.selectionText + " was clicked.");

   
		var plus = info.selectionText; //highlighted input from context menu
    	if(/^\d+(\.\d+)?$/.test(plus)) //if the input is a float number
    	{
			//chrome.tabs.create({  url:
			//"tab.html",
			//});   
			add(plus);	//addition logic						
    	}
    	else
    	{
    	  alert("Only numbers!");
    	}
        
}

function deduct(input){	
var inp = parseFloat(input); //convert string to float
var _budget = localStorage.getItem("bName"); //call local storage variable of budget
var	nBudget = _budget - inp; //new budget
localStorage.setItem("bName", nBudget); // save new budget in local storage
if(nBudget <= 0)
{
	alert("You just went over your budget"); //alert for when the budget goes below 0
}
}

function add(plus){	
var pl = parseFloat(plus); //convert string to float
var _budget = localStorage.getItem("bName"); //call local storage variable of budget
var budget = parseFloat(_budget); //convert string to float
var	newBudget = budget + pl; // new budget
localStorage.setItem("bName", newBudget); // save new budget in local storage

}

//context menu for the deduction
chrome.contextMenus.create({
  title: "Deduct from budget", 
  id: "subtract",
  contexts:["selection"], 
  onclick: deduction,
});

//context menu for the addition
chrome.contextMenus.create({
  title: "Put item back", 
  id: "addthis",
  contexts:["selection"], 
  onclick: addition,
});


