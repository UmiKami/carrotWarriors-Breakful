let sendResp;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.time) 
		createAlarm();
	sendResp = sendResponse;

	return true
});

function createAlarm(){
    chrome.alarms.create("break", {
      // delayInMinutes: 0.01,
      periodInMinutes: 0.01
    });
}

chrome.alarms.onAlarm.addListener(() => {
	console.log("Hey! Listen");
	sendResp({time: 1++})
  return true;
});