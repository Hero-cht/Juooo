<template>
  <div>
    <tabbar></tabbar>
    <!-- 路由容器 -->

    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar'
export default {
  components: {
    tabbar
  }
}

</script>

<style lang="scss">

    *{
      margin:0;
      padding:0;
    }
    html,body{
      height: 100%;
      font-size: 0.15rem;
      overflow: hidden;
    }
    ul{
      list-style: none;
    }
</style>
