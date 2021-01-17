<template>
<div class="guide">
  <font-awesome-icon class="font-awesome" :icon="icon"></font-awesome-icon>
  <a>{{ title }}</a>
</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'Guide',

  props: {
    title: String as PropType<string>,
    icon: String as PropType<string>
  }
})
</script>

<style scoped>
  .guide {
    margin: 12px 10px;
  }
  .guide a {
    margin-left: 8px;
  }
  .font-awesome {
    font-size: 20px;
  }
</style>