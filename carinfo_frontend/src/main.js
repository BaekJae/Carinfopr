import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from "vue-axios";
import AxiosPlugin from 'vue-axios-cors';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

createApp(App)
    .use(VueAxios,axios)
    .use(store)
    .use(router)
    .mount('#app')
