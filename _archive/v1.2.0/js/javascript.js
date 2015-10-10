$(document).ready(function(){
	"use strict";
//alert if input left blank
$('button').click(function(ev){
   if($('input').val() === ''){
	   ev.stopImmediatePropagation();
      alert('Sorry, but your input can not be left blank.');
	  return false;
   }
});

//list logic & browser storage
//add using "button"
$("button").on("click", function(){
  var $item = $("input").val();
  //var $item = prompt("Add new Item");
  $("ul").append("<li>" + $item + "</li>");
//add using "enter"
$('input').keypress(function(e){
  if(e.which === 13){
	$('button').click();
  }
});
//set
$('#form')[0].reset();
  var list = $('#list').html();
  localStorage.setItem('list', list);
  return false;
});
//shows
if(localStorage.getItem('list')){
  $('#list').html(localStorage.getItem('list'));
}
//remove
$("ul").on("click", "li", function (){
    $(this).remove();
    var i = $(this).text();
	// get the current list as a string.
    var currentList = localStorage.getItem('list');
	// replace the clicked item with a blank string.
    var newList = currentList.replace('<li>' + i + '</li>', '');
	// update the localStorage with the new list
    localStorage.setItem('list', newList);
});

//dropdown info
var $menu = $(".dropdown-menu");
$('html').on("click", function(){
  $menu.removeClass("active");
});
$(".dropdown-icon").on("click", function(e){
  e.stopPropagation();
  $menu.toggleClass("active");
});
$(document).on("click", function(){
	$menu.removeClass("active");
});

//button animation
(function(window, $) {
  $(function() {
	$('.ripple').on('click', function(event){
	event.preventDefault();
	
	var $div = $('<div/>'),
	btnOffset = $(this).offset(),
	xPos = event.pageX - btnOffset.left,
	yPos = event.pageY - btnOffset.top;
	
	$div.addClass('ripple-effect');
	var $ripple = $(".ripple-effect");
	
	$ripple.css("height", $(this).height());
	$ripple.css("width", $(this).height());
	$div.css({
		top: yPos - ($ripple.height() / 2),
		left: xPos - ($ripple.width() / 2),
		background: $(this).data("ripple-color")
	})
	.appendTo($(this));
	
	window.setTimeout(function(){
	$div.remove();
	}, 2000);
	});
  });
})(window, jQuery);

//make list sortable
//needs to re-save list, once swap is complete.
//needs to toggle on/off switch
/*$("#sortme").on("click", function(){
	$(function(){
	  $("#list").sortable();
	  $("#list").disableSelection();	  
  });
});*/

// iOS Header Jumpy Fix
$(function(){
  var $body;
  if ("ontouchstart" in window){
    $body = $("body");
    document.addEventListener("focusin", function(){
      return $body.addClass("fixfixed");
    });
    return document.addEventListener("focusout", function(){
      $body.removeClass("fixfixed");
      return setTimeout(function(){
        return $(window).scrollLeft(0);
      }, 20);
    });
  }
});

//mobile device specifics
if(window.navigator.standalone === true){
	$('main').css('padding-top','100px');
	$('.fab').css({"width":"70px", "height":"70px"});
	$('ul#list').css("margin-bottom", "40px");
}

});