"use strict";

var spoiler = {};

  spoiler.spoilerPrettify = function (postContent, callback) {
    postContent.postData.content = postContent.postData.content.replace( /\/spoiler.?([\s\S]*)spoiler\//g , '<div class="spoiler"><div class="spoiler-btn"><span class="spoilervariable">Spoiler</span></div><div class="spoiler-body collapse">$1</div></div>');
    callback(null, postContent);
  };
  spoiler.parseSignature = function (postContent, callback) {
    postContent.userData.signature = postContent.userData.signature.replace( /\/spoiler.?([\s\S]*)spoiler\//g , '<div class="spoiler"><div class="spoiler-btn"><span class="spoilervariable">Spoiler</span></div><div class="spoiler-body collapse">$1</div></div>');
    callback(null, postContent);
  };
  spoiler.renderHelp = function (helpContent, callback) {
    helpContent += 'Para usar la función spoiler debes encapsular el contenido que quieres ocultar entre las etiquetas "/spoiler" y "spoiler/", por ejemplo, "/spoiler Esto es una prueba spoiler/ encapsula el texto "Esto es una prueba" en un botón de spoiler ';
    callback(null, helpContent);
  };

module.exports = spoiler;
