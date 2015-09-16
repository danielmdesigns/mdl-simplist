$(document).ready(function(){
"use strict";
//alert if input left blank
$('#fab').click( function(e){
   if($('input').val() === ""){
      e.stopImmediatePropagation();
      alert('Sorry, but your input can not be left blank.');
	return false;
   }
});
    
//list logic & browser storage
//add using "button"
$("#fab").on("click", function(){
  var $item = $("input").val();
  $("ul").append("<li>" + $item + "</li>");
    
//set
$('#form')[0].reset();
  var list = $('#list').html();
  localStorage.setItem('list', list);
  return false;
});

$('input').on("keypress", function(e){
   if(e.keyCode === 13 ){
       $("button[id='fab']").click();
   }
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

$("#goback").on("click", function(){
	//alert("im working");
	window.location.href = "simplist.html";
	return false;
});

var ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if(window.navigator.standalone === false){
  setTimeout(function(){
    alert("Add this web app to the home screen of your device for easier access.");
  }, 5000);
}else{
  //NaN
}

});