(function( $, window, undefined ) {

$(".faqq").click(function(e){ e.preventDefault(); var faqa=$(e.currentTarget).next('.faqa'); $(faqa).toggle()});
$(".artq").click(function(e){ e.preventDefault(); var arta=$(e.currentTarget).next('.arta'); $(arta).toggle()});

  // Menu
  $("#slide").mouseover(function(){

        // $("#sidebar,#slide,#fade").addClass("slide");
        $("#sidebar,#fade").addClass("slide");
        $("#open").hide();
        $("#search").hide();
        // $("#menu_close").show();
        $("#slide").hide();
  });

    $("#slide").click(function(){

        // $("#sidebar,#slide,#fade").addClass("slide");
        $("#sidebar,#fade").addClass("slide");
        $("#open").hide();
        $("#search").hide();
        // $("#menu_close").show();
        $("#slide").hide();
  });

  $("#fade").click(function(){

    // $("#sidebar,#slide,#fade").removeClass("slide");
    $("#sidebar,#fade").removeClass("slide");
    $("#open").show();
    $("#search").show();
    $("#slide").show();
    // $("#menu_close").hide();
  });

  //   $("#search").on('click', function() {
  //   $('.search-wrapper').toggleClass('active');
  //   $(".search-form").toggleClass('active');
  //   $(".search-form").find('input').focus();
  //   $('body').toggleClass('search-overlay');
  //   $('.search-field').simpleJekyllSearch();
  // });
  // 
  // 

  

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
          if($("#sidebar,#fade").hasClass("slide")){
                    $("#sidebar,#fade").removeClass("slide");
    $("#open").show();
    $("#search").show();
    $("#slide").show();
                  }
    }
});

  // Search
  var bs = {
    close: $(".icon-remove-sign"),
    searchform: $(".search-form"),
    canvas: $("body"),
    dothis: $('.dosearch')
  };

  bs.dothis.on('click', function(e) {
    console.log(e);
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
  smoothScroll.init({
    updateURL: true
  })
})( Zepto, window );