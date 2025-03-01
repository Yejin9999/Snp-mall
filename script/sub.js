//weekbest 아이템 스와이퍼==========
const weekSlide = new Swiper('.weekbest_swiper',{
    slidesPerView:1,
    spaceBetween:28,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
    navigation: {
        nextEl: ".weekbest_wrap .swiper-scrollbtn .next",
        prevEl: ".weekbest_wrap .swiper-scrollbtn .prev",
      },
})

//monthbest 아이템 스와이퍼==========
const monthSlide = new Swiper('.monthbest_swiper',{
    slidesPerView:1,
    spaceBetween:28,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    loop:true,
    speed:2000,
    navigation: {
        nextEl: ".monthbest__wrap .swiper-scrollbtn .next",
        prevEl: ".monthbest__wrap .swiper-scrollbtn .prev",
      },
})