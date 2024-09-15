function IphoneXWindow() {
    var url = document.getElementById("input").value;
    var mobileWindow = window.open(url, "_blank", "width=375,height=812");
    mobileWindow.focus();
  }

  function IPadWindow() {
    var url = document.getElementById("input").value;
    var iPadWindow = window.open(url, "_blank", "width=768,height=1024");
    iPadWindow.focus();
  }

  function MacWindow() {
    var url = document.getElementById("input").value;
    var macWindow = window.open(url, "_blank", "width=1920,height=1080");
    macWindow.focus();
  }

  function GalaxyNoteWindow() {
    var url = document.getElementById("input").value;
    var galaxyNoteWindow = window.open(url, "_blank", "width=412,height=869");
    galaxyNoteWindow.focus();
  }