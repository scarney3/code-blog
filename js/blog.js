var blog = {};

blog.newArticle = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var template = new Article (blog.rawData[i]);
    template.toHTML();
  }
};

blog.truncateArticle = function() {
  $('article p:not(:first-child)').hide().fadeIn(500).fadeOut(800);
  $('.expand').on('click', function(event){
    event.preventDefault();
    var parent = $(this).parent();
    $(this).parent('article').find('.artbod p').show();
  });
};

// blog.filterCategory = function() {
//   var $value = $('#categories').val();
//   console.log($value);
//   $('select#categories').on('change', function(event){
//     event.preventDefault();
//     $('#article').each(function(){
//       if (this.category != $value) {
//         $('#article').hide();
//       } else {
//         $('#article').show();
//       }
//     }
// );

// $('select#categories option').each(function(){

// blog.collectCat = function () {
//   $('.category').each(function(){
//     console.log(this);
//   });
// };


// function to sort publish date here
// blog.sort(function (a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });
