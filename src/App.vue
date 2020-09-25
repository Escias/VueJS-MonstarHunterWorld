<template>
  <div id="app">
    <div id="nav">
      <template v-for="(item, index) in items">
        <router-link
                :key="index"
                :to="item.path"
        >{{ item.title }}</router-link> |
      </template>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        items: [
          { path: "/", title: 'Home'},
          { path: "/comparator", title: 'Comparator'},
          { path: "/monster", title: 'Monster'},
        ]
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
