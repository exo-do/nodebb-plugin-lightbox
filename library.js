"use strict";

var lightbox = {};

  lightbox.lightboxPrettify = function (postContent, callback) {
    postContent.postData.content = postContent.postData.content.replace( /\<img src\=\"?(.*)\" alt\=\"?(.*)\" (.*)\/\>/g , '<a class="lightboxlink" href="$1" data-lightbox="$2"><img class="lightboximage" src="$1" alt="$2"></a>');
    callback(null, postContent);
  };
  lightbox.parseSignature = function (postContent, callback) {
    postContent.userData.signature = postContent.userData.signature.replace(  /\<img src\=\"?(.*)\" alt\=\"?(.*)\" (.*)\/\>/g , '<a class="lightboxlink" href="$1" data-lightbox="$2"><img class="lightboximage" src="$1" alt="$2"></a>');
    callback(null, postContent);
  };
module.exports = lightbox;
