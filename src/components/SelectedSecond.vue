<template>
    <div class="content second">
           <p>
                {{ selectedSecondMonster.name }}<br/>
                {{ selectedSecondMonster.species }}<br/>
                {{ selectedSecondMonster.type }}<br/>
                {{ selectedSecondMonster.description }}<br/>
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