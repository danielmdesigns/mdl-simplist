$(document).ready(function(){
"use strict";

//HIDE PROMPTS ONLOAD
$("#js-modal").hide();
	
//REMOVE SHADOW & SHOW EMPTY IMG ON LIST IF NO LIST
function emptyState(){
	if($("ul li").length === 0){
		$(".emptyState").show();
		$("#list").css("box-shadow","");
	}else if($("ul li").length >= 1){
		$(".emptyState").hide();
		$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
	}else{
		$(".emptyState").hide();
		$("#list").css("box-shadow","0 0 20px 0 rgba(0,0,0,0.2)");
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
  $input.focus();
});

//HIDE PROMPT IF USER CANCELS
$("#btnCancel").on("click", function(){
	$("#js-modal").hide();
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
		$('nav').toggleClass('open');
		if($("nav").hasClass("open")){
			$(".logo, form").addClass("blur");
		}else{
			$(".logo, form").removeClass("blur");
		}
	});
});
	
//***** ADD TO HOMESCREEN *****//
$("#js-ath").hide();
//ALERT USER TO SAVE TO HOME SCREEN IF NOT VIEWING IN FULL SCREEN APP MODE
if(window.navigator.standalone === false){
	setTimeout(function(){
		$("#js-ath").show();
	}, 300000);
}else{
  //...
}
$("#js-ath").on("click", function(){
	$("#js-ath").hide();
});

});