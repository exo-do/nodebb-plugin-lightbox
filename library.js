"use strict";

var lightbox = {};

  lightbox.lightboxPrettify = function (postContent, callback) {
    postContent.postData.content = postContent.postData.content.replace( /<img src="?(.*)" alt="?(.+)" \/>/g , '<a class="lightboxlink" href="$1" data-lightbox="$2"><img class="lightboximage" src="$1" alt="$2"></a>');
    /*postContent.postData.content = postContent.postData.content.replace( /<code<a class="lightboxlink" href="(.*)" data-lightbox="(.*)"><img class="?(.*)" src="?(.*)" alt="?(.*)"><\/a>/g , '<img class="$1" src="$2" alt="$3">');
*/

    callback(null, postContent);
  };
  lightbox.parseSignature = function (postContent, callback) {
    postContent.userData.signature = postContent.userData.signature.replace(  /<img src="?(.*)" alt="?(.+)" \/>/g , '<a class="lightboxlink" href="$1" data-lightbox="$2"><img class="lightboximage" src="$1" alt="$2"></a>');
    /*postContent.userData.signature = postContent.userData.signature.replace( /<a class="lightboxlink" href="(.*)" data-lightbox="(.*)"><img class="?(.*)" src="?(.*)" alt="?(.*)"><\/a>/g , '<img class="$1" src="$2" alt="$3">');
    */
    callback(null, postContent);
  };
module.exports = lightbox;
