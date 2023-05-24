document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    var eyeReminderButton = document.getElementById('eyeReminderButton');
    var stretchBreakButton = document.getElementById('stretchBreakButton');
    var moodSelect = document.getElementById('moodSelect');
    var trackMoodButton = document.getElementById('trackMoodButton');
    var startTimerButton = document.getElementById('startTimerButton');
    var timerDisplay = document.getElementById('timerDisplay');
    var minutesInput = document.getElementById('minutesInput');
    var timerInterval;
  
    // Add event listeners to the buttons
    eyeReminderButton.addEventListener('click', function() {
      // Code for eye reminder functionality
      alert('It\'s time to rest your eyes!');
    });
  
    stretchBreakButton.addEventListener('click', function() {
      // Code for stretch break functionality
      alert('Take a moment to stretch and relax your muscles.');
    });
  
    trackMoodButton.addEventListener('click', function() {
      // Code for mood tracking functionality
      var selectedMood = moodSelect.value;
      alert('You selected ' + selectedMood + ' as your current mood.');
    });
  
    startTimerButton.addEventListener('click', function() {
      var minutes = parseInt(minutesInput.value);
      if (!isNaN(minutes) && minutes > 0) {
        var seconds = minutes * 60;
        timerDisplay.textContent = formatTime(seconds);
  
        timerInterval = setInterval(function() {
          seconds--;
          timerDisplay.textContent = formatTime(seconds);
          if (seconds <= 0) {
            clearInterval(timerInterval);
            alert('Timer finished!');
          }
        }, 1000);
      }
    });
  
    function formatTime(seconds) {
      var mins = Math.floor(seconds / 60);
      var secs = seconds % 60;
      return ('0' + mins).slice(-2) + 'm ' + ('0' + secs).slice(-2) + 's';
    }
  });
  