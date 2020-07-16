import Vue from 'vue';
import VueRouter from 'vue-router';
import  NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

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
            path: '/user',
            name: 'UserView',
            component: UserView
        },
        {
            path: '/item',
            name: 'ItemView',
            component: ItemView
        },
    ]
})