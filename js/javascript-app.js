$(document).ready(function(){
"use strict";

//REMOVE SHADOW ON LIST IF NO LIST
//if($("li").is(":visible")){
//	$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
//}else{
//	$("ul").css("box-shadow","");
//}
	
//REMOVE SHADOW & SHOW EMPTY IMG ON LIST IF NO LIST
if($("ul li").length === 0){
	$(".empty").show();
	$("#list").css("box-shadow","");
}else if($("ul li").length >= 1){
	$(".empty").hide();
	$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
}else{
	$(".empty").hide();
	$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
}
	
//hide prompts initially
$("#js-item-prompt").hide();

//empty state screen test
window.onunload = unloadPage;
function unloadPage(){
  //alert("unload event detected!");
  if($("ul li").length === 0){
		$(".empty").show();
		$("#list").css("box-shadow","");
	}else if($("ul li").length >= 1){
		$(".empty").hide();
		$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
	}else{
		$(".empty").hide();
		$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
	}
}

//list logic & browser storage
//show prompt using FAB
$("#fab").on("click", function(event){
  var $input = $("input");
  $input.val("");
  $("h4").html("Please add your item");
  event.preventDefault();
  event.stopPropagation();
  $("#js-item-prompt").show();
  $input.focus();
});

//hide prompt if user cancels
$("#btn-cancel").on("click", function(){
  $("#js-item-prompt").hide();
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
		
		if($("ul li").length === 0){
		$(".empty").show();
		$("#list").css("box-shadow","");
	}else if($("ul li").length >= 1){
		$(".empty").hide();
		$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
	}else{
		$(".empty").hide();
		$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
	}
		
		$("#js-item-prompt").hide();
		$(".empty").hide();
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
	   $("input").blur();
   }
});

//shows
if(localStorage.getItem('list')){	
  $('#list').html(localStorage.getItem('list'));
	
  if($("ul li").length === 0){
	$(".empty").show();
	$("#list").css("box-shadow","");
}else if($("ul li").length >= 1){
	$(".empty").hide();
	$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
}else{
	$(".empty").hide();
	$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
}
	
}
    
//remove
$("ul").on("click", "li", function(){
    $(this).remove();
    var i = $(this).text();
		
		//GET CURRENT LIST AS A STRING
    var currentList = localStorage.getItem('list');
	
		//REPLACE THE CLICKED ITEM WITH A BLANK STRING
    var newList = currentList.replace('<li>' + i + '</li>', '');
	
		//UPDATE LOCALSTORAGE WITH UPDATED LIST
    localStorage.setItem('list', newList);
		
		if($("ul li").length === 0){
	$(".empty").show();
	$("#list").css("box-shadow","");
}else if($("ul li").length >= 1){
	$(".empty").hide();
	$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
}else{
	$(".empty").hide();
	$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
}
		
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

$("#demo-menu-lower-right").on("click", function(){
	$(".mdl-ripple").addClass("show");
	setTimeout(function(){
		//alert("set time out");
		$(".mdl-ripple").removeClass("show");
	}, 1500);
});

$("#js-reminder-alert").hide();
//if url is not being viewed in Full Screen App Mode, alert users to save to home screen
if(window.navigator.standalone === false){
  setTimeout(function(){
	$("#js-reminder-alert").show();
	//alert("Add this app to your home screen to quickly access Symplist!");
  }, 100000);
}else{
  //NaN
}
$("#btn-gotit").on("click", function(){
	$("#js-reminder-alert").hide();
});

});