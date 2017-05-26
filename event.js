
function getword(info,tab) {
  console.log(info.selectionText + " was clicked.");

   
		var input = info.selectionText;
    	if(/^\d+(\.\d+)?$/.test(input))
    	{
			chrome.tabs.create({  url:
			"tab.html",
			});   
			
			openTab(input);
			
    	}
    	else
    	{
    	  alert("Only numbers!");
    	}
        
}

function openTab(input){	
var inp = parseFloat(input);
var _budget = localStorage.getItem("bName");
	nBudget = _budget - inp;
localStorage.setItem("bName", nBudget);

}

chrome.contextMenus.create({
  title: "Deduct from budget", 
  contexts:["selection"], 
  onclick: getword,
});
