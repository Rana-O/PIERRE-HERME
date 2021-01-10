<template>
  <div id="pick-up">
    <Title title="PICK UP" />
    <div class="pick-up-item-container">
      <PickUpItem :image="pickUpFetish" imageTitle="FETISH Fraise Pistache" pickUpText="ピスタチオが持つかりかり感やほんのりと香ばしい風味と、イチゴのフレッシュな爽快感やフルーティな酸味が、高貴な味覚のコンビネーションを生んでいます。" />
    </div>
    <div class="pick-up-item-container">
      <PickUpItem :image="pickUpMacaron" imageTitle="MACARONS" pickUpText="この時期だけのマカロン詰合わせを販売中" />
    </div>
    <div class="pick-up-item-container">
      <PickUpItem :image="pickUpChocolat" imageTitle="CHOCOLATS" pickUpText="口の中でソフトにとろける上質なショコラ。多彩なラインナップはこちらから" />
    </div>
    <div class="pick-up-item-container">
      <PickUpItem :image="pickUpGift" imageTitle="詰合せギフトBOX" pickUpText="大切な方へのギフトにもおすすめ、ギフトBOXのご案内" />
    </div>
  </div>
</template>

<script>
// import Title from '@/components/atoms/Title.vue'
import PickUpItem from '@/components/molecs/PickUpItem.vue'
import PickUpFetish from '@/assets/pick-up/top-bnr_fetish-fraise-pistache_2020.jpg'
import PickUpMacaron from '@/assets/pick-up/main_macarons.jpg'
import PickUpChocolat from '@/assets/pick-up/top-bnr_chocolat-2019.jpg'
import PickUpGift from '@/assets/pick-up/top-bnr_gift.jpg'

export default {
  name: 'PickUp',
  components: {
    // Title,
    PickUpItem
  },
  computed: {
    pickUpFetish () {return PickUpFetish},
    pickUpMacaron () {return PickUpMacaron},
    pickUpChocolat () {return PickUpChocolat},
    pickUpGift () {return PickUpGift},
  }
}
</script>

<style scoped>
  #pick-up {
    position: relative;
    background-color: white;
    width: 95%;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
  }
  .pick-up-item-container {
    width: 50%;
  }
</style>