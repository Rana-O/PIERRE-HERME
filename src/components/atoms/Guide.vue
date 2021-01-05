<template>
<div id="guide">
  <font-awesome-icon class="font-awesome" :icon="iconClassName"></font-awesome-icon>
  <a>{{ title }}</a>
</div>
</template>

<script>
export default {
  name: 'Guide',
  props: [
    'title',
    'icon'
  ],
  computed: {
    iconClassName () {
      return `${this.icon}`
    }
  }
}
</script>

<style scoped>
  #guide {
    margin: 12px 10px;
  }
  #guide a {
    margin-left: 8px;
  }
  .font-awesome {
    font-size: 20px;
  }
</style>