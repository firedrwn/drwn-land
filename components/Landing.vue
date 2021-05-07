<template>
  <div>
      <div class="bg-base-purple text-white">
          <div class="flex flex-col lg:mx-auto lg:max-w-screen-2xl py-10 sm:mx-10 md:flex-row md:justify-center">
              <div id="algo-text" class="ml-8 md:w-2/3 lg:ml-32 md:mt-20 lg:mt-16 xl:w-1/3 xl:mt-32">
                  <div @click="english" id="algo" class="font-benzin-bold text-3xl lg:text-5xl xl:text-6xl ">Алгоритмы</div>
                  <div class="font-benzin-bold text-3xl lg:text-5xl xl:text-6xl ">покупок</div>
                  <div class="font-benzin-bold text-3xl lg:text-5xl xl:text-6xl ">от уровня</div>
                  <div class="font-ttnorms mt-5 sm:text-lg xl:text-2xl">Только на практике можно понять </div>
                  <div class="font-ttnorms sm:text-lg xl:text-2xl">применимость разных инструментов.</div>
                  <div class="font-ttnorms sm:text-lg xl:text-2xl">Мы даем это — попробуй бесплатно!</div>
                  <div class="flex">
                    <div class="font-benzin-bold py-1 px-2 mt-8 xl:py-2 xl:px-3 xl:text-lg border-2 border-base-green rounded cursor-pointer transition duration-300 hover:bg-base-green hover:text-deep-purple uppercase">начать</div>
                  </div>
              </div>
              <div class="relative mt-5 md:mt-0">
                  <img class="greenCirc hidden lg:inline absolute w-42 left-16 top-10" src="/img/greenCirc.svg" alt="">
                  <img class="z-10 macbook" src="/img/macbook.png" alt="">
              </div>
          </div>
      </div>

      <div class="bg-deep-purple text-white">
          <div id="arrowSection" class="flex flex-col lg:mx-auto lg:max-w-screen-2xl py-10 lg:py-28 sm:mx-10 md:flex-row md:justify-center">
              <div class="ml-8 md:w-2/3 lg:ml-20 md:mt-10 lg:mt-24 xl:mt-28 xl:pl-32 xl:mt-20 lg:pt-1 md:order-last">
                  <div id="stag" class="font-benzin-bold text-3xl lg:text-4xl xl:text-4xl">Заложи основу</div>
                  <div id="stag" class="font-benzin-bold text-3xl lg:text-4xl xl:text-4xl xl:mb-10">за один день!</div>
                  <div id="stag" class="flex align-middle mt-5 mb-3">
                    <img class="w-4" src="/img/greenDot.svg" alt="">
                    <div class="font-ttnorms ml-3 text-lg xl:text-2xl">Четкий алгоритм</div>
                  </div>
                  <div id="stag" class="flex align-middle mb-3">
                    <img class="w-4" src="/img/greenDot.svg" alt="">
                    <div class="font-ttnorms ml-3 text-lg xl:text-2xl">Отработка в группе</div>
                  </div>
                  <div id="stag" class="flex align-middle mb-3">
                    <img class="w-4" src="/img/greenDot.svg" alt="">
                    <div class="font-ttnorms ml-3 text-lg xl:text-2xl">Сообщество единомышленников</div>
                  </div>
                  <div id="stag" class="flex">
                    <div class="font-benzin-bold py-2 px-3 mt-8 xl:py-2 xl:px-3 xl:text-lg border-2 border-base-green text-white transition duration-300 hover:bg-base-green hover:text-deep-purple rounded-sm cursor-pointer uppercase">начать</div>
                  </div>
              </div>
              <div class="mt-5 md:mt-12 md:w-2/3 lg:mt-28 lg:mb-20">
                  <div class="relative mx-8">

                    <svg class="absolute -top-32 left-5 xl:-top-28 xl:-left-5 hidden lg:inline md:w-1/3" width="274" height="274" viewBox="0 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrows">
                    <path id="ar2" d="M264 12C264 10.8954 263.105 9.99999 262 9.99999L244 9.99999C242.895 9.99999 242 10.8954 242 12C242 13.1046 242.895 14 244 14L260 14L260 30C260 31.1046 260.895 32 262 32C263.105 32 264 31.1046 264 30L264 12ZM12.4142 264.414L263.414 13.4142L260.586 10.5858L9.58579 261.586L12.4142 264.414Z" fill="#00FF4A"/>
                    <path id="ar1" d="M172 49C172 47.8954 171.105 47 170 47H152C150.895 47 150 47.8954 150 49C150 50.1046 150.895 51 152 51H168V67C168 68.1046 168.895 69 170 69C171.105 69 172 68.1046 172 67V49ZM54.4142 167.414L171.414 50.4142L168.586 47.5858L51.5858 164.586L54.4142 167.414Z" fill="#00FF4A"/>
                    <path id="ar3" d="M264 69C264 67.8954 263.105 67 262 67H244C242.895 67 242 67.8954 242 69C242 70.1046 242.895 71 244 71H260V87C260 88.1046 260.895 89 262 89C263.105 89 264 88.1046 264 87V69ZM146.414 187.414L263.414 70.4142L260.586 67.5858L143.586 184.586L146.414 187.414Z" fill="#00FF4A"/>
                    </g>
                    </svg>

                    <img id="tablet" class="lg:pl-24" src="/img/tablet.png" alt="">
                  </div>
              </div>
          </div>
      </div>

      <div class="bg-base-purple text-white">
          <div class="flex flex-col lg:mx-auto lg:max-w-screen-2xl py-10">
              <div id="practice" class="ml-8 my-10  font-benzin-bold text-3xl lg:text-4xl xl:text-4xl md:ml-28 xl:pl-4 text-center md:text-left">Этапы практики</div>
              <div class="mt-10 flex flex-col lg:flex-row  justify-center items-center lg:items-stretch">
                  <div id="card1" class="flex flex-col justify-center w-80 items-center text-center bg-deep-purple rounded mx-8 md:mx-0 px-5 mb-10 md:w-96 h-130">
                      <div class="py-2 px-5 -mt-20">
                          <img src="/img/1.svg" alt="">
                      </div>
                      <div class="h-48 px-10 lg:px-20 mt-16"><img src="/img/pic1.svg" alt=""></div>
                      <div class="font-benzin-semibold px-10 mb-3 lg:text-xl">Лекции и&nbsp;алгоритмы</div>
                      <div class="font-ttnorms px-2 mb-5">Короткое, понятное и&nbsp;пошаговое описание инструментов и&nbsp;способов их&nbsp;применения</div>
                  </div>
                  <div id="card2" class="flex flex-col justify-center w-80 items-center text-center bg-deep-purple rounded mx-16 px-5 mb-10 md:w-96 h-130">
                      <div class="py-2 px-5 -mt-20">
                          <img src="/img/2.svg" alt="">
                      </div>
                      <div class="h-48 px-10 mt-16"><img src="/img/pic2.svg" alt=""></div>
                      <div class="font-benzin-semibold px-10 mb-3 lg:text-xl lg:px-20">Работа в&nbsp;группе</div>
                      <div class="font-ttnorms px-2 mb-5">Практика с&nbsp;единомышленниками под руководством опытного наставника</div>
                  </div>
                  <div id="card3" class="flex flex-col justify-center w-80 items-center text-center bg-deep-purple rounded mx-8 md:mx-0 px-5 mb-10 md:w-96 h-130">
                      <div class="py-2 px-5 -mt-20">
                          <img src="/img/3.svg" alt="">
                      </div>
                      <div class="h-48 px-10 mt-16"><img src="/img/pic3.svg" alt=""></div>
                      <div class="font-benzin-semibold px-10 mb-3 lg:text-xl ">Разбор с&nbsp;модератором</div>
                      <div class="font-ttnorms px-2 mb-5">Ценные практические советы для увеличения прибыли</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
