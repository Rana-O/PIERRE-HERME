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
import Icon1 from '@/assets/recommend/005398-1.jpg'
import Icon2 from '@/assets/recommend/004070-2.jpg'
import Icon3 from '@/assets/recommend/004060-3.jpg'
import Icon4 from '@/assets/recommend/000040-4.jpg'
import Icon5 from '@/assets/recommend/004317-5.jpg'
import Icon6 from '@/assets/recommend/003857-6.jpg'
import Icon7 from '@/assets/recommend/003862-7.jpg'
import Icon8 from '@/assets/recommend/005195-8.jpg'
import Icon9 from '@/assets/recommend/005273-9.jpg'
import Icon10 from '@/assets/recommend/005277-10.jpg'
import Icon11 from '@/assets/recommend/005334-11.jpg'
import Icon12 from '@/assets/recommend/005337-12.jpg'
export default {
  name:'RecommendItems',
  components: {
    RecommendItem
  },
  computed: {
    icon1 () { return Icon1 },
    icon2 () { return Icon2 },
    icon3 () { return Icon3 },
    icon4 () { return Icon4 },
    icon5 () { return Icon5 },
    icon6 () { return Icon6 },
    icon7 () { return Icon7 },
    icon8 () { return Icon8 },
    icon9 () { return Icon9 },
    icon10 () { return Icon10 },
    icon11 () { return Icon11 },
    icon12 () { return Icon12 },
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