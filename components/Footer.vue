<template>
  <div class="bg-base-purple py-5 md:py-10">
      <div class="flex flex-col sm:flex-row justify-between mx-auto max-w-screen-2xl">
        <div class="ml-5 md:ml-32">
            <img class="w-24 md:w-32" src="@/assets/img/logo.svg" alt="">
        </div>

        <div class="flex align-middle ml-5 mt-3 sm:mx-5 md:mr-32">
            <a class="mr-3 md:mr-5" v-for="img in images" :key="img"  href="">
                <img class="w-5 h-5" :src="img" alt="">
            </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                '/img/tg.svg',
                '/img/yt.svg',
                '/img/fb.svg',
                '/img/tw.svg',
                '/img/vk.svg',
            ]
        }
    }
}
</script>

<style>

</style>