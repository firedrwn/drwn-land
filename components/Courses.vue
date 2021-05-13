<template>
  <div>
      <div class="bg-base-purple">
          <div class="max-w-screen-2xl md:mx-auto text-white">
              <div class="py-20 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-16 justify-center lg:justify-start mx-5  md:mx-32">
                  <div v-for="(course, index) in courses" :key="index" class="border-2 max-w-md xl:flex-initial border-light-purple transition duration-300 hover:border-base-green rounded cursor-pointer">
                      <nuxt-link :to="course.link" class="flex flex-col items-stretch h-full justify-between">
                        <div class="text-light-purple font-benzin-semibold ml-5 mt-5 text-sm" v-html="course.type"></div>
                        <div class="font-benzin-bold uppercase text-xl mx-5" v-html="course.title"></div>
                        <div class="font-ttnorms mt-5 mb-10 mx-5" v-html="course.subtitle"></div>
                        <img :src="course.img" alt="" class="self-end filter sm:grayscale transition duration-300 hover:grayscale-0">
                      </nuxt-link>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            courses: [
                {
                    type: 'Вебинар',
                    title: 'риск- <br>менеджмент 2.0',
                    subtitle: 'Главный навык трейдера - управление риском.',
                    img: '/img/courses/1.png',
                    link: '#'
                },
                {
                    type: 'Вебинар',
                    title: 'Введение в&nbsp;опционы',
                    subtitle: 'Позволяет овладеть базовыми понятиями и&nbsp;принципами использования опционов',
                    img: '/img/courses/2.png',
                    link: '#'
                },
                {
                    type: 'Воркшоп&nbsp;/ вебинар',
                    title: 'Опционные стратегии',
                    subtitle: 'Огромные возможности управления риском и&nbsp;доходностью',
                    img: '/img/courses/3.png',
                    link: '#'
                },
                {
                    type: 'Воркшоп',
                    title: 'Волновой анализ',
                    subtitle: 'Что стоит за&nbsp;волнами? Как их&nbsp;рассчитывать? На&nbsp;каком рынке уместны?',
                    img: '/img/courses/4.png',
                    link: '#'
                },
                {
                    type: 'Воркшоп&nbsp;/ вебинар',
                    title: 'Торговля пробоя',
                    subtitle: 'Хороший способ получить мощное, быстрое и&nbsp;большое движение в&nbsp;активах.',
                    img: '/img/courses/5.png',
                    link: '#'
                },
                {
                    type: 'Воркшоп&nbsp;/ вебинар',
                    title: 'Фундаментальный анализ',
                    subtitle: 'Описание воркшопа или вебинара максимум в&nbsp;две строчки',
                    img: '/img/courses/6.png',
                    link: '#'
                },
                {
                    type: 'Воркшоп&nbsp;/ вебинар',
                    title: 'Анализ РЕ компании',
                    subtitle: 'Вебинар откроет простой секрет показателя',
                    img: '/img/courses/7.png',
                    link: '#'
                },
                {
                    type: 'Воркшоп&nbsp;/ вебинар',
                    title: 'Торговля на отчетах',
                    subtitle: 'Описание воркшопа или вебинара максимум в&nbsp;две строчки',
                    img: '/img/courses/8.png',
                    link: '#'
                },
            ]
        }
    }
}
</script>

<style>
.boxcard {
    min-width: 300px;
}
</style>