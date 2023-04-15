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

// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion()


const swiper = new Swiper('.whatcars-swiper', {

    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },

    navigation: {
        nextEl: '.next__btn',
        prevEl: '.prev__btn',

    },

    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },


      breakpoints: {
      240: {
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
      1270: {
        slidesPerView: 3,
          slidesPerGroup:3,
        spaceBetween: 24
      },
    }
});

const swiper2 = new Swiper('.review__swiper', {

    pagination: {
        el: '.review__pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.next__btn',
        prevEl: '.prev__btn',

    },
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,




    breakpoints: {
        1356: {
            loop: true,
            slidesPerView: 3,

        },

    }
});


const swiper3 = new Swiper('.comparison__swiper', {

    navigation: {
        nextEl: '.next__btn',
        prevEl: '.prev__btn',
    },

    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});