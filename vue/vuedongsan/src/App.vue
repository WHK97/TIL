<template>
  <div class="menu">
    <a>Home</a>
    <a>Products</a>
    <a>About</a>
  </div>
  <transition name="fade">
    <Modal :products = "products" :id ="id" :modal = "modal" @closeModal = "modal = flase;"/>
  </transition>
  <Discount/>
  <button @click="priceSort">낮은순정렬</button>
  <button @click="priceSorta">높은순정렬</button>
  <button @click="titleSort">글자순정렬</button>
  <button @click="sortBack">되돌리기</button>

  <Card :products = 'products[i]' v-for="(a, i) in products" :key="i" @openModal="modal = true; id = $event;"/>
   <!-- <div v-for="(a, i) in products" :key="i">
    <img :src="products[i].image" @click="modal = true;id = i;" class="imges"/>
    <h4>{{ products[i].title }}</h4>
    <p>{{ products[i].price }} 원</p>
  </div> -->
</template>

<script>
import data from "./data.js";
import Discount from "./Discount.vue";
import Modal from "./Modal.vue"
import Card from "./Card.vue";
export default {
  name: "App",
  data() {
    return {
      id: 0,
      modal: false,
      products: data,
      productsOriginal: [...data],
    };
  },
  components: {
    Discount,
    Modal,
    Card,
  },
  methods: {
    priceSort(){
      this.products.sort(function(a,b){
        return a.price - b.price
      });
    },    
    priceSorta(){
      this.products.sort(function(a,b){
        return b.price - a.price
      });
    },
    titleSort(){
      this.products.sort(function(a,b){
        return a.title.localeCompare(b.title);
      });
    },
    sortBack(){
      this.products = [...this.productsOriginal]
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.imges {
  width: 100%;
  margin-top: 30px;
}
.fade-enter-from{opacity: 0;} 
.fade-enter-active{transition: all 1s;}
.fade-enter-to{opacity: 1;}
</style>
