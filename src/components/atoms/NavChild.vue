<template>
  <ul class="nav-child">
    <li>
      <a>{{ childFirst }}</a>
    </li>
    <li>
      <a>{{ childSecond }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'NavChild',

  props: {
    childFirst: String as PropType<string>,
    childSecond: String as PropType<string>
  }
})
</script>

<style scoped>
.nav-child {
  z-index: 1;
}
.nav-child li{
  margin: 20px 0;
  width: 27%;
}
.nav-child li:not(:last-child) {
  border-right: 1px solid black;
}
</style>