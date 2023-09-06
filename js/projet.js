console.log("hhhh")
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      // Responsive
      responsive: true,
      items : 5,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,2],
      itemsMobile : [479,1]
    });
   
  });