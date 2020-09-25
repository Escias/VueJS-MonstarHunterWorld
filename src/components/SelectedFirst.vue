<template>
    <div class="content first">
        
                <p>
                    {{ selectedFirstMonster.name }}<br/>
                    {{ selectedFirstMonster.species }}<br/>
                    {{ selectedFirstMonster.type }}<br/>
                    {{ selectedFirstMonster.description }}<br/>
                    {{ selectedFirstMonster.element }}<br/>
                </p>
    </div>
</template>

<script>
import ElementData from '@/components/ElementData.vue'
export default {
    components:{
        ElementData: ElementData,
    },
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