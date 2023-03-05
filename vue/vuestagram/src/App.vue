<template>
<div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  
  <Container :userData = "userData" :step = "step" :url = "url" @content="textData=$event" />
  <button @click="more" v-if="step == 0">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
  <!-- <div v-if="step == 0">1</div>
  <div v-if="step == 1">2</div>
  <div v-if="step == 2">3</div>
<button @click="step = 0;">1</button>
<button @click="step = 1;">2</button>
<button @click="step = 2;">3</button> -->
</template>

<script>
import axios from 'axios';
import user from "./data.js"
import Container from "./components/Container.vue"
export default {
  name: 'App',   data(){
    return{
      userData : user,
      count: 0,
      step: 0,
      url: '',
      textData: "",
    }
   },
  components: {
    Container
  },
  methods:{
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`).then((res) =>{
        console.log(res.data);
        this.userData.push(res.data);
        this.count++;
      }).catch((err)=>{
        console.log(err);
      })
    },
    publish(){
      let newData = {  
        name: "Minny",
        userImage: "https://placeimg.com/100/100/animals",
        postImage: this.url,
        likes: 49,
        date: "Apr 4",
        liked: false,
        content: this.textData,
        filter: "lofi"
      };
      this.userData.unshift(newData);
      this.step = 0 ;
    },
    upload(e){
      let file = e.target.files[0]
      this.url = URL.createObjectURL(file);
      this.step = 1;
    }
  }
}
</script>

<style>

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
