"use strict";

var spoiler = {};

  spoiler.spoilerPrettify = function (postContent, callback) {
    postContent.postData.content = postContent.postData.content.replace( /\>!\!?([\s\S]*)\!\</ , '<div class="spoiler"><div class="spoiler-btn"><span class="spoilervariable">Spoiler</span></div><div class="spoiler-body collapse">$1</div></div>');
    callback(null, postContent);
  };

module.exports = spoiler;
