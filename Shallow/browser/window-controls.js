const remote = require('electron').remote;
var $ = require('jquery');

$("#min-btn").click(function() {
  var window = remote.getCurrentWindow();
  window.minimize();
});

$("#max-btn").click(function() {
  var window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
      window.maximize();
  } else {
      window.unmaximize();
  }
});

$("#close-btn").click(function() {
  var window = remote.getCurrentWindow();
  window.close();
});
