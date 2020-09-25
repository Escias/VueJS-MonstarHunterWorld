<template>
    <div class="content second" v-if="valueSecondMonster !== -1">
      <p>
        Name : {{ selectedSecondMonster.name }}<br/>
        Species : {{ selectedSecondMonster.species }}<br/>
        Type : {{ selectedSecondMonster.type }}<br/>
        Description :{{ selectedSecondMonster.description }}
      </p>
      <p>
        Elements:<br/>
      </p>
      <div v-for="{id, name} in selectedSecondMonster.elements" :key="id" :name="name">
        <p>
          {{ selectedSecondMonster.elements[id] }}
        </p>
      </div>

      <p>
        Ailments:<br/>
      </p>
      <div v-for="{id, name, description} in selectedSecondMonster.ailments" :key="id" :name="name" :description="description">
        <p>
          {{ name }}<br/>
          {{ description }}
        </p>
      </div>


      <p>
        Locations:
      </p>
      <div v-for="{id, name, zoneCount} in selectedSecondMonster.locations" :key="id" :name="name" :zoneCount="zoneCount">
        <p>
          {{ name }}
        </p>
      </div>
    
      <p>
          Résistance: 
        <div v-for="{element} in selectedSecondMonster.resistances" :key="element">
            <p>
                {{ element }} 
            </p>    
        </div>
        <p>
        Weaknesses: 
        </p>
        <div v-for="{ element, stars } in selectedSecondMonster.weaknesses" :key="element" :stars="stars">
            <p>
                {{ element }} 
                {{ stars }}  
            </p>    
        </div>
        <br/>

      <!---  <p>
        Rewards:
        </p>
          <div v-for="{ item, conditions } in selectedSecondMonster.reward" :key="item" :conditions="conditions">
            <p>
                {{ item }} <br/>
                {{ conditions }}
            </p>    
        </div>
    -->
      
    </div>
    <div class="content second" v-else>
      {{ valueSecondMonster }} <br/>
      N'est pas déclaré.
    </div>
</template>

<script>
export default {
    props: {
      valueSecondMonster: Number,
    },
    computed: {
        selectedSecondMonster(){
          return this.$store.state.selectedSecondMonster
        },
        monsters() {
          return this.$store.state.monsters;
        },
    }

}
     

</script>