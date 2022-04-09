//JavaScript V 2.10.2
//JQuery V 3.6.0
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
});
  
$(document).scroll(function () {
    const y = $("html").scrollTop();
  
y > 300 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
});
