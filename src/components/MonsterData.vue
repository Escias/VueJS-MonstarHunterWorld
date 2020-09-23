<template>
<div class='value'>
<ul>
    <div v-for="(value, prop) in monster" :key="prop" @ElementData="monster" @AlimentsData="monster">
        <template v-if="prop=='elements'" >

        {{ prop }} : <ElementData :elements="value" /> 

        </template>

        <template v-else>

        {{ prop }} : {{ value }}

        </template>   

        <template v-if="prop=='aliments'">

            {{ prop }} : <AlimentData :aliments="value" />

        </template>

        <template v-else>

         {{ prop }} : {{ value }}

        </template>   
    </div>
</ul>    
</div>    
       
</template>


<script>
import ElementData from '@/components/ElementData.vue'
import AlimentsData from '@/components/AlimentsData.vue'


    export default {
        components: {

            ElementData,
            AlimentsData,

        },
        
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
        
        methods: {
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