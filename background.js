chrome.alarms.onAlarm.addListener(function(alarm) {
  var reminderName = alarm.name.split("_")[0];
  var message = "";

  if (reminderName === "Water") {
    message = "Have a sip of water, human!";
  } else if (reminderName === "Eye") {
    message = "Rest your eyes for a while!";
  } else if (reminderName === "Stretch") {
    message = "Time to stretch your body!";
  }

  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon128.png",
    title: reminderName + " Reminder",
    message: message
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request);
  if (request.reminder && request.time) {
    createAlarm(request.reminder, request.time);
    sendResponse({ success: true });
  } else {
    sendResponse({ success: false });
  }
});

function createAlarm(reminderName, timerValue) {
  chrome.alarms.create(reminderName.toLowerCase() + "_reminder", {
    delayInMinutes: timerValue / 60,
    periodInMinutes: timerValue / 60
  });
}
