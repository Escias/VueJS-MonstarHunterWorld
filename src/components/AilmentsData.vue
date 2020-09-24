<template>
  <ul>

    <span v-for="(value, prop) in ailments" :key="prop" >{{ value }}, </span>

  </ul>
</template>

<script>
export default {
  props: {
    ailments: Array,
  },
  data() {
    return {

    }
  }
};

</script>
