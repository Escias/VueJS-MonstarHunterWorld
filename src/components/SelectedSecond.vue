<template>
    <div class="content second" v-if="valueSecondMonster !== -1">
           <p>
             Name : {{ selectedSecondMonster.name }}<br/>
             Species : {{ selectedSecondMonster.species }}<br/>
             Type : {{ selectedSecondMonster.type }}<br/>
             Description :{{ selectedSecondMonster.description }}<br/>
             <br/>
             Elements : {{ selectedSecondMonster.elements }}<br/>
             <br/>
             Ailments: {{ selectedSecondMonster.ailments }}<br/>
             <br/>
             Locations: {{ selectedSecondMonster.locations }}<br/>
             <br/>
             Resistances: {{ selectedSecondMonster.resistances }}<br/>
             <br/>
             Weaknesses: {{ selectedSecondMonster.weaknesses.get(1).element }}<br/>
             <br/>
             Rewards: {{ selectedSecondMonster.rewards }}<br/>
            </p>
    </div>
    <div class="content second" v-else>
      {{ valueSecondMonster }} <br/>
      N'est pas déclaré.
    </div>
</template>

<script>
export default {
       data(){
            return {           
                valueSecondMonster: -1,
            }
        },
        computed: {
            selectedSecondMonster(){
              return this.$store.state.selectedSecondMonster
            },
            monsters() {
              return this.$store.state.monsters;
            },
        },
        
    }
     

</script>