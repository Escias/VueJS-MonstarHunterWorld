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
      <div v-for="{ item, index } in selectedSecondMonster.elements" :key="index" :item="item" :index="index">
          {{ selectedSecondMonster.elements }}
      </div>

      <p>
        Ailments:<br/>
      </p>
      <div v-for="{id, name, description} in selectedSecondMonster.ailments" :key="id" :name="name" :description="description">
        {{ name }}<br/>
        {{ description }}
      </div>

      <p>
        Locations:<br/>
      </p>
      <div v-for="{id, name, zoneCount} in selectedSecondMonster.locations" :key="id" :name="name" :zoneCount="zoneCount">
        <p>
          {{ name }}
        </p>
      </div>
      <p>
        <br/>
        Resistances: {{ selectedSecondMonster.resistances }}<br/>
        <br/>
        Weaknesses: {{ selectedSecondMonster.weaknesses }}<br/>
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