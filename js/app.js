var Article = function (object) {
  this.title = object.title;
  this.category = object.category;
  this.author = object.author;
  this.authorUrl = object.authorUrl;
  this.publishedOn = object.publishedOn;
  this.body = object.body;
};

Article.prototype.toHTML = function() {
  var source = $('#entry-template').text();
  var template = Handlebars.compile(source);

  return template(this);
};
