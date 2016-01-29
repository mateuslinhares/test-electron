'use strict';

var dialog = require('remote').dialog;
var fs = require('fs');
var folderLink = document.querySelector('#folder');
var filesList = document.getElementById('files');

function readFiles(path){
  if(path === undefined || path.length === 0) return false;

  filesList.innerHTML = "";

  var li   = null;
  var file = null;

  fs.readdir(path[0], function(errors, files){
    for (var i = 0; i <= files.length; i++){
      li   = document.createElement("li");
      file = document.createTextNode((i+1) + " - " + files[i]);

      li.appendChild(file);
      filesList.appendChild(li);
    };
  });
}

folderLink.addEventListener('click', function(){
  dialog.showOpenDialog({ properties: [ 'openDirectory' ]}, readFiles);
});
