<template>
    <div class="content first">
        <p>
            Name : {{ selectedFirstMonster.name }}<br/>
            <br/>
            Species : {{ selectedFirstMonster.species }}<br/>
            <br/>
            Type : {{ selectedFirstMonster.type }}<br/>
            <br/>
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
</template>

<script>
    export default {
        data(){
            return {
                valueFirstMonster: Number,
            }
        },
        computed: {
            selectedFirstMonster(){
                return this.$store.state.selectedFirstMonster
            },
            monsters() {
                return this.$store.state.monsters;
            },
        },

    }
</script>

<style scoped>

</style>
