import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Login from '../components/LoginPage/Login.vue';

import Home from '../components/Home/Home.vue';
import HomePage from '../components/Home/HomePage.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        component: Login,
        children: [{ path: '/login', component: Login }],
    },
    {
        path: '/home',
        component: Home,
        redirect: '/HomePage',
        children: [
            {
                path: '/HomePage',
                component: HomePage,
                meta: {
                    requireAuth: true,
                },
            },
        ],
        meta: {
            requireAuth: true,
        },
    },
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    let islogin = store.state.isLogin;
    islogin = true;
    // requireAuth:可以在路由元信息指定哪些页面需要登录权限
    if (to.meta.requireAuth) {
        if (islogin) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export default router;
