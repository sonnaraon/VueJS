<template>
    <div>
        <p v-for="(job, i) in this.$store.state.jobs" v-bind:key="i">
            <a v-bind:href="job.url">
                {{ job.title }}
            </a>
            <small>
                {{ job.time_ago }}, {{ job.domain }}
            </small>
        </p>
    </div>
</template>

<script>

export default {
    created(){
        console.log('JobsView 호출 전 : ' + this);
        this.$store.dispatch('FETCH_JOBS');
    },
}
</script>

<style scoped>
    .news {
        display: flex;
        padding: 8px;
    }
</style>