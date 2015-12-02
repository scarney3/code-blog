var blog = {};

blog.newArticle = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var template = new Article (blog.rawData[i]);
    template.toHTML();
  }
};
$(document).ready(function() {
  blog.newArticle();
});
