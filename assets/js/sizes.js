sizes = {
  getContentHeight: function(){
    var footer = document.getElementById('footer');
    return window.innerHeight - footer.offsetHeight;
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
