<template>
  <div id="footer-guide">
    <div class="footer-text">
      <a>HOME</a>
    </div>
    <div class="footer-arrow">
      <font-awesome-icon class="font-awesome" icon="arrow-up"></font-awesome-icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterGuide'
})
</script>

<style scoped>
  #footer-guide {
    background-color: white;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
  }
  .footer-text {
    color: #979699;
    font-size: 14px;
  }
  .font-awesome {
    color: black;
    width: 20px;
    height: 20px;
  }
</style>