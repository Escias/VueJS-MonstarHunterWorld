<template>
    <div>
        <cool-select
                v-model="selected"
                :items="items"
        />

        <select @change="select" v-model="valueMonster">
            <option value="0">Select a monster</option>
            <option v-for="(value, index) in monsters" :value="value.id" :key="index"> {{ value.name }} </option>
        </select>
        <button @click="addFav">Add to Favorite</button><br/>
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
    import { CoolSelect } from 'vue-cool-select'


    export default {
        components: { CoolSelect },
        data(){
            return {
                valueMonster: 0,
                specMonster: 'all',
                displayFilter: String,
                fav: [],
                sea: [],
                newFav: null,
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
                },
                //items: ['Item 1', 'Item 2', 'Item 3'],
                items: this.$store.state.monsters,
                selected: null
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

        mounted() {
            if (localStorage.getItem('fav')) {
                try {
                    this.fav = JSON.parse(localStorage.getItem('fav'));
                } catch(e) {
                    localStorage.removeItem('fav');
                }
            }
        },
        methods: {
            addFav() {
                localStorage.clear()
                if (!this.valueMonster) {
                    return;
                }
                this.fav.push(this.valueMonster);
                this.fav.push(this.$store.state.selectedMonster.name)
                this.saveFav();
            },
            saveFav() {
                const parsed = JSON.stringify(this.fav);
                localStorage.setItem('fav', parsed);
            },

            select(){
                this.$store.dispatch('selectedMonsters', this.valueMonster);
            },
            handleClick(){
                if (this.specMonster === 'all') {
                    this.displayFilter = this.$store.state.selectedMonster
                }else{
                    if (this.specMonster === 'type'){
                        this.displayFilter = this.$store.state.selectedMonster.type
                    }else if (this.specMonster === 'species'){
                        this.displayFilter = this.$store.state.selectedMonster.species
                    }else if (this.specMonster === 'description'){
                        this.displayFilter = this.$store.state.selectedMonster.description
                    }else if (this.specMonster === 'elements'){
                        this.displayFilter = this.$store.state.selectedMonster.elements
                    }else if (this.specMonster === 'ailments'){
                        this.displayFilter = this.$store.state.selectedMonster.ailments
                    }else if (this.specMonster === 'location'){
                        this.displayFilter = this.$store.state.selectedMonster.location
                    }else if (this.specMonster === 'resistances'){
                        this.displayFilter = this.$store.state.selectedMonster.resistances
                    }else if (this.specMonster === 'weaknesses'){
                        this.displayFilter = this.$store.state.selectedMonster.weaknesses
                    }else if (this.specMonster === 'rewards'){
                        this.displayFilter = this.$store.state.selectedMonster.rewards
                    }
                    //this.displayFilter =  this.displayFilter.join('')
                }
            },
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