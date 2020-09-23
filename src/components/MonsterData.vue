<template>
  <div>
    <input type="text" v-model="idMonster">
    <button @click="select"> Select </button>
    <p>
      {{ this.monsters }}
    </p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      idMonster: ''
    }
  },
  computed: {
    monsters() {
      return this.$store.state.monsters;
    }
  },
  created() {
    this.$store.dispatch('loadMonsters')
  },
  methods: {
    select() {
      this.$store.dispatch('loadMonsters', this.idMonster)
    }
  }
}
</script>

<style>

</style>