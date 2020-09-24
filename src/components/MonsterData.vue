<template>
    <div>
        <select @change="select" v-model="valueMonster">
            <option selected="All Monsters" :value="0">All monsters</option>
            <option v-for="(value, index) in monsters" :value="index+1" :key="index"> {{ value.name }} </option>
        </select><br/>
        <div class="case">
            <select @change="handleClick" v-model="specMonster">
                <option v-for="(item) in sMonster" :value="item">{{ item }}</option>
            </select>
        </div>
        <p>{{ displayFilter }}</p>
    </div>
</template>

<script>
    import TypeFilter from "./TypeFilter";

    export default {
        components: {
            TypeFilter: TypeFilter
        },
        data(){
            return {
                valueMonster: 0,
                specMonster: String,
                displayFilter: String,
                tabMonster: this.$store.state.selectedMonster,
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
                    this.displayFilter = this.tabMonster
                }else if (this.specMonster === 'type'){
                    this.displayFilter = this.tabMonster.type
                }else if (this.specMonster === 'species'){
                    this.displayFilter = this.tabMonster.species
                }else if (this.specMonster === 'description'){
                    this.displayFilter = this.tabMonster.description
                }else if (this.specMonster === 'elements'){
                    this.displayFilter = this.tabMonster.elements
                }else if (this.specMonster === 'ailments'){
                    this.displayFilter = this.tabMonster.ailments
                }else if (this.specMonster === 'location'){
                    this.displayFilter = this.tabMonster.location
                }else if (this.specMonster === 'resistances'){
                    this.displayFilter = this.tabMonster.resistances
                }else if (this.specMonster === 'weaknesses'){
                    this.displayFilter = this.tabMonster.weaknesses
                }else if (this.specMonster === 'rewards'){
                    this.displayFilter = this.tabMonster.rewards
                }
                console.log('test')
                console.log(this.specMonster)
                console.log(this.displayFilter)
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

    .check{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .checkbox{
        display: flex;
        align-items: center;
    }

    span{
        margin-left: 5%;
        margin-right: 5%;
    }
</style>