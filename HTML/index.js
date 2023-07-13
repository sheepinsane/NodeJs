$(document).ready(function() {
    // Smooth scroll to section on link click
    $('a.nav-link').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
    
    // Add/remove active class to Section 2 based on scroll position
    $(window).scroll(function() {
      channgeSatatus($('#section2'),'divSection1-roll');
    });
  });
  //funciton for 
  function channgeSatatus(obj,classname)
  {
      var pos1 = $(document).scrollTop();
      var pos2 = obj.offset().top - 200; // Adjust the offset value if needed
      if(pos1 == 0)
      {
        obj.removeClass(classname);
        return;
      }
      if(pos1 > pos2)
      {
          obj.addClass(classname);
          return;
      } 
      obj.removeClass(classname);
      return;
  }