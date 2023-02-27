<template>
  <Nav></Nav>
  <!-- <List :listData="listData[i]" v-for="(a,i) in listData" :key="i" class="list"/> -->
  <router-view :listData="listData"></router-view>
</template>

<script>
import blog from "./assets/data.js";
import Nav from "./components/navBar.vue";
// import List from "./components/list.vue";
export default {
  name: "App",
  data() {
    return {
      listData: blog,
    };
  },
  components: {
    Nav,
    // List,
  },
  methods:{

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.list{
  margin: 40px 0;
}
</style>
