<template>
  <div>
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
