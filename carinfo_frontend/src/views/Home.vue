<template>
  <div class="slideshow">
    <vueper-slides autoplay>
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title" :content="slide.content" />
    </vueper-slides>
  </div>
</template>

<script>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {VueperSlides, VueperSlide},
  data:()=> ({
    slides: [
      {
        content: '여러분의 즐거운 드라이빙<br> 카인포가 함께하겠습니다!',
        // You can also provide a URL for the image.
        image: 'https://www.hyundai.com/content/hyundai/ww/data/news/data/2021/0000016609/image/newsroom-0112-photo-1-2021elantranline-1120x745.jpg'
      },
      {
        content: '정비 주기,<br> 손쉽고 빠르게! 확인하세요!',
        // You can also provide a URL for the image.
        image: 'https://images.unsplash.com/photo-1596986952526-3be237187071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1651&q=80'
      },
    ]
  })
}
</script>

<style>
.vueperslide__title {
  color: white;
  margin-bottom: 100px;
  margin-left:-70%;
}
.vueperslide__content {
  font-size: 3em;
  color: white;
  margin-left:0%;
}
.slideshow{
  margin-bottom: 2%;
}
</style>
