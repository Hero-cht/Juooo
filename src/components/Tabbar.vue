<template>
    <nav>
        <ul>
            <router-link v-for="(data,index) in datalist" :key="index" :to="data.path"
            tag="li" activeClass="active">
                {{data.title}}
            </router-link>
        </ul>
    </nav>
</template>
<script>
export default {
  data () {
    return {
      datalist: [
        {
          path: '/home',
          title: '首页'
        },
        {
          path: '/cinema',
          title: '剧院'
        },
        {
          path: '/ticket',
          title: '票夹'
        },
        {
          path: '/center',
          title: '我的'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
     .active{
        color:red;
    }

    nav{
        position: fixed;
        bottom: 0;
        left:0;
        width:100%;
        height: 0.50rem;
        text-align: center;
        background: white;
        ul{
            display: flex;
            li{
                flex: 1;
                line-height: 0.50rem;
            }
        }
    }

</style>
