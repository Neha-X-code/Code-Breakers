// Eye Reminder
function setEyeReminder() {
    // Code to set a timer for the eye reminder
    // This can be implemented using the alarms API or setTimeout
    // For example:
  chrome.alarms.create('eyeReminder', { delayInMinutes: 30 });
}
  
chrome.alarms.onAlarm.addListener((alarm) => {
if (alarm.name === 'eyeReminder') {
      // Code to display an eye reminder notification
      // This can be implemented using the notifications API
      // For example:
    chrome.notifications.create({
      type: 'basic',
      title: 'Eye Reminder',
      message: 'Take a break and rest your eyes!',
      iconUrl: 'icons/eye-icon.png',
  });
}

});
  
  // Stretch Break
function setStretchBreak() {
    // Code to set a timer for the stretch break
    // This can be implemented using the alarms API or setTimeout
    // For example:
  chrome.alarms.create('stretchBreak', { delayInMinutes: 60 });
}
  
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'stretchBreak') {
       // Code to display a stretch break notification
       // This can be implemented using the notifications API
       // For example:
    chrome.notifications.create({
      type: 'basic',
      title: 'Stretch Break',
      message: 'Take a break and do some stretching exercises!',
      iconUrl: 'icons/stretch-icon.png',
    });
  }
});
  
  // Mood Tracking
function trackMood(mood) {
    // Code to track the user's mood
    // This can involve storing the mood in local storage or sending it to a server
    // For example:
  const moodData = {
    mood: mood,
    timestamp: new Date().toISOString(),
  };
  
    // Code to store the mood data or send it to a server
    // For example, using the storage API:
  chrome.storage.local.get('moodHistory', (result) => {
    const moodHistory = result.moodHistory || [];
    moodHistory.push(moodData);
    chrome.storage.local.set({ moodHistory });
  });
}
  
  // Infinite Loop
function startLoop() {
  // Code to start an infinite loop
  // For example, using setInterval:
  setInterval(() => {
    // Code to execute in the loop
    // This can include any additional functionality or checks
  }, 1000);
}
/*function startReminderTimer(reminderType, interval, timerDisplayId) {
  var timerDisplay = document.getElementById(timerDisplayId);
  var timerInterval = timerDisplay.timerInterval;
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  interval = parseInt(interval, 10);
  if (!isNaN(interval) && interval > 0) {
    var seconds = interval * 60;
    timerDisplay.textContent = formatTime(seconds);

    timerInterval = setInterval(function() {
      seconds--;
      timerDisplay.textContent = formatTime(seconds);
      if (seconds <= 0) {
        clearInterval(timerInterval);
        switch (reminderType) {
          case "eye":
            showPopup("It's time to rest your eyes!");
            break;
          case "hydration":
            showPopup("Take a moment to stretch and relax your muscles.");
            break;
          case "stretch":
            showPopup("Drink water right now.");
            break;
        }
      }
    }, 1000);

    timerDisplay.timerInterval = timerInterval;
  }
}

function formatTime(seconds) {
  var mins = Math.floor(seconds / 60);
  var secs = seconds % 60;
  return ('0' + mins).slice(-2) + 'm ' + ('0' + secs).slice(-2) + 's';
}

function showPopup(message) {
  alert(message);
}

});*/       
  // Call the necessary functions to initiate the extension functionality
setEyeReminder();
setStretchBreak();
startLoop();