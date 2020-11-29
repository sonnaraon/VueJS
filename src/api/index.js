import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
    deliveryUrl: 'https://apis.tracker.delivery/carriers/'
}

// 2. API 함수들을 정리
function fetchNewsList(){
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList(){
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList(){
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchUserInfo(name){
    return axios.get(`${config.baseUrl}user/${name}.json`);
}

function fetchItemList(id){
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

function searchCodeDelivery(){
    return axios.get(`${config.deliveryUrl}`);
}

function searchProductDelivery(track_id){
    return axios.get(`${config.deliveryUrl}kr.cjlogistics/tracks/${track_id}`);
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchItemList,
    fetchUserInfo,
    searchCodeDelivery,
    searchProductDelivery
}