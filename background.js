chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon128.png",
    title: "Reminder",
    message: "It's time for " + alarm.name + "!"
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
