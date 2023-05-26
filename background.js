chrome.alarms.onAlarm.addListener(() => {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon128.png",
      title: "Stay Hydrated",
      message: "Have a sip of water, human!"
    });
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    if (request.time) {
      createAlarm(request.time);
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false });
    }
  });
  
  function createAlarm(timerValue) {
    chrome.alarms.create("drink_water", {
      delayInMinutes: timerValue,
      periodInMinutes: timerValue
    });
  }
  