var contextMenuItem = {
	"id": "speak", //id of the context menu item
	"title": "Speak", //what name appears when you right click
	"contexts": ["selection"] //context means in what context should this option appear //selection means when a user selects something (there are others)
};

chrome.contextMenus.create(contextMenuItem); //creates a context menu item

chrome.contextMenus.onClicked.addListener(function(clickData) {
	if(clickData.menuItemId == 'speak' && clickData.selectionText) { 
		chrome.tts.speak(clickData.selectionText,{'rate':0.7})
	}
});