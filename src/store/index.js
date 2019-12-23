import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    looplist: [],
    seclist: []
  },
  mutations: {
    fun (state, payload) {
      state.looplist = payload
    },
    funs (state, payload) {
      state.seclist = payload
    }
  },
  actions: {
    now (store) {
      Axios({
        url: 'https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.9&referer=1'
      }).then(res => {
      // console.log(res.data);
        store.commit('fun', res.data.data.slide_list)
        store.commit('funs', res.data.data.classify_list)
      // this.looplist = res.data.data.slide_list
      // this.seclist = res.data.data.classify_list
      })
    }
  },

  modules: {

  }
})
