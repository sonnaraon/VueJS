<template>
    <div>
        <p v-for="(user, i) in this.$store.state.news" v-bind:key="i">
            <a v-bind:href="user.url">
                {{ user.title }}
            </a>
            <small>
                {{ user.time_ago }} by
                <!-- <router-link v-bind:to="'/user/' + user.user">{{ user.user }}</router-link> -->
                <router-link v-bind:to="`/user/${user.user}`">{{ user.user }}</router-link>
            </small>
        </p>
    </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';
// import {} from '../store/index.js';

export default {
    // data(){
    //     return {
    //         users: []
    //     }
    // },
    created(){
        console.log('호출 전 : ' + this);
        this.$store.dispatch('FETCH_NEWS');
        // // 1
        // fetchNewsList()
        //     .then(response => {
        //         console.log('호출 후 : ' + this);
        //         // 2
        //         this.users = response.data;
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     });
    },
}
</script>

<style scoped>
    .news {
        display: flex;
        padding: 8px;
    }
</style>