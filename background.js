chrome.alarms.onAlarm.addListener(function(alarm) {
  showNotification(alarm.name);
});

function showNotification(title) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon128.png",
    title: title,
    message: "Time to take a break!"
  });
}
