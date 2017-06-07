function deduction(info,tab) {
  console.log(info.selectionText + " was clicked.");

   
		var input = info.selectionText;
    	if(/^\d+(\.\d+)?$/.test(input))
    	{
			//chrome.tabs.create({  url:
			//"tab.html",
			//});   
			deduct(input);								
    	}
    	else
    	{
    	  alert("Only numbers!");
    	}
        
}

function addition(info,tab) {
  console.log(info.selectionText + " was clicked.");

   
		var plus = info.selectionText;
    	if(/^\d+(\.\d+)?$/.test(plus))
    	{
			//chrome.tabs.create({  url:
			//"tab.html",
			//});   
			add(plus);								
    	}
    	else
    	{
    	  alert("Only numbers!");
    	}
        
}

function deduct(input){	
var inp = parseFloat(input);
var _budget = localStorage.getItem("bName");
var	nBudget = _budget - inp;
localStorage.setItem("bName", nBudget);

}

function add(plus){	
var pl = parseFloat(plus);
var _budget = localStorage.getItem("bName");
var budget = parseFloat(_budget);
var	newBudget = budget + pl;
localStorage.setItem("bName", newBudget);

}

chrome.contextMenus.create({
  title: "Deduct from budget", 
  contexts:["selection"], 
  onclick: deduction,
});

chrome.contextMenus.create({
  title: "Put item back", 
  contexts:["selection"], 
  onclick: addition,
});

