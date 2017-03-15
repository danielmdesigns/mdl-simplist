$(document).ready(function(){
"use strict";

//HIDE PROMPTS ONLOAD
$("#js-modal").hide();
	
//REMOVE SHADOW & SHOW EMPTY IMG ON LIST IF NO LIST
function emptyState(){
	var emptyStateGraphic = $(".emptyState");
	var listView = $("#list");
	if($("ul li").length === 0){
		emptyStateGraphic.show();
		listView.css("box-shadow","");
	}else if($("ul li").length >= 1){
		emptyStateGraphic.hide();
		listView.css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
	}else{
		emptyStateGraphic.hide();
		listView.css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
	}
}

//BLUR ELEMENTS IN BACKGROUND 
function blur(){
	var blurElements = $(".blur");
	if($("#js-modal").is(":visible")){
		blurElements.addClass("is-blur");
	}else{
		blurElements.removeClass("is-blur");
	}
}
	
//TEST FOR EMPTY STATE
window.onunload = unloadPage;
function unloadPage(){
	emptyState();
}

//***** LIST LOGIC && BROWSER STORAGE *****//
		
//SHOW PROMPT WHEN ON FAB TAP/CLICK
$("#js-fab").on("click", function(event){
  var $input = $("input");
  $input.val("");
  $(".modal__title").html("Please add your item");
  event.preventDefault();
  event.stopPropagation();
  $("#js-modal").show();
  blur();
  $input.focus();
});

//HIDE PROMPT IF USER CANCELS
$("#btnCancel").on("click", function(){
	$("#js-modal").hide();
	blur();
});

//SUBMIT TASK TO LIST ON FAB TAP/CLICK
$("#btnAdd").on("click", function(){
	var $item = $("input").val();
  if($item === ""){
		$(".modal__title").html('Sorry, but your input can not be left blank.');
  }else if($item === null){
		return false;
  }else{
		$("ul").append("<li>" + $item + "</li>");
		emptyState();
		$(".emptyState").hide();
		$("#js-modal").hide();
		blur();
  }
	
  $("#form")[0].reset();
  var list = $('#list').html();
  localStorage.setItem('list', list);
  return false;
  
});

//SUBMIT TASK ON ENTER KEYPRESS
$('input').on("keypress", function(e){
	if(e.keyCode === 13 ){
	 $("#btnAdd").click();
	 $("input").blur();
	}
});

//SHOW LIST
if(localStorage.getItem('list')){	
  $('#list').html(localStorage.getItem('list'));
	emptyState();
}
    
//REMOVE LIST ITEM
$("ul").on("click", "li", function(){
	$(this).remove();
	var i = $(this).text();

	//GET CURRENT LIST AS A STRING
	var currentList = localStorage.getItem('list');

	//REPLACE THE CLICKED ITEM WITH A BLANK STRING
	var newList = currentList.replace('<li>' + i + '</li>', '');

	//UPDATE LOCALSTORAGE WITH UPDATED LIST
	localStorage.setItem('list', newList);
	
	//CHECK FOR EMPTY LIST
	emptyState();
		
});
		
//***** NAVIGATION MENU *****//
$(function(){
	$('.nav-toggle, nav a').on('click',function(){
		var nav = $('nav');
		var blurItems = $(".blur");
		nav.toggleClass('open');
		if(nav.hasClass("open")){
			blurItems.addClass("is-blur");
		}else{
			blurItems.removeClass("is-blur");
		}
	});
});
	
//***** ADD TO HOMESCREEN *****//
$("#js-ath").hide();
////IF NOT VIEWING IN APP MODE
//if(window.navigator.standalone === false){
//	//SHOW ATH MESSAGE EVERY 30s
//	setTimeout(function(){
//		$("#js-ath").show();
//	}, 30000); //30s
//}
	
//IF VIEWING IN APP MODE
if(window.navigator.standalone){
	
if(window.innerHeight > window.innerWidth){
	//portrait = true;
	var statusBarProperties = {
		"position":"fixed",
		"z-index":"100",
		"top":"0",
		"left":"0",
		"width":"100%",
		"padding":"0.75rem"
	};
	$(".statusbar").css(statusBarProperties);
	$("header").css("margin-top","1.325rem");
	$(".nav-toggle.close").css("top","2.5rem");
}else{
	//portrait = false; in landscape
	$(".statusbar").css("padding","0");
	$("header").css("margin-top","5px");
	$(".nav-toggle.close").css("top","1rem");
}
	
}else if(window.navigator.standalone === false){
	//SHOW ATH MESSAGE EVERY 30s
	setTimeout(function(){
		$("#js-ath").show();
	}, 30000); //30s
}else{
	//...
}

$("#js-ath").on("click", function(){
	$("#js-ath").hide();
});

});