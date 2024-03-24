
$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
    },
    options
  );

  var thisElement = $(this);


document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.contenedorbarra');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('active'); 
            $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
        } else {
            section.classList.remove('active');
        }
    });
});

  
};

$("#number1").jQuerySimpleCounter({ end: 12, duration: 3000 });
$("#number2").jQuerySimpleCounter({ end: 55, duration: 3000 });
$("#number3").jQuerySimpleCounter({ end: 359, duration: 2000 });
$("#number4").jQuerySimpleCounter({ end: 246, duration: 2500 });