$(document).ready(function(){
"use strict";
/* tool bar */
$(".closelink").on("click", function(){
	$(".topbar-wrap").slideUp();
});

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

/*remove ripple on smaller screens after animatino runs*/
if($(window).width() <= 766){
  $(".btn-color").on(
	"transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
	function() {
	  $(this).removeClass("ripple");
	  window.location.reload();
	}
  );
}

});