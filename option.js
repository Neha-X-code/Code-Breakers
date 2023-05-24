// // Options Script Logic
// // This script runs in the context of the options page

// // Example: Perform actions when the options page is loaded
// document.addEventListener('DOMContentLoaded', function () {
//     // Code to execute when the options page is loaded
//   });
  
//   // Example: Save options to storage
//   function saveOptions() {
//     var option1 = document.getElementById('option1').value;
//     var option2 = document.getElementById('option2').checked;
  
//     chrome.storage.sync.set({ option1: option1, option2: option2 }, function () {
//       // Code to handle saving options
//     });
//   }
  
//   // Example: Restore options from storage
//   function restoreOptions() {
//     chrome.storage.sync.get({ option1: 'default', option2: false }, function (data) {
//       document.getElementById('option1').value = data.option1;
//       document.getElementById('option2').checked = data.option2;
//     });
//   }
  
//   // Example: Add event listeners to elements in the options page
//   document.getElementById('saveButton').addEventListener('click', saveOptions);
  
//   // Example: Perform actions when the options page is opened
//   document.addEventListener('DOMContentLoaded', restoreOptions);
  
  