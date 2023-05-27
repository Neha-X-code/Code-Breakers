chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm=="Water"){
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon1281.png",
      title: "Reminder",
      message: "It's time for " + alarm.name + "!"
  });}
  else if (alarm=="Eye Rest"){
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon1282.png",
      title: "Reminder",
      message: "It's time for " + alarm.name + "!"
  });}
  else {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon1283.png",
      title: "Reminder",
      message: "It's time for " + alarm.name + "!" 
  });}
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
