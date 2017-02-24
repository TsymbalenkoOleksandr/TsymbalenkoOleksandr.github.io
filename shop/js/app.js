'use strict';

$( function() {
  var entity = $(".methods fieldset > div:nth-child(3)");
  var inn = $(".methods fieldset > div:nth-child(4)");
  var switcher = $(".switch > div");
  var list = $(".nav ul>li");

  var handler = function(e) {
    e.preventDefault;
    $(list).toggleClass("dropdown");
  }

  $(".nav").on("mouseenter", handler);
  $(".nav").on("mouseleave", handler);

  $("#delivery").selectmenu({});

  $("#payment").selectmenu({});

  $(".spinner")
  .spinner({
    icons: { down: "ui-icon-minus", up: " ui-icon-plus" },
    min: 0,
    max: 9
  })

  $(switcher).on("click", function(e) {
    e.preventDefault();
    if($(this).hasClass("entity")) {
        $(entity).removeClass("faded");
        $(inn).removeClass("faded");
    } else {
      $(entity).addClass("faded");
      $(inn).addClass("faded");
    }
    $(switcher).removeClass("active");
    $(this).addClass("active");
  });
});