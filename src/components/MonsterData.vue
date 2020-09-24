<template>
  <div>
    <select @change="selectFirst" v-model="valueFirstMonster">
      <option v-for="(value, index) in monsters" :value="index" :key="index"> {{ value.name }} </option>
    </select>
    <select @change="selectSecond" v-model="valueSecondMonster">
      <option v-for="(value, index) in monsters" :value="index" :key="index"> {{ value.name }} </option>
    </select><br/>
    <div class="comparator">
      <div class="content first">
        <p>
          {{ selectedFirstMonster.name }}<br/>
          {{ selectedFirstMonster.species }}<br/>
          {{ selectedFirstMonster.type }}<br/>
          {{ selectedFirstMonster.description }}<br/>
        </p>
      </div>
      <div class="column">
        <p>
          Name<br/>
          Species<br/>
          Type<br/>
          Desciption<br/>
        </p>
      </div>
      <div class="content second">
        <p>
          {{ selectedSecondMonster.name }}<br/>
          {{ selectedSecondMonster.species }}<br/>
          {{ selectedSecondMonster.type }}<br/>
          {{ selectedSecondMonster.description }}<br/>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
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
  flex: 1;
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