<template>
  <div class="button">
    <a href="#">
      <span>{{ name }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"

export default Vue.extend({
  name: 'Button',

  props: {
    name: String as PropType<string>
  }
})
</script>

<style scoped>
  .button a {
    text-decoration: none;
    color: black;
    background-color: white;
    min-width: 140px;
    padding: 10px;
  }
  .button span {
    font-size: 14px;
    text-align: right;
    letter-spacing: 1px;
    padding: 0 10px;

  }
</style>