<template>
  <div id="header-guide">
    <Guide title="GUIDE" icon="question-circle"/>
    <Guide title="ログイン" icon=""/>
    <Guide title="(0)" icon="shopping-bag"/>
  </div>
</template>

<script>
import Guide from '@/components/atoms/Guide.vue'

export default {
  name: 'HeaderGuide',
  components: {
      Guide,
  }
}
</script>

<style scoped>
  #header-guide {
  display: flex;
}
</style>