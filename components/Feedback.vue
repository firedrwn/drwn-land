<template>
  <div>
      <div class="bg-base-purple text-white py-20">
          <div class="max-w-screen-2xl md:mx-auto">
              <div class="font-benzin-bold text-3xl lg:text-4xl xl:text-4xl text-center md:text-left md:ml-8 lg:ml-32">Отзывы</div>
              <div class="flex flex-col md:flex-row lg:mx-24 flex-wrap">
                <div v-for="(feedback, index) in feedbacks" :key="index" class="bg-deep-purple rounded m-5 p-5 flex flex-col w-80 xl:w-96 mx-auto">
                    <div class="flex items-center">
                        <div v-if="feedback.img" class="bg-base-purple font-benzin-semibold rounded-full h-16 w-16 flex items-center justify-center"><img :src="feedback.img" alt=""></div>
                        <div v-else class="bg-base-purple font-benzin-semibold rounded-full h-16 w-16 flex items-center justify-center">{{ feedback.initials }}</div>
                        <div class="font-benzin-semibold ml-4">{{ feedback.name }}</div>
                    </div>
                    <div v-if="!feedback.open" class="mt-5 font-ttnorms">{{ lessWords(feedback.text) }}</div>
                    <div v-else class="mt-5 font-ttnorms">{{ feedback.text }}</div>
                    <div @click="feedback.open = !feedback.open" class="mt-5 font-ttnorms text-base-green cursor-pointer">Читать отзыв полностью</div>
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
            feedbacks: [
                {
                    name: 'Юрий',
                    initials: 'UD',
                    img: '',
                    text: 'Спасибо каналу за материалы по стратегии! Подчерпнул очень много полезной информации и часть даже закрепил. ',
                    open: false,
                },
                {
                    name: 'Галина',
                    initials: 'GA',
                    img: '',
                    text: 'На данный момент я новичок на трейдерском пути с большим желанием учиться, а эти материалы — просто находка!',
                    open: false,
                },
                {
                    name: 'Айзада',
                    initials: 'AA',
                    img: '/img/ayzada.png',
                    text: 'Действительно, кладезь полезной информации для новичков. Помогает ориентироваться на рынке!',
                    open: false,
                },
            ]
        }
    },
    methods: {
        lessWords: function(text) {
            if (text.split(' ').length > 20) {
                let newText = text.split(' ')
                newText = newText.slice([0], [20])
                return newText.join(' ') + ' ...'
            } else {
                return text
            }
        }
    }
}
</script>

<style>

</style>