sizes = {
  getContentHeight: function(){
    return window.innerHeight - 5/1000*window.innerHeight;
  },
  setFrameSize: function(){
    var themeFrame = document.getElementById('theme-frame');
    var content = document.getElementById('content');
    var innerHeight = this.getContentHeight();

    themeFrame.setAttribute('width',content.offsetWidth);
    themeFrame.setAttribute('height',innerHeight);
  },
  setSidebarSize: function(){
    document.getElementById('sidebar').style.height = this.getContentHeight()+"px";
  }
}
