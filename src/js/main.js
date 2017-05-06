(function( $, window, undefined ) {

  // Menu
  $("#slide").mouseover(function(){
    $("#sidebar,#slide,#fade").addClass("slide");
    $("#open").hide();
    $("#search").hide();
    $("#close").show();
  });

  $("#fade").click(function(){
    $("#sidebar,#slide,#fade").removeClass("slide");
    $("#open").show();
    $("#search").show();
    $("#close").hide();
  });

  // Search
  var bs = {
    close: $(".icon-remove-sign"),
    searchform: $(".search-form"),
    canvas: $("body"),
    dothis: $('.dosearch')
  };

  bs.dothis.on('click', function() {
    $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    bs.searchform.find('input').focus();
    bs.canvas.toggleClass('search-overlay');
    $('.search-field').simpleJekyllSearch();
  });

  bs.close.on('click', function() {
    $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    bs.canvas.removeClass('search-overlay');
  });

  // Scroll
//   smoothScroll.init({
//     updateURL: true
//   })
// })( Zepto, window );