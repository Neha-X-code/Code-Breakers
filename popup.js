document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function() {
      var hoursInput = document.getElementById("hours");
      var minutesInput = document.getElementById("minutes");
      var hoursValue = parseInt(hoursInput.value);
      var minutesValue = parseInt(minutesInput.value);
  
      // Validation for minutes input
      if (isNaN(minutesValue) || minutesValue < 0 || minutesValue >= 60) {
        alert("Please enter a valid value for minutes (0-59).");
        return;
      }
  
      // Calculate the total time in minutes
      var totalMinutes = hoursValue * 60 + minutesValue;
      if (totalMinutes <= 0) {
        alert("Please enter a valid timer value (greater than 0).");
        return;
      }
  
      chrome.runtime.sendMessage({ time: totalMinutes }, function(response) {
        if (response.success) {
          alert("Alarm set successfully!");
        } else {
          alert("Failed to set the alarm.");
        }
      });
    });
  });
  