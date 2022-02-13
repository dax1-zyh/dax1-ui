<template>
  <div>
    <Button @click="onClick" size="normal">你好</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {onClick}
  }
}

</script>
