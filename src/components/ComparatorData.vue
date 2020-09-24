<template>
  <div>
      <Comparator/>
  </div>
</template>

<script>
import Comparator from '@/components/Comparator.vue'
export default {

    components: {
        Comparator: Comparator,
    },

  data(){
    return {
      valueFirstMonster: Number,
      valueSecondMonster: Number,
    }
  },
  computed: {
    selectedMonster(){
      return this.$store.state.selectedMonster
    },
    selectedFirstMonster(){
      return this.$store.state.selectedFirstMonster
    },
    selectedSecondMonster(){
      return this.$store.state.selectedSecondMonster
    },
    monsters() {
      return this.$store.state.monsters;
    },
  },
  created() {
    this.$store.dispatch('loadMonsters');
  },
  methods: {
    selectFirst(){
      this.$store.dispatch('selectedFirstMonster', this.valueFirstMonster + 1);
      console.log("sel 1 : " + this.valueFirstMonster)
      console.log("sel 2 : " + this.valueSecondMonster)
    },
    selectSecond(){
      this.$store.dispatch('selectedSecondMonster', this.valueSecondMonster + 1);
      console.log("sel 1 : " + this.valueFirstMonster)
      console.log("sel 2 : " + this.valueSecondMonster)
    }
  }
}
</script>

<style scoped>
div.comparator {
  border-style: solid;
  border-width: 3px;
  display: flex;
  align-content: space-between;
}

div.comparator div.content {
  /*width: 45%;
  min-width: 40%;*/
  min-height: 100px;
  border-style: dashed;
  min-width: 30%;
}

div.first {
  background-color: rgb(150, 184, 200);

}

div.column {
  width: auto;
  min-width: 15%;
}

div.second {
  background-color: rgb(219, 104, 104);

}

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
  flex: 1;

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