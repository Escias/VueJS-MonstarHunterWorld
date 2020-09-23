<template>
<div class='value'>
<ul>
    
    <div v-for="(value, prop) in monster" :key="prop" @ElementData="monster">
    
        {{ prop }} : {{ value }}
        
    </div>
</ul>    
</div>    
       
</template>


<script>
import ElementData from '@/components/ElementData.vue'


    export default {
        data() {
            return{
                
                // loadMonsters: [this.monsters],
            }
        },
        computed: {
            monster() {
                return this.$store.state.monsters;
            },
        },
        created() {
            this.$store.dispatch('loadMonsters');
        },
        methode: {
            monster() {
                return this.$store.state.monsters;
            },
        }
        
    }
</script>

<style>
.value{
    border:solid;
    margin-left: 10%;
    margin-right: 10%;
    padding-right: 3%;
}

</style>