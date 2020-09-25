<template>
    <div class="content first" v-if="valueFirstMonster !== -1">
                <p>
                  Name : {{ selectedFirstMonster.name }}<br/>
                  Species : {{ selectedFirstMonster.species }}<br/>
                  Type : {{ selectedFirstMonster.type }}<br/>
                  Description :{{ selectedFirstMonster.description }}<br/>
                  <br/>
                  Elements : {{ selectedFirstMonster.elements }}<br/>
                  <br/>
                  Ailments: {{ selectedFirstMonster.ailments }}<br/>
                  <br/>
                  Locations: {{ selectedFirstMonster.locations }}<br/>
                  <br/>
                  Resistances: {{ selectedFirstMonster.resistances }}<br/>
                  <br/>
                  Weaknesses: {{ selectedFirstMonster.weaknesses }}<br/>
                  <br/>
                  Rewards: {{ selectedFirstMonster.rewards }}<br/>
                </p>
    </div>
  <div class="content first" v-else>
    {{ valueFirstMonster }} <br/>
    N'est pas déclaré.
  </div>
</template>

<script>
export default {
      props: {
        valueFirstMonster: Number,
      },
      computed: {
          selectedFirstMonster(){
              return this.$store.state.selectedFirstMonster
          },
          monsters() {
              return this.$store.state.monsters;
          },
      }
     
    }

</script>