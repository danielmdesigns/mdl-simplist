$(document).ready(function(){
"use strict";

//hide the prompt initially
$("#js-prompt").hide();

//list logic & browser storage
//show prompt using FAB
$("#fab").on("click", function(event){
  var $input = $("input");
  $input.val("");
  $("h4").html("Please add your item");
  event.preventDefault();
  event.stopPropagation();
  $("#js-prompt").show();
  $input.focus();
});

//hide prompt if user cancels
$("#btn-cancel").on("click", function(){
  $("#js-prompt").hide();
});

//submit task to list using FAB
$("#btn-add").on("click", function(){
var $item = $("input").val();
  if($item === ""){
	$("h4").html('Sorry, but your input can not be left blank.');
  }else if($item === null){
	return false;
  }else{
  	$("ul").append("<li>" + $item + "</li>");
	$("#js-prompt").hide();
  }
  
  $("#form")[0].reset();
  var list = $('#list').html();
  localStorage.setItem('list', list);
  return false;
  
});

//if enter is pressed, submit task to list
$('input').on("keypress", function(e){
   if(e.keyCode === 13 ){
       $("#btn-add").click();
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

/* Supporting Pages */
$("#developer").on("click", function(){
  $(".mdl-layout__drawer").toggleClass("is-visible");
});
//report a bug
$("#report").on("click", function(){
  $("#main-page-content").load("bug.html");
  $("#fab").hide();
  $(".mdl-layout__drawer").toggleClass("is-visible");
  $(function(){
	  function changeIcon(){
		  var getIcon = document.querySelector(".mdl-layout__drawer-button i");
		  if(getIcon){
			  getIcon.textContent = "arrow_back";
		  }
		  if(!getIcon){
			  setTimeout(function(){
				  changeIcon();
			  }, 50);
		  }
	  }
	  changeIcon();
  });
  $(".mdl-layout__drawer-button i").on("click", function(e){
	  e.stopImmediatePropagation();
	  window.location.href = "symplist.html";
  });
});
//version history
$("#version").on("click", function(){
  $("#main-page-content").load("version.html");
  $("#fab").hide();
  $(".mdl-layout__drawer").toggleClass("is-visible");
  $(function(){
	  function changeIcon(){
		  var getIcon = document.querySelector(".mdl-layout__drawer-button i");
		  if(getIcon){
			  getIcon.textContent = "arrow_back";
		  }
		  if(!getIcon){
			  setTimeout(function(){
				  changeIcon();
			  }, 50);
		  }
	  }
	  changeIcon();
  });
  $(".mdl-layout__drawer-button i").on("click", function(e){
	  e.stopImmediatePropagation();
	  window.location.href = "symplist.html";
  });
});

//support
$("#support").on("click", function(e){
  e.stopImmediatePropagation();
  $("#main-page-content").load("support.html");
  $("#fab").hide();
  $(function(){
	  function changeIcon(){
		  var getIcon = document.querySelector(".mdl-layout__drawer-button i");
		  if(getIcon){
			  getIcon.textContent = "arrow_back";
		  }
		  if(!getIcon){
			  setTimeout(function(){
				  changeIcon();
			  }, 50);
		  }
	  }
	  changeIcon();
  });
  $(".mdl-layout__drawer-button i").on("click", function(e){
	  e.stopImmediatePropagation();
	  window.location.href = "symplist.html";
  });
});

$("#help").on("click", function(e){
  e.stopImmediatePropagation();
});

//if url is not being viewed in Full Screen App Mode, alert users to save to home screen
if(window.navigator.standalone === false){
  setTimeout(function(){
	alert("Add this app to your home screen to quickly access Symplist!");
  }, 10000);
}else{
  //NaN
}

});