<template>

  <div>
    <h4>{{listData[$route.params.id].title}}</h4>
    <p>{{listData[$route.params.id].content}}</p>
    <p>{{listData[$route.params.id].date}}</p>
    
  </div>
</template>

<script>
export default {
  name: "DetailPage",
  props:{
    listData: Array,
  }
};
</script>

<style>
</style>