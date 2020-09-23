<template>
    <div>
        <MonsterSelect/>
        <MonsterData/>
    </div>
</template>

<script>
    import MonsterSelect from "../components/MonsterSelect";
    import MonsterData from "../components/MonsterData";

    export default {
        components: {
            MonsterSelect: MonsterSelect,
            MonsterData: MonsterData,
        },
    }
</script>

<style scoped>

</style>