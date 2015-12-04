var Article = function (object) {
  this.title = object.title;
  this.category = object.category;
  this.author = object.author;
  this.authorUrl = object.authorUrl;
  this.publishedOn = object.publishedOn;
  this.body = object.body;
};

Article.prototype.toHTML = function() {
  var $article = $('#article').clone();
  $article.find('.title').html(this.title);
  $article.find('.category').html(this.category);
  $article.find('.author').html(this.author);
  $article.find('.authorUrl').html(this.authorUrl);
  $article.find('.publishedOn').html(this.publishedOn);
  $article.find('.artbod').html(this.body);
  $('main').prepend($article);
};
