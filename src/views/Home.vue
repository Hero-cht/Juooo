<template>
    <div>
         <swiper :options="{
             autoplay: {
                 delay: 2500,
                 disableOnInteraction: false,
           }}" :key="looplist.length" class="actories" swipername="actories">
      <div class="swiper-slide" v-for="data in this.$store.state.looplist" :key="data.id">
        <img :src="data.image_url"/>
      </div>
         </swiper>
          <ul>
            <li v-for="sec in this.$store.state.seclist" :key="sec.id">
                <img :src="sec.pic">
                <p>{{sec.name}}</p>
            </li>
        </ul>
        <!-- <Section></Section> -->

        <detail></detail>
        <router-view></router-view>
    </div>
</template>
<script>
import swiper from '@/components/Swiper'
// import Axios from 'axios'
import detail from '@/views/Detail'
export default {
  components: {
    swiper,
    detail
    // Section
  },
  data () {
    return {
      looplist: [],
      seclist: []
    }
  },

  mounted () {
    // Axios({
    //     url:"https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.9&referer=2",
    // }).then(res=>{
    //     console.log(res.data);
    //     this.looplist = res.data.data.slide_list
    //     this.seclist = res.data.data.classify_list
    // })
    if (this.$store.state.looplist.length === 0) {
      this.$store.dispatch('now')
    } else {
      console.log('缓存')
    }
    if (this.$store.state.seclist.length === 0) {
      this.$store.dispatch('now')
    } else {

    }
  }
}
</script>
<style lang="scss" scoped>
  .swiper-slide{
    img{
      width:100%;
      height: 1.96rem;
    }
  }

   ul{
        display: flex;
        width:100%;
        height: 1.48rem;
        flex-wrap:wrap;
        li{
            width: 20%;
            height: 0.71rem;
            text-align: center;
            img{
                width:0.51rem ;
                height: 0.51rem;
            }

        }
    }
</style>
