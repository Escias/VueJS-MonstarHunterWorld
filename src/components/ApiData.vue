<template>
    <div>
        <p>
            {{ dataapi }}
        </p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data(){
            return{
                dataapi:'',
            }
        },
        mounted(){
            axios
                .get('https://mhw-db.com/monsters')
                .then(response => (this.dataapi = response.data))
        }
    }
</script>

<style>

</style>