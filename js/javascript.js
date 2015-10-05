$(document).ready(function(){
"use strict";
//alert if input left blank
/*$('#fab').click( function(e){
   if($('input').val() === ""){
      e.stopImmediatePropagation();
      alert('Sorry, but your input can not be left blank.');
	return false;
   }
});*/
 
//list logic & browser storage
//add using "button"
$("#fab").on("click", function(){
  var $item = prompt("Add new Item");
  $("ul").append("<li>" + $item + "</li>");
    
//set
$("#form")[0].reset();
  var list = $('#list').html();
  localStorage.setItem('list', list);
  return false;
});

/*$('input').on("keypress", function(e){
   if(e.keyCode === 13 ){
       $("button[id='fab']").click();
   }
});*/
    
//shows
if(localStorage.getItem('list')){
  $('#list').html(localStorage.getItem('list'));
}
    
//remove
$("ul").on("click", "li", function (){
    $(this).remove();
	$("li").unbind("hover");
    var i = $(this).text();
	// get the current list as a string.
    var currentList = localStorage.getItem('list');
	// replace the clicked item with a blank string.
    var newList = currentList.replace('<li>' + i + '</li>', '');
	// update the localStorage with the new list
    localStorage.setItem('list', newList);
});

/* SPA */
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
	  window.location.href = "simplist.html";
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
	  window.location.href = "simplist.html";
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
	  window.location.href = "simplist.html";
  });
});

$("#help").on("click", function(e){
  e.stopImmediatePropagation();
});

//if url is not being viewed in Full Screen App Mode, alert users to save to home screen
if(window.navigator.standalone === false){
  setTimeout(function(){
	alert("Add this app to your home screen to quickly access Simplist!");
  }, 10000);
}else{
  //NaN
}

/* ripple button effect */
$('.btn-color').mousedown(function (e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var ripple = target.querySelector('.ripple');
  $(ripple).remove();
  ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
  target.appendChild(ripple);
  var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
  var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
  ripple.style.top = top + 'px';
  ripple.style.left = left + 'px';
  return false;
});


});