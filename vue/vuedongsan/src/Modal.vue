<template>
  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <Discount />
      <img :src="products[id].image" class="imges" />
      <h4>{{ products[id].title }}</h4>
      <h4>{{ products[id].content }}</h4>
      <!-- <input @input="month = $event.target.value" :value="month" /> -->
      <input v-model.number="month"  />
      <!-- <select v-model="month"><option>1</option></select> -->
      <p>{{ month }}개월 선택: {{ products[id].price * month }} 원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalPage",
  data() {
    return {
      month: 1,
    };
  },
  watch:{
    month(a){
      if(isNaN(a) === true){
        alert('문자를 입력하지마세요');
        this.month = 1;
      }
    }
  },
  props: {
    products: Array,
    id: Number,
    modal: Boolean,
  },
};
</script>

<style>
</style>