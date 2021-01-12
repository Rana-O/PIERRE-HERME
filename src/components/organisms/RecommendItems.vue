<template>
  <div id="recommend-items">
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon1" name="マカロン 6個詰め合わせ WIND AND SEA × PIERRE HERMÉ PARIS" price="¥3,456" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon2" name="マカロン6個詰合わせ" price="¥2,808" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon3" name="マカロン15個詰合わせ" price="¥5,940" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon4" name="クロックノワゼット" price="¥1,296" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon5" name="サブレ イスパハン" price="¥1,620" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon6" name="キャレ ショコラ オ レ エルメ" price="¥2,700" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon7" name="キャレ ショコラ ノワール" price="¥2,700" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon8" name="アソリュティマン ド ショコラ 14個入り" price="¥5,670" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon9" name="マロングラッセ 6個詰合わせ" price="¥3,888" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon10" name="マロングラッセ 12個詰合わせ" price="¥7,560" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon11" name="Made in ピエール・エルメ ジュース4本詰合わせ" price="¥3,240" />
    </div>
    <div class="recommend-item-container">
      <RecommendItem :recommendImage="icon12" name="Made in ピエール・エルメ ジュース8本詰合わせ" price="¥5,400" />
    </div>
  </div>
</template>

<script>
import RecommendItem from '@/components/molecs/RecommendItem.vue'
import { recommend } from '@/components/atoms/images'

export default {
  name:'RecommendItems',
  components: {
    RecommendItem
  },
  computed: {
    icon1 () { return recommend.Icon1 },
    icon2 () { return recommend.Icon2 },
    icon3 () { return recommend.Icon3 },
    icon4 () { return recommend.Icon4 },
    icon5 () { return recommend.Icon5 },
    icon6 () { return recommend.Icon6 },
    icon7 () { return recommend.Icon7 },
    icon8 () { return recommend.Icon8 },
    icon9 () { return recommend.Icon9 },
    icon10 () { return recommend.Icon10 },
    icon11 () { return recommend.Icon11 },
    icon12 () { return recommend.Icon12 },
  }
}
</script>

<style scoped>
  #recommend-items {
    display: flex;
    flex-wrap: wrap;
  }
  .recommend-item-container {
    width: 25%;
  }
</style>