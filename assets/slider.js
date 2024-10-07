$(document).ready(function () {
  console.log("check");
  $("#slider-img").owlCarousel({
    items: 4, 
    loop: true, 
    margin: 5,
    autoplay: true, 
    autoplayTimeout: 3000, 
    responsive: {
      0: {
        items: 2 
      },
      600: {
        items: 2 
      },
      1000: {
        items: 1 
      }
    }
  });

  alert("this the test ")
});