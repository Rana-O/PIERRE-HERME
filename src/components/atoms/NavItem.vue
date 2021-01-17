<template>
  <div class="nav-item">
    <a>
      <p>{{ navItem }}</p>
      <p>{{ navItemJp}}</p>
    </a>
    <slot></slot>
  </div>
</template>

<script lang ="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'NavItem',

  props:{
    navItem: String as PropType<string>,
    navItemJp: String as PropType<string>
  }
})
</script>

<style scoped>
.nav-item {
  display: inline-flex;
}
</style>