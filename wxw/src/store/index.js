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

        platform_page: '',

        // 左菜单
        leftMenus: [
            {
                name: '菜单',
                icon: 'el-icon-location',
                group: [
                    {
                        name: '采集箱',
                        sub: [
                            {
                                name: '采集箱1',
                            },
                            {
                                name: '采集箱2',
                            },
                            {
                                name: '采集箱3',
                            },
                        ],
                    },
                ],
            },
            {
                name: '产品',
                icon: 'el-icon-location',
                group: [
                    {
                        name: '产品箱',
                        sub: [
                            {
                                name: '产品箱1',
                            },
                            {
                                name: '产品箱2',
                            },
                            {
                                name: '产品箱3',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    mutations: {
        initState(state, value) {
            Object.assign(state, value);
        },
    },
    actions: {},
    modules: {},
});
