import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPc:true,  //是否为PC
    loginInfo:{ //登录信息
      account_name: "",
      head_image: "",
      pwd: "",
      token: "",
      tokenTime: "",
      uid: ""
    }
  },
  mutations: {
    'CHANGE_STATE'(state,payload){
        state.isPc = payload
    },
    'SAVE_LOGIN'(state,payload){
      state.loginInfo = payload
    },
    'DEL_LOGIN'(state,payload){
      state.loginInfo = payload
    },
  },
  actions: {

  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key),
      },
    }),
  ],
})
