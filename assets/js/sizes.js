
function setFrameSize(){
  var themeFrame = document.getElementById('theme-frame');
  var content = document.getElementById('content');
  var footer = document.getElementById('footer');

  var innerHeight = window.innerHeight - footer.offsetHeight;

  themeFrame.setAttribute('width',content.offsetWidth);
  themeFrame.setAttribute('height',innerHeight);
}
