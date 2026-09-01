$(".themeButton").on("click", function() {
  
    if( $( "body" ).hasClass( "dark" )) {
      $("h1").removeClass("dark");
      $("h2").removeClass("dark");
      $("h3").removeClass("dark");
      $("body").removeClass("dark");
      $(".navbar").removeClass("dark");
      $(".page").removeClass("dark");
      $(".item").removeClass("dark");
      $(".card").removeClass("dark");
      $(".aboutme").removeClass("dark");
      $(".topMessage").removeClass("dark");
      
      $(".themeButton").text("🌕");
      
    } else {  
      $("body").addClass("dark");
      $("h1").addClass("dark");
      $("h2").addClass("dark");
      $("h3").addClass("dark");
      $(".navbar").addClass("dark");
      $(".page").addClass("dark");
      $(".item").addClass("dark");
      $(".card").addClass("dark");
      $(".aboutme").addClass("dark");
      $(".topMessage").addClass("dark");
      $(".themeButton").text("🌑");
    }
  });
  
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})