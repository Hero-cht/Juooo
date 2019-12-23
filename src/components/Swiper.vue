<template>
  <div class="swiper-container">
              <div class="swiper-wrapper">
                <slot></slot>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>

  </div>
</template>
<script>
import Swiper from 'swiper' // swiper js文件
import 'swiper/css/swiper.min.css' // swiper css
export default {
  mounted () {
    var swiperel = {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }

    }
    new Swiper('.' + this.swipername, { ...swiperel, ...this.options })
  },
  props: ['options', 'swipername']
}
</script>
