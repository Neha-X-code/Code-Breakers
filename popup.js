document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    var eyeReminderButton = document.getElementById('eyeReminderButton');
    var stretchBreakButton = document.getElementById('stretchBreakButton');
    var moodSelect = document.getElementById('moodSelect');
    var trackMoodButton = document.getElementById('trackMoodButton');
  
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
  });
  