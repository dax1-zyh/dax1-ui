<template>
  <div>
    <h1>Dialog组件</h1>
    <Button @click="toggle">toggle</Button>
    <!--<Dialog :visible="x" @update:visible="x = $event"></Dialog>-->
    <!--等价于-->
    <Dialog
        v-model:visible="x"
        :closeOnclickOverlay="true"
        :ok="f1"
        :cancel="f2"
    >
      <template v-slot:tittle>
        <strong>标题</strong>
      </template>
      <template v-slot:content>
        <div>第一行</div>
        <div>第二行</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {
    }
    return {x, toggle, f1, f2}
  }
}

</script>
