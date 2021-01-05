<template>
  <ul class="nav-child">
    <li>
      <a>{{ child_first }}</a>
    </li>
    <li>
      <a>{{ child_second }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavChild',
  props: [
    'child_first',
    'child_second'
  ]
}
</script>

<style scoped>
.nav-child li{
  margin: 20px 0;
  width: 27%;
}
.nav-child li:not(:last-child) {
  border-right: 1px solid black;
}
</style>