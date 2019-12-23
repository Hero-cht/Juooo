<template>
  <div v-if="hotslist">
    <div class="div">
      <span>
        <h3>
          热门演出
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="
            class="img"
          />
        </h3>
      </span>
    </div>
    <swiper
      :options="{
      loop:false,
      pagination:{},
      spaceBetween: 0,
      slidesPerView: 3,

      freeMode: false,

    }"
      class="acto"
      swipername="acto"
    >
      <div class="swiper-slide hots" v-for="(item,index) in hotslist" :key="index">
        <img :src="item.pic" />
        <p>{{item.show_name}}</p>
      </div>
    </swiper>
  </div>
</template>
<script>
import Axios from 'axios'
import swiper from '@/components/Swiper'
// import vuex from 'vuex'
export default {
  data () {
    return {
      hotslist: null
    }
  },
  components: {
    swiper
  },
  mounted () {
    Axios({
      url: `https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.0.9&referer=2`
    }).then(res => {
      this.hotslist = res.data.data.hots_show_list
      console.log(this.hotslist.length)
    })
  }
}
</script>
<style scoped lang="scss">
.hots {
  width: 1.03rem;
  margin-left: 0.15rem;
  display: flex;
}
.hots img {
//   width: 1.03rem;
  height: 1.46rem;
//   display: inline-block
}
p {
  width: 1.07rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.div {
//   height: 0.23rem;
  width: 3.6rem;
  margin:0.30rem 0 0.15rem 0.16rem;
  .img {
    width: 0.2rem;
    height: 0.2rem;
    float: right;
  }
}
</style>
