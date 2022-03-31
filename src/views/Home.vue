<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1 class="title">达喜 UI</h1>
      <hr>
      <p class="comment">一套基于Vue3 + TypeScript，面向学习编程的UI组件库</p>
      <p class="actions">
        <a target="_blank" href="https://github.com/dax1-zyh/dax1-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <img src="../assets/vue3.png" >
  <img src="../assets/TypeScript.png" >
  <img src="../assets/learning.png" >
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
  components: {
    Topnav
  }
}
</script>
<style lang="scss">
.title {
  color: lightskyblue;
}
.comment {
  font-size: 18px;
  line-height: 28px;
  color: #888;
  margin: 10px 0 5px;
}
.Topnav {
  border: 1px solid red;
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f4f9fe;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;

  > .actions {
    padding-top: 30px;
    a {
      margin: 0 10px;
      background: lightskyblue;
      color: black;
      display: inline-block;
      $h: 35px;
      height: $h;
      line-height: $h;
      border-radius: $h*0.5;
      padding: 0 8px;
    }
  }
}
</style>
