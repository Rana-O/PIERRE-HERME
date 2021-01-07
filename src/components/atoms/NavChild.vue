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

<script>
export default {
  name: 'NavChild',
  props: [
    'childFirst',
    'childSecond'
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