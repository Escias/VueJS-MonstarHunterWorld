<template>
    <div class="content first">
     <p>
        Name : {{ selectedFirstMonster.name }}<br/>
        Species : {{ selectedFirstMonster.species }}<br/>
        Type : {{ selectedFirstMonster.type }}<br/>
        Description :{{ selectedFirstMonster.description }}
      </p>
      <p>
        Elements:<br/>
      </p>
      <div v-for="{id, name} in selectedFirstMonster.elements" :key="id" :name="name">
        <p>
          {{ selectedFirstMonster.elements[id] }}
        </p>
      </div>

      <p>
        Ailments:<br/>
      </p>
      <div v-for="{id, name, description} in selectedFirstMonster.ailments" :key="id" :name="name" :description="description">
        <p>
          {{ name }}<br/>
          {{ description }}
        </p>
      </div>


      <p>
        Locations:
      </p>
      <div v-for="{id, name, zoneCount} in selectedFirstMonster.locations" :key="id" :name="name" :zoneCount="zoneCount">
        <p>
          {{ name }}
        </p>
      </div>
    
      <p>
          Résistance: 
        <div v-for="{element} in selectedFirstMonster.resistances" :key="element">
            <p>
                {{ element }} 
            </p>    
        </div>
        <p>
        Weaknesses: 
        </p>
        <div v-for="{ element, stars } in selectedFirstMonster.weaknesses" :key="element" :stars="stars">
            <p>
                {{ element }} 
                {{ stars }}
            </p>    
        </div>
       

       <!--     Rewards: {{ selectedFirstMonster.rewards }}<br/>-->
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                valueFirstMonster: Number,
            }
        },
        computed: {
            selectedFirstMonster(){
                return this.$store.state.selectedFirstMonster
            },
            monsters() {
                return this.$store.state.monsters;
            },
        },

    }
</script>

<style scoped>

</style>
