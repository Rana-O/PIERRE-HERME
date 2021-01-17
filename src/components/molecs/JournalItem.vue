<template>
  <div class="journal-item">
    <JournalImage :image="image"/>
    <JournalText :title="title" :date="date" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import JournalImage from '@/components/atoms/JournalImage.vue'
import JournalText from '@/components/atoms/JournalText.vue'

export default Vue.extend({
  name: 'JournalItem',

  components: {
    JournalImage,
    JournalText
  },

  props: {
    image: String as PropType<string>,
    title:String as PropType<string>,
    date: String as PropType<string>
  }
})
</script>

<style scoped>

</style>