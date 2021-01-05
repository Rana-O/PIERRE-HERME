<template>
  <div class="nav-item">
    <a>
      <p>{{ navItem }}</p>
      <p>{{ navItem_jp}}</p>
    </a>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  props:[
    'navItem',
    'navItem_jp'
  ]
}
</script>

<style scoped>
.nav-item {
  display: inline-flex;
}
</style>