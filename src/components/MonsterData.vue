<template>
    <div>
        <select @change="select" v-model="valueMonster">
            <option selected="All Monsters">All monsters</option>
            <option v-for="(value, index) in monsters" :value="index" :key="index"> {{ value.name }} </option>
        </select><br/>
        <div class="case">
            <form @click="handleClick($event)">
                <div class="check">
                    <div class="checkbox"><p>Type</p><input type="checkbox" name="type"/></div>
                    <div class="checkbox"><p>Species</p><input type="checkbox" name="species"/></div>
                    <div class="checkbox"><p>Elements</p><input type="checkbox" name="elements"/></div>
                </div>
                <div class="check">
                    <div class="checkbox"><p>Ailments</p><input type="checkbox" name="ailments"/></div>
                    <div class="checkbox"><p>Locations</p><input type="checkbox" name="locations"/></div>
                    <div class="checkbox"><p>Resistances</p><input type="checkbox" name="resistances"/></div>
                </div>
                <div class="check">
                    <div class="checkbox"><p>Weaknesses</p><input type="checkbox" name="weaknesses"/></div>
                    <div class="checkbox"><p>Rewards</p><input type="checkbox" name="rewards"/></div>
                </div>
            </form>
        </div>
        <p>{{ selectMonster }}</p>
        <div>
        <select @change="select" v-model="valueMonster">
            <option selected="All Monsters">All monsters</option>
            <option v-for="(value, index) in monsters" :value="index" :key="index"> {{ value.name }} </option>
        </select><br/>
        <div class="case">
            <form @click="handleclick($event)">
                <div class="check">
                    <div class="checkbox"><p>Type</p><input type="checkbox" name="type"/></div>
                    <div class="checkbox"><p>Species</p><input type="checkbox" name="species"/></div>
                    <div class="checkbox"><p>Elements</p><input type="checkbox" name="elements"/></div>
                </div>
                <div class="check">
                    <div class="checkbox"><p>Ailments</p><input type="checkbox" name="ailments"/></div>
                    <div class="checkbox"><p>Locations</p><input type="checkbox" name="locations"/></div>
                    <div class="checkbox"><p>Resistances</p><input type="checkbox" name="resistances"/></div>
                </div>
                <div class="check">
                    <div class="checkbox"><p>Weaknesses</p><input type="checkbox" name="weaknesses"/></div>
                    <div class="checkbox"><p>Rewards</p><input type="checkbox" name="rewards"/></div>
                </div>
            </form>
        </div>
        <p>{{ selectMonster }}</p>
        
    </div>
    </div>
    
</template>

<script>

    export default {
        data(){
            return {
                valueMonster: ''
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
            handleClick(e){
                console.log(e.target.name);
                console.log(e.target.checked);

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