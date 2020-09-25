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

