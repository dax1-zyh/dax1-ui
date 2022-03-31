<template>
  <div class="topnav">
    <div class="logo">
      <router-link style="color:#f1f8ff" to="/">
        <img src="../assets/logo.png">
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc/intro">文档</router-link>
      </li>
      <li>
        <router-link to="/doc/switch">组件</router-link>
      </li>
    </ul>
    <span class="toggleAside" @click="toggleAside">
      <img src="../assets/asideIcon.png" alt="">
    </span>
  </div>
  <hr/>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'


export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return {toggleAside}
  },
}

</script>

<style lang="scss" scoped>
.topnav {
  background: #f4f9fe;
  display: flex;
  padding: 10px 10px 8px 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .toggleAside {
    position: absolute;
    left: 16px;
    height: 28px;
    display: none;
  }

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
      color: #888;
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
