<template>
  <div>
    <img :src="products.image"  class="imges" @click="$emit('openModal',products.id)"/>
    <h4>{{ products.title }}</h4>
    <p>{{ products.price }} 원</p>
  </div>
</template>

<script>
export default {
  name: 'CardPage',
  props:{
    products : Array,
  }
}
</script>

<style>

</style>