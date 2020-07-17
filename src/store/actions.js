import {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemList }
from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
                // state.news = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                console.log(data);
                commit('SET_JOBS', data);
                // state.jobs = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ASK({ commit }) {
        fetchAskList({})
            .then(({ data }) => {
                commit('SET_ASK', data);
                // state.ask = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
            .then(({ data }) => {
                console.log(data);
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, id){
        fetchItemList(id)
            .then(({ data }) => {
                console.log(data);
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            });
    }
}