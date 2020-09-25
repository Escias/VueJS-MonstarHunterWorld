<template>
    <div class="content first">
                <p>
                    {{ selectedFirstMonster.name }}<br/>
                    {{ selectedFirstMonster.species }}<br/>
                    {{ selectedFirstMonster.type }}<br/>
                    {{ selectedFirstMonster.description }}<br/>
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