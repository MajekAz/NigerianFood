//alert("HELLO WORLD")

var dishMenu = document.querySelector('.Menu');
dishMenu.addEventListener("click", function(e){
     dishMenu.innerHTML = "Thank You For Your Patronage"; 
   
      
})



// Init Scrollspy
$('body').scrollspy({ target: '#main-nav' });

// Smooth Scrolling
$("#main-nav a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      window.location.hash = hash;
    });
  }
});




