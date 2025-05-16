$(".themeButton").on("click", function() {
  
    if( $( "body" ).hasClass( "dark" )) {
      $("h1").removeClass("dark");
      $("h2").removeClass("dark");
      $("body").removeClass("dark");
      $(".navbar").removeClass("dark");
      $(".page").removeClass("dark");
      $(".item").removeClass("dark");
      $(".topMessage").removeClass("dark");
      
      $(".themeButton").text("🌕");
      
    } else {  
      $("body").addClass("dark");
      $("h1").addClass("dark");
      $("h2").addClass("dark");
      $(".navbar").addClass("dark");
      $(".page").addClass("dark");
      $(".item").addClass("dark");
      $(".topMessage").addClass("dark");
      
      $(".themeButton").text("🌑");
    }
  });
  