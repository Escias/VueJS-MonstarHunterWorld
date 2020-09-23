<template>
    <div>
        <p>{{ monsters }} </p>
    </div>
</template>

<script>

    export default {
        computed: {
            monsters() {
                return this.$store.state.monsters;
            },
        },
        created() {
            this.$store.dispatch('loadMonsters', '');
        },
    }
</script>

<style scoped>

</style>