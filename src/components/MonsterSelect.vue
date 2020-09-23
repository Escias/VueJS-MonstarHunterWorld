<template>
    <div>
        <select @change="select" v-model="valueMonster">
            <option v-for="(value, index) in monsters" :value="index" :key="index"> {{ value.name }} </option>
        </select>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                monsterName: this.$store.state.monsters,
                valueMonster: Number
            }
        },
        computed: {
          monsters(){
              return this.$store.state.monsters
          }
        },
        methods: {
            select(){
                console.log(this.valueMonster);
            },
        }
    }
</script>

<style scoped>

</style>