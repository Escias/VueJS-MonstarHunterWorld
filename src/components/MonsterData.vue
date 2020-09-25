<template>
    <div>
        <select @change="select" v-model="valueMonster">
            <option value="0">Select a monster</option>
            <option v-for="(value, index) in monsters" :value="index+1" :key="index"> {{ value.name }} </option>
        </select><br/>
        <div class="filter">
            <p>Select data to display</p>
            <select v-model="specMonster">
                <option v-for="(item) in sMonster" :value="item">{{ item }}</option>
            </select>
        </div>
        <button @click="handleClick">Display Data</button>
        <p class="case">{{ displayFilter }}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                valueMonster: 0,
                specMonster: 'all',
                displayFilter: String,
                sMonster: {
                    all: 'all',
                    type: 'type',
                    species: 'species',
                    description: 'description',
                    elements: 'elements',
                    ailments: 'ailments',
                    locations: 'location',
                    resistances: 'resistances',
                    weaknesses: 'weaknesses',
                    rewards: 'rewards'
                }
            }
        },
        computed: {
            selectedMonster(){
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
                this.$store.dispatch('selectedMonsters', this.valueMonster);
            },
            handleClick(){
                if (this.specMonster === 'all') {
                    this.displayFilter = this.$store.state.selectedMonster
                } else if (this.specMonster === 'type'){
                    this.displayFilter = this.$store.state.selectedMonster.type
                } else if (this.specMonster === 'species'){
                    this.displayFilter = this.$store.state.selectedMonster.species
                } else if (this.specMonster === 'description'){
                    this.displayFilter = this.$store.state.selectedMonster.description
                } else if (this.specMonster === 'elements'){
                    this.displayFilter = this.$store.state.selectedMonster.elements
                } else if (this.specMonster === 'ailments'){
                    this.displayFilter = this.$store.state.selectedMonster.ailments
                } else if (this.specMonster === 'location'){
                    this.displayFilter = this.$store.state.selectedMonster.location
                } else if (this.specMonster === 'resistances'){
                    this.displayFilter = this.$store.state.selectedMonster.resistances
                } else if (this.specMonster === 'weaknesses'){
                    this.displayFilter = this.$store.state.selectedMonster.weaknesses
                } else if (this.specMonster === 'rewards'){
                    this.displayFilter = this.$store.state.selectedMonster.rewards
                }
            }
        }
    }
</script>

<style scoped>
    .case{
        border: black solid;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 1%;
        background-color: lightgrey;
    }
    .filter{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span{
        margin-left: 5%;
        margin-right: 5%;
    }
</style>