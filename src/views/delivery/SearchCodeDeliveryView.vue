<template>
    <div>
        <p v-for="(delivery, i) in this.$store.state.delivery" v-bind:key="i">
            <a>
                {{ delivery.id }} ||
            </a>
            <small>
                {{ delivery.name }} || {{ delivery.tel }}
            </small>
        </p>
    </div>
</template>

<script>
export default {

    created(){
        this.$store.dispatch('FETCH_DEL');
        console.log(this.$store.state.delivery);
    },
}
</script>

<style scoped>
    .news {
        display: flex;
        padding: 8px;
    }
</style>