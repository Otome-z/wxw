import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import { post, send } from '@/request/http.js';
import $ from 'jquery';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

import './plugins/element.js';
import './assets/fonts/style.css';
import utils from './assets/js/utils.js';
import ElementLocale from 'element-ui/lib/locale';

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(vuescroll);
Vue.prototype.$post = post;
Vue.prototype.$send = send;
Vue.prototype.$ = $;
// Vue.prototype.utils = utils;

const messages = {
    zh: require('@/i18n/zh.json'),
    en: require('@/i18n/en.json'),
};

const i18n = new VueI18n({
    locale: store.state.language, // 设置地区
    messages, // 设置地区信息
});
ElementLocale.i18n((key, value) => i18n.t(key, value));

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');
