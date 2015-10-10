$(document).ready(function(){
	
//alert if input left blank
$('button').click(function(){
   if($('input').val() == ''){
      alert('Sorry, but your input can not be left blank.');
	  e.preventDefault();
   }
});

//list logic & browser storage
//add using "button"
$("button").on("click", function() {
  var $item = $("input").val();
  $("ul").append("<li>" + $item + "</li>");
  
//set
$('#form')[0].reset();
  var list = $('#list').html();
  localStorage.setItem('list', list);
  return false;
});

//add using "enter"
$('input').keypress(function(e){
  if(e.which == 13){
	$('button').click();
  }
});

//show
if(localStorage.getItem('list')) {
  $('#list').html(localStorage.getItem('list'));
}
//remove
$("ul").on("click", "li", function () {
    $(this).remove();
    var i = $(this).text();
    var currentList = localStorage.getItem('list');
	// get the current list as a string.
    var newList = currentList.replace('<li>' + i + '</li>', '');
	// replace the clicked item with a blank string.
    localStorage.setItem('list', newList);
	// update the localStorage with the new list
});


//dropdown info
$('html').click(function() {
  $('.dropdown-menu').removeClass("active");
});

$(".dropdown-icon").click(function(e) {
  e.stopPropagation();
  $('.dropdown-menu').toggleClass("active");
});

$('.dropdown-menu').click(function(e) {
  e.stopPropagation();
});

//mobile keyboard fix

//make phone numbers a link
/*var regex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/g; 
var text = $("body:first").html();
text = text.replace(regex, "<a href=\"tel:$&\">$&</a>");
$("body:first").html(text);*/

//button animation
(function(window, $) {

  $(function() {

    $('.ripple').on('click', function(event) {
      event.preventDefault();

      var $div = $('<div/>'),
        btnOffset = $(this).offset(),
        xPos = event.pageX - btnOffset.left,
        yPos = event.pageY - btnOffset.top;

      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height() / 2),
          left: xPos - ($ripple.width() / 2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      window.setTimeout(function() {
        $div.remove();
      }, 2000);
    });

  });

})(window, jQuery);

//make list sortable
$(function() {
    $( "#list" ).sortable();
    $( "#list" ).disableSelection();
  });

});