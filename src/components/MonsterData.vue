<template>
<div class='value'>
<ul>
    <div v-for="(value, prop) in monster" :key="prop" @ElementData="monster" @AilmentsData="monster" @RewardsData="monster">
        
        <template v-if="prop=='elements'" >

            {{ prop }} : <ElementData :elements="value" /> 

        </template>
        <template v-else>

            {{ prop }} : {{ value }}

        </template>   

<!--        <template v-if="prop=='ailments'">

            {{ prop }} : <AilmentsData :ailments="value" />

        </template>
        <template v-else>

            {{ prop }} : {{ value }}

        </template>  

        <template v-if="prop=='rewards'">

            {{ prop }} : <RewardsData :rewards="value" />

        </template>
        <template v-else>

            {{ prop }} : {{ value }}

        </template>  
        -->

        
        
    </div>
</ul>    
</div>    
       
</template>


<script>
import ElementData from '@/components/ElementData.vue'
import AilmentsData from '@/components/AilmentsData.vue'
import RewardsData from '@/components/RewardsData.vue'

    export default {
        components: {

            ElementData,
            AilmentsData,
            RewardsData,

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
            this.$store.dispatch('loadMonsters', '');
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