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
        var quotes = [
          "Happiness is not something ready made. It comes from your own actions.",
          "The happiness of your life depends on the quality of your thoughts.",
          "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
          "Happiness is not something ready made. It comes from your own actions.",
          "The happiness of your life depends on the quality of your thoughts.",
        ];
        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        if (selectedMood === "happy") {
          alert('You selected ' + selectedMood + ' as your current mood. Here is a happy quote for you: ' + quote);
        } else if (selectedMood === "stressed") {
          alert('You selected ' + selectedMood + ' as your current mood. Here is a motivating quote for you: ' + quote);
        } else {
          alert('You selected ' + selectedMood + ' as your current mood. Here is a quote for you: ' + quote);
        }
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
      
    });      