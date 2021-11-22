import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
        languages: [
            {
                name: '简体中文',
                id: 'zh',
            },
            {
                name: 'English',
                id: 'en',
            },
        ],
        language: 'zh',
        token: '',
        path: '',
    },
    mutations: {
        initState(state, value) {
            Object.assign(state, value);
        },
    },
    actions: {},
    modules: {},
});
