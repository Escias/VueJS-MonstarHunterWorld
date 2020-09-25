<template>
    <div class="content second" v-if="valueSecondMonster !== -1">
      <div class="border">
          {{ selectedSecondMonster.name }}<br/>
          {{ selectedSecondMonster.species }}<br/>
          {{ selectedSecondMonster.type }}<br/>
          {{ selectedSecondMonster.description }}
      </div>

      <div class="border">
        <div v-for="{ item, index } in selectedSecondMonster.elements" :key="index" :item="item" :index="index">
            {{ selectedSecondMonster.elements }}
        </div>
      </div>

      <div class="border">
        <div v-for="{id, name, description} in selectedSecondMonster.ailments" :key="id" :name="name" :description="description">
          {{ name }}<br/>
          {{ description }}
        </div>
      </div>

      <div class="border">
        <div v-for="{id, name, zoneCount} in selectedSecondMonster.locations" :key="id" :name="name" :zoneCount="zoneCount">
          {{ name }}
        </div>
      </div>

      <div class="border">
        <div v-for="{ element, condition} in selectedSecondMonster.resistances"  :key="element" :condition="condition">
            {{ element }} {{ condition }}
        </div>
      </div>

      <div class="border">
        <div v-for="{ element, stars, condition} in selectedSecondMonster.weaknesses"  :key="element" :stars="stars" :condition="condition">
          {{ element }} : {{ stars }} ★ {{ condition }}
        </div>
      </div>

      <div class="border">
        <div v-for="{ id } in selectedSecondMonster.rewards" :key="id">
          {{ id }}
        </div>
      </div>
    </div>
    <div class="content second" v-else>
      {{ valueSecondMonster }} <br/>
      N'est pas déclaré.
    </div>
</template>

<script>
export default {
    props: {
      valueSecondMonster: -1,
    },
    computed: {
        selectedSecondMonster() {
          return this.$store.state.selectedSecondMonster
        },
        monsters() {
          return this.$store.state.monsters;
        },
    }

}
     

</script>

<style>
  .border {
    border-style: groove;
  }

  .border:empty {
    display: none;
  }
</style>