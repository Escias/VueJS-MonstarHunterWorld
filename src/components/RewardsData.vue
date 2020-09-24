<template>
    <ul>

        <span v-for="(value, prop) in rewards" :key="prop" >{{ value }}, </span>      

    </ul>
</template>

<script>

export default {
    props: {
            rewards: Array,
        },
    data() {
        return {

            
        }
    }
};
     
</script>

