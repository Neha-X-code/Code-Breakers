document.addEventListener("DOMContentLoaded", function() {
  var waterBtn = document.getElementById("waterBtn");
  waterBtn.addEventListener("click", function() {
    var waterHoursInput = document.getElementById("waterHours");
    var waterMinutesInput = document.getElementById("waterMinutes");
    var waterHoursValue = parseInt(waterHoursInput.value) || 0;
    var waterMinutesValue = parseInt(waterMinutesInput.value) || 1;
    setReminder("Water Reminder", "Have a sip of water, human!", waterHoursValue, waterMinutesValue);
  });

  var eyeBtn = document.getElementById("eyeBtn");
  eyeBtn.addEventListener("click", function() {
    var eyeHoursInput = document.getElementById("eyeHours");
    var eyeMinutesInput = document.getElementById("eyeMinutes");
    var eyeHoursValue = parseInt(eyeHoursInput.value) || 0;
    var eyeMinutesValue = parseInt(eyeMinutesInput.value) || 1;
    setReminder("Eye Rest Reminder", "Take a break and rest your eyes.", eyeHoursValue, eyeMinutesValue);
  });

  function setReminder(title, message, hours, minutes) {
    if (isNaN(hours) || hours < 0 || isNaN(minutes) || minutes <= 0) {
      alert("Please enter valid values for hours and minutes.");
      return;
    }

    var totalMinutes = hours * 60 + minutes;
    var delayInMinutes = totalMinutes;
    var periodInMinutes = totalMinutes;

    chrome.alarms.create(title, {
      delayInMinutes: delayInMinutes,
      periodInMinutes: periodInMinutes
    });

    alert("Reminder set successfully!");
  }
});
