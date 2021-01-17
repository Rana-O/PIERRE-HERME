<template>
  <div class="journal-text">
    <p class="journal-title">{{ title }}</p>
    <p class="journal-date">{{ date }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'JournalText',

props: {
    title: String as PropType<string>,
    date: String as PropType<string>
  }
})
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