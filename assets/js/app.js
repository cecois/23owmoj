!function(e,s,a){e(".faqq").click(function(s){s.preventDefault();var a=e(s.currentTarget).next(".faqa");e(a).toggle()}),e(".artq").click(function(s){s.preventDefault();var a=e(s.currentTarget).next(".arta");e(a).toggle()}),e("#slide").mouseover(function(){e("#sidebar,#fade").addClass("slide"),e("#open").hide(),e("#search").hide(),e("#slide").hide()}),e("#slide").click(function(){e("#sidebar,#fade").addClass("slide"),e("#open").hide(),e("#search").hide(),e("#slide").hide()}),e("#fade").click(function(){e("#sidebar,#fade").removeClass("slide"),e("#open").show(),e("#search").show(),e("#slide").show()}),e(document).keyup(function(s){27==s.keyCode&&e("#sidebar,#fade").hasClass("slide")&&(e("#sidebar,#fade").removeClass("slide"),e("#open").show(),e("#search").show(),e("#slide").show())});var o={close:e(".icon-remove-sign"),searchform:e(".search-form"),canvas:e("body"),dothis:e(".dosearch")};o.dothis.on("click",function(s){console.log(s),e(".search-wrapper").toggleClass("active"),o.searchform.toggleClass("active"),o.searchform.find("input").focus(),o.canvas.toggleClass("search-overlay"),e(".search-field").simpleJekyllSearch()}),o.close.on("click",function(){e(".search-wrapper").toggleClass("active"),o.searchform.toggleClass("active"),o.canvas.removeClass("search-overlay")}),smoothScroll.init({updateURL:!0})}(Zepto,window);