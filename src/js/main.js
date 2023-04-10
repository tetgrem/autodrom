// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


function fixedHeader() {
    const nav = document.querySelector('.header')
    const scroll = document.querySelector('.header__section')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed')
        scroll.classList.add('body_scroll')
    } else {
        nav.classList.remove('fixed')
        scroll.classList.remove('body_scroll')
    }
}
// window.addEventListener('scroll', fixedHeader)


const swiper = new Swiper('.whatcars-swiper', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next__btn',
        prevEl: '.prev__btn',

    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

      // Responsive breakpoints
      breakpoints: {
      // when window width is >= 320px
      300: {
          loop: true,
        slidesPerView: 1,
          slidesPerGroup: 1,

          // spaceBetween: 44
      },
          592: {
              slidesPerView: 2,
              slidesPerGroup:2,
              spaceBetween:24
          },
          900: {
              slidesPerView: 3,
              slidesPerGroup:3,
              spaceBetween:24
          },
      // when window width is >= 480px
      1270: {
        slidesPerView: 3,
          slidesPerGroup:3,
        spaceBetween: 24
      },
    }
});
