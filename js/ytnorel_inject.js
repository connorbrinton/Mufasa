var s = document.createElement("script");
s.src = chrome.extension.getURL("js/ytnorel.js");
s.onload = function() {
/*  this.parentNode.removeChild(this);*/
}
/*(document.head||document.documentElement).appendChild(s);*/
document.documentElement.appendChild(s);
