<template>
  <div>
    <div v-if="step == 0"> 
      <Post :userData="userData[i]" v-for="(a, i) in userData" :key="i" />
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div class="upload-image" :style= "`background-image:url(${url})`"></div>
        <div class="filters"  >
          <FilterBox :filter="filterDatas[i]" :url = "url" v-for="(filter,i) in filterDatas" :key="i"  >
           <template v-slot:filterName>{{filterDatas[i]}}</template>
          </FilterBox>
      </div>
    </div>
    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div class="upload-image" :style= "`background-image:url(${url})`"></div>
        <div class="write">
          <textarea @input="$emit('content',$event.target.value)" class="write-box">write!</textarea>
        </div>
      </div>
    </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import filterData from '../filterData';
export default {
  name: "ContainerPage",  
  data(){
    return{
      filterDatas :filterData,
    }
  },
  props: {
    userData: Array,
    step: Number,
    url: String
  },
  components: {
    Post,
    FilterBox,
  },
};
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>