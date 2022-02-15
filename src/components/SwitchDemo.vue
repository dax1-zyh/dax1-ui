<template>
  <div>
    <h1>Switch组件</h1><br>
    <Switch v-model:value="checked"/>
  </div>
</template>

<script lant="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'

export default {
  components: {
    Switch
  },
  setup() {
    const checked = ref(true)
    return {checked}
  }
}
</script>
