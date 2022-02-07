<template>
  <div class="topnav">
    <div class="logo" @click="toggleAside">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
  <hr/>
</template>

<script lang="ts">

export default {
  methods: {
    toggleAside() {
      this.$store.commit("changeAsideVisible")
    }
  }
}

</script>

<style lang="scss" scoped>
.topnav {
  background: lightgray;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;

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
    }
  }
}
</style>
