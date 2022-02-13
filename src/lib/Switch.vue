<template>
  <button class="dax1-switch" :class="{'dax1-checked':value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {toggle}
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.dax1-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h*0.5;
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2*0.5;
  transition: left 250ms;
}

button.dax1-checked {
  background: blue;

  > span {
    left: calc(100% - #{$h2} - 2px);
  }
}


</style>
