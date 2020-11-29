<template>
    <div>
        <p v-for="(item, i) in fetchedAsk" v-bind:key="i">
            <router-link v-bind:to="`item/${item.id}`"> {{ item.title }} </router-link>
            <small>
                {{ item.time_ago }} by {{ item.user }}
            </small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        // #3
        ...mapGetters([
            'fetchedAsk'
        ])
        // #2
        // ...mapState({
        //     fatchedask: state => state.ask
        // }),
        // #1
        // ask(){
        //     return this.$store.state.ask;
        // }
    },
    created(){
        console.log('AskView 호출 전 : ' + this);
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style scoped>
    .news {
        display: flex;
        padding: 8px;
    }
</style>