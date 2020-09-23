<template>
    <div>
        <select @change="select" v-model="valueMonster">
            <option v-for="(value, index) in monsters" :value="index" :key="index"> {{ value.name }} </option>
        </select>
        <p>{{ selectMonster }} </p>
    </div>
</template>

<script>
    import MonsterSelect from "./MonsterSelect";

    export default {
        components: {
          MonsterSelect: MonsterSelect
        },
        data(){
            return {
                valueMonster: Number,
            }
        },
        computed: {
            selectMonster(){
                return this.$store.state.selectedMonster
            },
            monsters() {
                return this.$store.state.monsters;
            },
        },
        created() {
            this.$store.dispatch('loadMonsters');
        },
        methods: {
            select(){
                this.$store.dispatch('selectedMonsters', this.valueMonster+1);
            },
        }
    }
</script>

<style scoped>

</style>