export default {
    methods: {
        english: function() {
            let tl = gsap.timeline()
            tl.to("#algo", { duration: 1, text: "algorithms"})
        },
        greenCircAnim: function() {
            const tl = gsap.timeline({ delay: .3})
            const tl1 = gsap.timeline({ repeat: -1 })
            const tl2 = gsap.timeline({ delay: .3})
            const tl3 = gsap.timeline({ delay: .3})

            tl.set(".greenCirc", {scale: 0.2})
            tl.from(".greenCirc", {y: -300, duration: .7, opacity: 0,  ease: "back.out(1.2)", delay: 1.5})
            tl.to(".greenCirc", {scale: 1, duration: 1, ease: "elastic.out( 1, 0.3)"}, "-=.3")

            tl1.to(".greenCirc", { scale: 1.1, duration: .15, ease: "back.out( 1.2 )", delay: 5 })
            tl1.to(".greenCirc", { scale: 1, duration: .15, ease: "back.out( 1.2 )" })

            tl2.set(".macbook", {zIndex: 100})
            tl2.from(".macbook", {x: 200, opacity: 0, duration: 1})

            tl3.from("#algo-text", {x: -200, opacity: 0, duration: 1})
        },
        arrowAnim: function() {
            const tl = gsap.timeline({ ease: "expo.out", delay: .5, scrollTrigger: { trigger: "#arrowSection", start: "top center-=100"} })
            const tl2 = gsap.timeline({ ease: "expo.out" , scrollTrigger: { trigger: "#arrowSection", start: "top center-=100"}})
            const tl3 = gsap.timeline({ ease: "expo.out" , scrollTrigger: { trigger: "#arrowSection", start: "top center-=100"}})

            tl.from("#ar2", { x: -100, y: 100, duration: .5, opacity: 0 })
            tl.from("#ar1", { x: -100, y: 100, duration: .5, opacity: 0 }, "-=.33")
            tl.from("#ar3", { x: -100, y: 100, duration: .5, opacity: 0 }, "-=.33")

            tl2.set("#tablet", {zIndex: 100})
            tl2.from("#tablet", { scale: 0, duration: .5, opacity: 0 })

            tl3.from("#stag", { y: -20, stagger: 0.2, opacity: 0, delay: .7 })
        },
        cardAnim: function() {
            const tl = gsap.timeline({ ease: "expo.out", scrollTrigger: { trigger: "#practice", start: "top center" } })
            const tl2 = gsap.timeline({ ease: "expo.out", scrollTrigger: { trigger: "#practice", start: "top center" }})

            tl.from("#card1", { x: -200, duration: .5, opacity: 0 })
            tl.from("#card2", { x: -300, duration: .5, opacity: 0 }, "-=.3")
            tl.from("#card3", { x: -400, duration: .5, opacity: 0 }, "-=.3")

            tl2.from("#practice", { opacity: 0, duration: 1 })
        }
    },
    mounted() {
        this.greenCircAnim()
        this.arrowAnim()
        this.cardAnim()
    }
}
</script>

<style>

</style>