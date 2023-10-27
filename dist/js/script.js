$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"> <img src="icons/left.svg"> </button>',
      nextArrow: '<button type="button" class="slick-next"> <img src="icons/right.svg"> </button>',
      responsive: [
         {
            breakpoint: 991,
            settings: {
               dots: true,
               arrows: false,
            }
         }
      ]
   });

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });


   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         })
      });
   };
   toggleSlide('.catalog-item__link');
   toggleSlide('.catalog-item__back');

   //Modal

   $('[data-modal="consultation"]').on('click', function () {
      $('.overlay, #consultation').fadeIn('slow');
   });

   $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
   });

   $('.button_mini').on('click', function () {
      $('.overlay, #order').fadeIn('slow');
   });

   $('.button_mini').each(function (i) {
      $(this).on('click', function () {
         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
         $('.overlay, #order').fadeIn('slow');
      });
   });




   $(window).on('click', function (e) {
      if (e.target.classList.contains('overlay')) {
         $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      }
   });
   $(document).keyup(function (e) {
      if (e.keyCode === 27) {   // esc
         $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      }
   });

});
