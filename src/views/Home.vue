<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>达喜UI</h1>
      <h2>达喜的UI框架</h2>
      <p class="actions">
        <a target="_blank" href="https://github.com/dax1-zyh">GitHub</a>
        <router-link to="/doc">文档</router-link>
      </p>
    </div>
  </div>
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

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightskyblue;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h*0.5;
      padding: 0 8px;
    }
  }
}
</style>
