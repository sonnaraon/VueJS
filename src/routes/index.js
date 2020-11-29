import Vue from 'vue';
import VueRouter from 'vue-router';
import  NewsView from '../views/sample/NewsView.vue';
import AskView from '../views/sample/AskView.vue';
import JobsView from '../views/sample/JobsView.vue';
import UserView from '../views/sample/UserView.vue';
import ItemView from '../views/sample/ItemView.vue';
import SearchCodeDeliveryView from '../views/delivery/SearchCodeDeliveryView.vue';
import SearchProductDeliveryView from '../views/delivery/SearchProductDeliveryView.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'NewsView',
            component: NewsView
        },
        {
            path: '/ask',
            name: 'AskView',
            component: AskView
        },
        {
            path: '/jobs',
            name: 'JobsView',
            component: JobsView
        },
        {
            path: '/user/:id',
            name: 'UserView',
            component: UserView
        },
        {
            path: '/item/:id',
            name: 'ItemView',
            component: ItemView
        },
        {
            path: '/delivery',
            name: 'DelView',
            component: SearchCodeDeliveryView
        },
        {
            path: '/product',
            name: 'DelView',
            component: SearchProductDeliveryView
        },
    ]
})