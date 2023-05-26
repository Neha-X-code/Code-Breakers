document.addEventListener("DOMContentLoaded", function() {
  var waterBtn = document.getElementById("waterBtn");
  waterBtn.addEventListener("click", function() {
    var waterHoursInput = document.getElementById("waterHours");
    var waterMinutesInput = document.getElementById("waterMinutes");
    var waterHours = parseInt(waterHoursInput.value);
    var waterMinutes = parseInt(waterMinutesInput.value);
    setReminder("Water", waterHours, waterMinutes);
  });

  var eyeBtn = document.getElementById("eyeBtn");
  eyeBtn.addEventListener("click", function() {
    var eyeHoursInput = document.getElementById("eyeHours");
    var eyeMinutesInput = document.getElementById("eyeMinutes");
    var eyeHours = parseInt(eyeHoursInput.value);
    var eyeMinutes = parseInt(eyeMinutesInput.value);
    setReminder("Eye Rest", eyeHours, eyeMinutes);
  });

  var stretchBtn = document.getElementById("stretchBtn");
  stretchBtn.addEventListener("click", function() {
    var stretchHoursInput = document.getElementById("stretchHours");
    var stretchMinutesInput = document.getElementById("stretchMinutes");
    var stretchHours = parseInt(stretchHoursInput.value);
    var stretchMinutes = parseInt(stretchMinutesInput.value);
    setReminder("Stretch", stretchHours, stretchMinutes);
  });

  function setReminder(reminderName, hours, minutes) {
    if ((hours === 0 && minutes === 0) || isNaN(hours) || isNaN(minutes)) {
      alert("Please enter a valid value for " + reminderName + " reminder.");
      return;
    }

    var totalMinutes = hours * 60 + minutes;
    var totalSeconds = totalMinutes * 60;
    chrome.runtime.sendMessage({ reminder: reminderName, time: totalSeconds }, function(response) {
      if (response.success) {
        alert(reminderName + " reminder set successfully!");
      } else {
        alert("Failed to set the " + reminderName + " reminder.");
      }
    });
  }
});
