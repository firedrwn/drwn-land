<template>
  <div>
      <div class="bg-base-purple">
          <div class="max-w-screen-2xl md:mx-auto text-white">
              <div class="py-20 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center md:mx-24">
                  <div v-for="(course, index) in courses" :key="index" class="boxcard border-2 max-w-md flex-1 border-light-purple rounded mx-5 md:mx-8 mb-10 cursor-pointer">
                      <nuxt-link :to="course.link">
                        <div class="text-light-purple font-benzin-semibold ml-5 mt-5 text-sm">{{ course.type }}</div>
                        <div class="font-benzin-bold uppercase text-xl mx-5">{{ course.title }}</div>
                        <div class="font-ttnorms my-5 ml-5 text-sm">{{ course.subtitle }}</div>
                        <img :src="course.img" alt="" class="object-cover">
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
                    title: 'риск- менеджмент 2.0',
                    subtitle: 'Главный навык трейдера - управление риском.',
                    img: '/img/courses/art.png',
                    link: '#'
                },
                {
                    type: 'Вебинар',
                    title: 'риск- менеджмент 2.0',
                    subtitle: 'Главный навык трейдера - управление риском.',
                    img: '/img/courses/art.png',
                    link: '#'
                },
                {
                    type: 'Вебинар',
                    title: 'риск- менеджмент 2.0',
                    subtitle: 'Главный навык трейдера - управление риском.',
                    img: '/img/courses/art.png',
                    link: '#'
                },
                {
                    type: 'Вебинар',
                    title: 'риск- менеджмент 2.0',
                    subtitle: 'Главный навык трейдера - управление риском.',
                    img: '/img/courses/art.png',
                    link: '#'
                },
                {
                    type: 'Вебинар',
                    title: 'риск- менеджмент 2.0',
                    subtitle: 'Главный навык трейдера - управление риском.',
                    img: '/img/courses/art.png',
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