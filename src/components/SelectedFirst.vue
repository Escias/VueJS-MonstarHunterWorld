<template>
    <div class="content first" v-if="valueFirstMonster !== -1">
        <div class="border" >
            {{ selectedFirstMonster.name }}<br/>
            {{ selectedFirstMonster.species }}<br/>
            {{ selectedFirstMonster.type }}<br/>
            {{ selectedFirstMonster.description }}
        </div>

        <div class="border">
            <div v-for="{ item, index } in selectedFirstMonster.elements" :key="index" :item="item" :index="index">
                {{ selectedFirstMonster.elements }}
            </div>
        </div>

        <div class="border">
            <div v-for="{id, name, description} in selectedFirstMonster.ailments" :key="id" :name="name" :description="description">
                {{ name }}<br/>
                {{ description }}
            </div>
        </div>

        <div class="border">
            <div v-for="{id, name, zoneCount} in selectedFirstMonster.locations" :key="id" :name="name" :zoneCount="zoneCount">
                {{ name }}
            </div>
        </div>

        <div class="border">
            <div v-for="{ element, condition} in selectedFirstMonster.resistances"  :key="element" :condition="condition">
                {{ element }} {{ condition }}
            </div>
        </div>

        <div class="border">
            <div v-for="{ element, stars, condition} in selectedFirstMonster.weaknesses"  :key="element" :stars="stars" :condition="condition">
                {{ element }} : {{ stars }} ★ {{ condition }}
            </div>
        </div>

        <div class="border">
            <div v-for="{ id } in selectedFirstMonster.rewards" :key="id">
                {{ id }}
            </div>
        </div>
    </div>
    <div class="content first" v-else>
        {{ valueFirstMonster }} <br/>
        N'est pas déclaré.
    </div>
</template>

<script>
    export default {
        props: {
            valueFirstMonster: -1,
        },
        computed: {
            selectedFirstMonster() {
                return this.$store.state.selectedFirstMonster
            },
            monsters() {
                return this.$store.state.monsters;
            },
        }
    }
</script>

<style>
    .border {
        border-style: groove;
    }
    .border:empty {
        display: none;
    }
</style>