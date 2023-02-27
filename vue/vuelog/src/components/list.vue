<template>
  <div v-for="(a,i) in listData" :key="i" class="list" @click="$router.push('/detail/'+i)">
    <h4>{{listData[i].title}}</h4>
  </div>
</template>

<script>
export default {
  name:"listPage",
  props:{
    listData: Array
  },
}
</script>

<style>

</style>