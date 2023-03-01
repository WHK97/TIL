<template>
  <div>
    <Post :userData = "userData[i]" v-for="(a,i) in userData" :key="i"/>
  </div>
 
</template>

<script>
import Post from "./Post.vue"
export default {
  name: "ContainerPage",
  props:{
    userData: Array,
  },
  components:{
    Post
  },
};
</script>

<style>
</style>