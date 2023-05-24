document.addEventListener('DOMContentLoaded', function() {
    var eyeReminderButton = document.getElementById('eyeReminderButton');
    var hydrationReminderButton = document.getElementById('hydrationReminderButton');
    var stretchReminderButton = document.getElementById('stretchReminderButton');
    var moodSelect = document.getElementById('moodSelect');
    var trackMoodButton = document.getElementById('trackMoodButton');
  
    eyeReminderButton.addEventListener('click', function() {
      var interval = document.getElementById('eyeInterval').value;
      startReminderTimer('eye', interval, 'eyeTimerDisplay');
    });
  
    hydrationReminderButton.addEventListener('click', function() {
      var interval = document.getElementById('hydrationInterval').value;
      startReminderTimer('hydration', interval, 'hydrationTimerDisplay');
    });
  
    stretchReminderButton.addEventListener('click', function() {
      var interval = document.getElementById('stretchInterval').value;
      startReminderTimer('stretch', interval, 'stretchTimerDisplay');
    });
  
    trackMoodButton.addEventListener('click', function() {
      var selectedMood = moodSelect.value;
      alert('You selected ' + selectedMood + ' as your current mood.');
    });
  
    function startReminderTimer(reminderType, interval, timerDisplayId) {
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
            showPopup('Timer finished!');
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
  });
  