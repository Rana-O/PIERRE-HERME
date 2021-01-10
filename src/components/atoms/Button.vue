<template>
  <div class="button">
    <a>
      <span>MORE</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.14194 5.9374">
        <polygon points="5.142 2.969 2.571 4.453 0 5.937 0 2.969 0 0 2.571 1.484 5.142 2.969" class="-buttonArrow"></polygon>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name:'Button'
}
</script>

<style scoped>
  .button {
    padding-top: 50px;
  }
  .button a {
    display: block;
    position: relative;
    width: 270px;
    background-color: #f7f6fb;
    font-size: 17px;
    padding: 10px;
    margin: 0 auto;
  }
  .button svg {
    width: 6px;
    height: 6px;
    position: absolute;
    right: 17px;
    margin: 9px;
  }
</style>