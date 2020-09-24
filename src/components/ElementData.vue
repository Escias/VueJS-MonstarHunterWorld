<template>
  <ul>

    <span v-for="(value, prop) in elements" :key="prop" >{{ value }}, </span>

  </ul>
</template>

<script>
export default {
  props: {
    elements: Array,
  },
  data() {
    return {

    }
  }
};

</script>
