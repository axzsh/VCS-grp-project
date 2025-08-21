(function ($) {
  "use strict";

  // NAVBAR
  $('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
  });

  // Remove or comment out the Vegas slideshow initialization
  /*
  $(function() {
    $('.hero-slides').vegas({
        slides: [
            { src: 'images/slides/sincere-laugh-showing-picture-smartphone-casual-meeting-with-best-friends-restaurant-terrace.jpg' },
            { src: 'images/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpg' },
            { src: 'images/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg' }
        ],
        timer: false,
        animation: 'kenburns',
    });
  });
  */

  // CUSTOM LINK
  $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 60;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
  });

  // Timeline review slider for testimonials section
  (function () {
    const reviews = document.querySelectorAll('.timeline-review');
    const dots = document.querySelectorAll('.timeline-dots .dot');
    if (reviews.length && dots.length) {
      let idx = 0, timer;
      function showReview(i) {
        reviews.forEach((el, j) => el.classList.toggle('active', j === i));
        dots.forEach((el, j) => el.classList.toggle('active', j === i));
        idx = i;
      }
      function nextReview() {
        showReview((idx + 1) % reviews.length);
      }
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          showReview(i);
          resetTimer();
        });
      });
      function resetTimer() {
        clearInterval(timer);
        timer = setInterval(nextReview, 5000);
      }
      showReview(0);
      resetTimer();
    }
  })();

})(window.jQuery);


