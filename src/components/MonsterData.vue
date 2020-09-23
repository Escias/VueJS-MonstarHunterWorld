<template>
<ul>
    
    <div v-for="(value, prop) in monster" :key="prop" ><br>
         <p>
            {{ prop }} : {{ value }}
        </p>
    </div>
</ul>        
       
</template>


<script>

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
        }
        
    }
</script>

<style scoped>

</style>