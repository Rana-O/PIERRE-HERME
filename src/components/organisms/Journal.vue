<template>
  <div id="journal">
    <div class="journal-title">
      <a>The Journal
        <span>news and topics</span>
      </a>
    </div>
    <JournalItems />
  </div>
</template>

<script>
import JournalItems from '@/components/organisms/JournalItems.vue'

export default {
  name:'Journal',
  components: {
    JournalItems
  }
}
</script>

<style scoped>
  #journal {
    width: 95%;
    margin: 0 auto;
    position: relative;
    background-color: white;
  }
  .journal-title {
    font-size: 30px;
    line-height: 1em;
    padding: 50px 0;
    font-family: "adobe-caslon-pro","Yu Mincho",YuMincho,"HG明朝E","ＭＳ Ｐ明朝","ＭＳ 明朝",seri
  }
  .journal-title span {
    display: block;
    font-size: 16px;
    letter-spacing: .5px;
  }
</style>