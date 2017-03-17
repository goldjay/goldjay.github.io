

$(function() {
  $('progress').each(function() {
    var max = $(this).val();
    console.log("WOAH!");
    //$(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
			});
});

$(document).ready(function(){
    $(".fa-arrow-down").click(function(){
      console.log("YO");
        $("form").toggle();
    });
});
