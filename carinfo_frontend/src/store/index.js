import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state:{
    Login: false,
    currentUserinfo:{
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
      car: '',
      drivedistance: 0,
    }
  },
  mutations: {
    Changestate(state) {
      state.Login = !state.Login
    },
  },
  actions: {
  },
  modules: {
  }
})
