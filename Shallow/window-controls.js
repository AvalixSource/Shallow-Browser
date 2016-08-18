const remote = require('electron').remote;

 document.getElementById("min-btn").addEventListener("click", function (e) {
      var window = remote.getCurrentWindow();
      window.minimize();
 });

 document.getElementById("max-btn").addEventListener("click", function (e) {
      var window = remote.getCurrentWindow();
      if (!window.isMaximized()) {
          window.maximize();
          var resizeButton = document.getElementById("max-btn").innerHTML = '<img src="content/icons/resize-down-button-icon.png" />';
      } else {
          window.unmaximize();
          var resizeButton = document.getElementById("max-btn").innerHTML = '<img src="content/icons/resize-up-button-icon.png" />';
      }
 });

 document.getElementById("close-btn").addEventListener("click", function (e) {
      var window = remote.getCurrentWindow();
      window.close();
 });
