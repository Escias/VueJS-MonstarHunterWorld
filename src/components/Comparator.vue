
<template>
    <div>
        <select @change="selectFirst" v-model="valueFirstMonster">
            <option v-for="(value, index) in monsters" :value="value.id" :key="index"> {{ value.name }} </option>
        </select>
        <select @change="selectSecond" v-model="valueSecondMonster">
            <option v-for="(value, index) in monsters" :value="value.id" :key="index"> {{ value.name }} </option>
        </select><br/>
        <div class="comparator">
            <SelectedFirst/>
            <div class="column">
                <p>
                    <br/>
                </p>
            </div>
            <SelectedSecond/>
        </div>
    </div>
</template>
<script>

    import SelectedFirst from "./SelectedFirst";
    import SelectedSecond from "./SelectedSecond";

    export default {
        components:{
            SelectedFirst: SelectedFirst,
            SelectedSecond: SelectedSecond,
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
            monsters() {
                return this.$store.state.monsters;
            },
        },
        created() {
            this.$store.dispatch('loadMonsters');
        },
        methods: {
            selectFirst(){
                this.$store.dispatch('selectedFirstMonster', this.valueFirstMonster);
                console.log("sel 1 : " + this.valueFirstMonster)
                console.log("sel 2 : " + this.valueSecondMonster)
            },
            selectSecond(){
                this.$store.dispatch('selectedSecondMonster', this.valueSecondMonster);
                console.log("sel 1 : " + this.valueFirstMonster)
                console.log("sel 2 : " + this.valueSecondMonster)
            }
        }
    }
</script>
<!---
changeFCss(){
this.typeFirst = this.$store.state.selectedFirstMonster.type;
this.typeSecond = this.$store.state.selectedSecondMonster.type;
console.log(this.$store.state.selectedFirstMonster.type)
console.log(this.$store.state.selectedSecondMonster.type)
if (this.typeFirst === this.typeSecond){
this.colorFirst = 'black'
this.colorSecond = 'black'
}else if (this.typeFirst === 'small' && this.typeSecond === 'large'){
this.colorFirst = 'green'
this.colorSecond = 'red'
}else if (this.typeFirst === 'large' && this.typeSecond === 'small'){
this.colorFirst = 'red'
this.colorSecond = 'green'
}
},-->
<style scoped>
    .fcolor{
        color: black;
    }
    .scolor{
        color: black;
    }
    div.comparator {
        border-style: solid;
        border-width: 3px;
        display: flex;
        align-content: space-between;
    }
    div.comparator div.content {
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
    span{
        margin-left: 5%;
        margin-right: 5%;
    }
</style>