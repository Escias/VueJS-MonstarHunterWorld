<template>
    <ul>

        <span v-for="(value, prop) in aliments" :key="prop" >{{ value }}, </span>      

    </ul>
</template>

<script>

export default {
    props: {
            aliments: Array,
        },
    data() {
        return {

            
        }
    }
};
     
</script>

