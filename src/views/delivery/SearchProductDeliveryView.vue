<template>
    <div>
        <p v-for="(product, i) in this.$store.state.product" v-bind:key="i">
            <a>
                {{ product }}
            </a>
            <small>
                
            </small>
        </p>
    </div>
</template>

<script>
export default {

    created(){

        //const carrier_id = "kr.cjlogistics";
        const track_id = "356889409343";
        this.$store.dispatch('SEARCH_DEL', track_id);
        console.log(this.$store.state.product);
    },
}
</script>

<style scoped>
    .news {
        display: flex;
        padding: 8px;
    }
</style>