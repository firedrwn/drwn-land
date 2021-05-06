<template>
  <div>
      <div class="bg-base-purple text-white">
          <div class="flex flex-col lg:mx-auto lg:max-w-screen-2xl py-10 sm:mx-10 md:flex-row md:justify-center">
              <div class="ml-8 md:w-2/3 lg:ml-32 md:mt-20 lg:mt-16 xl:w-1/3 xl:mt-32">
                  <div @click="english" id="algo" class="font-benzin-bold text-3xl lg:text-5xl xl:text-6xl ">Алгоритмы</div>
                  <div class="font-benzin-bold text-3xl lg:text-5xl xl:text-6xl ">покупок</div>
                  <div class="font-benzin-bold text-3xl lg:text-5xl xl:text-6xl ">от уровня</div>
                  <div class="font-ttnorms mt-5 text-lg xl:text-2xl">Только на практике можно понять </div>
                  <div class="font-ttnorms text-lg xl:text-2xl">применимость разных инструментов.</div>
                  <div class="font-ttnorms text-lg xl:text-2xl">Мы даем это — попробуй бесплатно!</div>
                  <div class="flex">
                    <div class="font-benzin-bold py-1 px-2 mt-8 xl:py-2 xl:px-3 xl:text-lg border-2 border-base-green rounded cursor-pointer">начать</div>
                  </div>
              </div>
              <div class="relative mt-5 md:mt-0">
                  <img class="greenCirc absolute w-42 left-16 top-10" src="/img/greenCirc.svg" alt="">
                  <img class="z-10" src="/img/macbook.png" alt="">
              </div>
          </div>
      </div>

      <div class="bg-deep-purple text-white">
          <div class="flex flex-col lg:mx-auto lg:max-w-screen-2xl py-10 :lg:py-16 sm:mx-10 md:flex-row md:justify-center">
              <div class="ml-8 md:w-2/3 lg:ml-20 md:mt-10 lg:mt-24 xl:mt-28 xl:pl-32 xl:mt-20 lg:pt-1 md:order-last">
                  <div class="font-benzin-bold text-3xl lg:text-4xl xl:text-4xl">Заложи основу</div>
                  <div class="font-benzin-bold text-3xl lg:text-4xl xl:text-4xl">за один день!</div>
                  <div class="flex align-middle mt-5 mb-3">
                    <img class="w-4" src="/img/greenDot.svg" alt="">
                    <div class="font-ttnorms ml-3 text-lg xl:text-2xl">Четкий алгоритм</div>
                  </div>
                  <div class="flex align-middle mb-3">
                    <img class="w-4" src="/img/greenDot.svg" alt="">
                    <div class="font-ttnorms ml-3 text-lg xl:text-2xl">Отработка в группе</div>
                  </div>
                  <div class="flex align-middle mb-3">
                    <img class="w-4" src="/img/greenDot.svg" alt="">
                    <div class="font-ttnorms ml-3 text-lg xl:text-2xl">Сообщество единомышленников</div>
                  </div>
                  <div class="flex">
                    <div class="font-benzin-bold py-2 px-3 mt-8 xl:py-2 xl:px-3 xl:text-lg bg-base-green text-deep-purple rounded-sm cursor-pointer">начать</div>
                  </div>
              </div>
              <div class="mt-5 md:mt-0 md:w-auto lg:mt-10 lg:mb-20">
                  <img class="w-64 ml-10 md:w-2/3 lg:w-3/4 xl:w-full" src="/img/tablet.png" alt="">
              </div>
          </div>
      </div>

      <div class="bg-base-purple text-white">
          <div class="flex flex-col lg:mx-auto lg:max-w-screen-2xl py-10">
              <div class="ml-8 my-10  font-benzin-bold text-3xl lg:text-4xl xl:text-4xl md:ml-28 xl:pl-4 text-center md:text-left">Этапы практики</div>
              <div class="mt-10 flex flex-col lg:flex-row  justify-center items-center lg:items-stretch">
                  <div class="flex flex-col justify-center w-80 items-center text-center bg-deep-purple rounded mx-8 md:mx-0 px-5 mb-10 md:w-96 h-130">
                      <div class="font-benzin-semibold text-xl bg-deep-purple rounded-full border border-base-green py-2 px-5 -mt-20">1</div>
                      <div class="h-48 px-10 lg:px-20 mt-16"><img src="/img/pic1.svg" alt=""></div>
                      <div class="font-benzin-semibold px-10 mb-3 lg:text-xl">Лекции и алгоритмы</div>
                      <div class="font-ttnorms px-2 mb-5">Короткое, понятное и пошаговое описание инструментов и способов их применения</div>
                  </div>
                  <div class="flex flex-col justify-center w-80 items-center text-center bg-deep-purple rounded mx-16 px-5 mb-10 md:w-96 h-130">
                      <div class="font-benzin-semibold text-xl bg-deep-purple rounded-full border border-base-green py-2 px-5 -mt-20">2</div>
                      <div class="h-48 px-10 mt-16"><img src="/img/pic2.svg" alt=""></div>
                      <div class="font-benzin-semibold px-10 mb-3 lg:text-xl lg:px-20">Работа в группе</div>
                      <div class="font-ttnorms px-2 mb-5">Практика с единомышленниками под руководством опытного наставника</div>
                  </div>
                  <div class="flex flex-col justify-center w-80 items-center text-center bg-deep-purple rounded mx-8 md:mx-0 px-5 mb-10 md:w-96 h-130">
                      <div class="font-benzin-semibold text-xl bg-deep-purple rounded-full border border-base-green py-2 px-5 -mt-20">3</div>
                      <div class="h-48 px-10 mt-16"><img src="/img/pic3.svg" alt=""></div>
                      <div class="font-benzin-semibold px-10 mb-3 lg:text-xl ">Разбор с модератором</div>
                      <div class="font-ttnorms px-2 mb-5">Ценные практические советы для увеличения прибыли</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
gsap.registerPlugin(TextPlugin);
export default {
    methods: {
        english: function() {
            let tl = gsap.timeline()
            tl.to("#algo", { duration: 1, text: "algorithms"})
        },
        greenCircAnim: function() {
            const tl = gsap.timeline()
            tl.set(".greenCirc", {scale: 0.2})
            tl.from(".greenCirc", {y: -200, duration: 2,  ease: "elastic.out( 1, 0.3)"})
            tl.to(".greenCirc", {scale: 1, duration: 0.5})
        }
    },
    mounted() {
        this.greenCircAnim()
    }
}
</script>

<style>

</style>