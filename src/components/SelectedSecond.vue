<template>
    <div class="content second">
        <p>
            Name : {{ selectedSecondMonster.name }}<br/>
            <br/>
            Species : {{ selectedSecondMonster.species }}<br/>
            <br/>
            Type : {{ selectedSecondMonster.type }}<br/>
            <br/>
            Description :{{ selectedSecondMonster.description }}<br/>
            <br/>
            Elements : {{ selectedSecondMonster.elements }}<br/>
            <br/>
            Ailments: {{ selectedSecondMonster.ailments }}<br/>
            <br/>
            Locations: {{ selectedSecondMonster.locations }}<br/>
            <br/>
            Resistances: {{ selectedSecondMonster.resistances }}<br/>
            <br/>
            Weaknesses: {{ selectedSecondMonster.weaknesses }}<br/>
            <br/>
            Rewards: {{ selectedSecondMonster.rewards }}<br/>
        </p>
    </div>
</template>

<script>
export default {
       data(){
            return {           
                valueSecondMonster: Number,
            }
        },
        computed: {
            selectedSecondMonster(){
                return this.$store.state.selectedSecondMonster
            },
            monsters() {
                return this.$store.state.monsters;
            },
        },

    }

</script>

<style scoped>

</style>
