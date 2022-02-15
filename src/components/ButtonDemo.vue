<template>
  <div>
    <h1>Button组件</h1>
    <br>
    <h2 class="tittle">主题样式</h2><br>
    <div>
      <Button>默认按钮</Button>
      <Button theme="link">链接按钮</Button>
      <Button theme="text">文本按钮</Button>
    </div>
    <br>
    <h2 class="tittle">大小样式</h2><br>
    <div>
      <Button size="big">大号按钮</Button>
      <Button>普通按钮</Button>
      <Button size="small">小号按钮</Button>
    </div>
    <div>
      <Button theme="link" size="big">大号按钮</Button>
      <Button theme="link">普通按钮</Button>
      <Button theme="link" size="small">小号按钮</Button>
    </div>
    <div>
      <Button theme="text" size="big">大号按钮</Button>
      <Button theme="text">普通按钮</Button>
      <Button theme="text" size="small">小号按钮</Button>
    </div>
    <br>
    <h2 class="tittle">按钮等级</h2><br>
    <div>
      <Button level="main">主要按钮</Button>
      <Button> 普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文本按钮</Button>
      <Button theme="text">普通文本按钮</Button>
      <Button theme="text" level="danger">危险文本按钮</Button>
    </div>
    <br>
    <h2 class="tittle">禁用状态</h2><br>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用文本按钮</Button>
    </div>
    <br>
    <h2 class="tittle">加载状态</h2><br>
    <div>
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
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

<style lang="scss" scoped>
.tittle {
  color: #5e6d82;
}
</style>
