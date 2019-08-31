/*Example 1 - Refresh tab/page with specified host every 1 minute*/

if (window.location.hostname === "www.google.com") {
  setTimeout(function(){
   window.location.reload(1);
}, 60000);
}

/*Example 2 -refresh tab/page with specified URL every 1 minute*/

if (window.location.toString() === "https://github.com/minbrowser/min/wiki/userscripts") {
  setTimeout(function(){
   window.location.reload(1);
}, 60000);
}
