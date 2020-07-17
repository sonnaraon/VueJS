import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

    // local setting
    // mutations: {
    //     SET_NEWS(state, news) {
    //         state.news = news;
    //     },
    //     SET_JOBS(state, jobs) {
    //         state.jobs = jobs;
    //     },
    //     SET_ASK(state, ask) {
    //         state.ask = ask;
    //     }
    // },
    // actions: {
    //     FETCH_NEWS(context) {
    //         fetchNewsList()
    //             .then(response => {
    //                 console.log(response.data);
    //                 context.commit('SET_NEWS', response.data);
    //                 console.log('호출 후 : ' + this);
    //                 // state.news = response.data;
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     },
    //     FETCH_JOBS({ commit }) {
    //         fetchJobsList()
    //             .then(({ data }) => {
    //                 console.log(data);
    //                 commit('SET_JOBS', data);
    //                 console.log('호출 후 : ' + this);
    //                 // state.jobs = response.data;
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     },
    //     FETCH_ASK({ commit }) {
    //         fetchAskList({})
    //             .then(({ data }) => {
    //                 commit('SET_ASK', data);
    //                 // state.ask = response.data;
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     },
    // }
});