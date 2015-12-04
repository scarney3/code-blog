$('textarea#body').on('change', function(event){
  event.preventDefault();
  var content = marked($(this).val());
  console.log(content);
  $('#preview').html(content);
});
