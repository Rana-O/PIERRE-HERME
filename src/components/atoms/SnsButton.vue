<template>
  <div class="sns-button">
    <a href="#">
      <font-awesome-icon class="font-awesome" :icon="icon"></font-awesome-icon>
    </a>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'SnsButton',

  props: {
    icon: String as PropType<string>
  }
})
</script>

<style scoped>
  .sns-button a {
    display: block;
    width: 40px;
    height: 40px;
    outline-width: 0;
    background-color: white;
    color: black;
    text-decoration: none;
    text-align: center;
    border-radius: 50%;
    margin-left: 10px;
  }
  .font-awesome {
    height: 20px;
    margin: auto;
    width: 20px;
    padding-top: 10px;
  }
</style>