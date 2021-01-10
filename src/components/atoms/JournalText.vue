<template>
  <div class="journal-text">
    <p class="journal-title">{{ title }}</p>
    <p class="journal-date">{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: 'JournalText',
  props: [
    'title',
    'date'
  ]
}
</script>

<style scoped>
  .journal-text {
    font-size: 14px;
    width: 90%;
    margin: auto;
    text-align: left;
  }
  .journal-text .journal-date {
    color: #808080;
  }
</style>