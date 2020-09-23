<template>
    <div>
        <select @change="select" v-model="valueMonster">
            <option v-for="value in monsterName"> {{ value.name }} </option>
        </select>
        <!--<button @click="select"> Select </button>-->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                monsterName: this.$store.state.monsters,
                valueMonster: ' '
            }
        },
        methods: {
            select(){
              alert(this.monsterName.indexOf(this.valueMonster));
            },
        }
    }
</script>

<style scoped>

</style>