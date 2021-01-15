<template>
  <div id="pick-up">
    <Title title="PICK UP" />
    <div class="pick-up-container">

        <PickUpItem v-for="(item, index) in items" :key="index" :image="item.image" :imageTitle="item.title" :pickUpText="item.text" />

    </div>
  </div>
</template>

<script>
import Title from '@/components/atoms/Title.vue'
import PickUpItem from '@/components/molecs/PickUpItem.vue'
import { pickUp } from '@/components/atoms/images'

export default {
  name: 'PickUp',
  components: {
    Title,
    PickUpItem
  },
  data () {
    return {
      items: [
        {image: pickUp.PickUpFetish, title: 'FETISH Fraise Pistache', text: 'ピスタチオが持つかりかり感やほんのりと香ばしい風味と、イチゴのフレッシュな爽快感やフルーティな酸味が、高貴な味覚のコンビネーションを生んでいます。'},
        {image: pickUp.PickUpMacaron, title: 'MACARONS', text: 'この時期だけのマカロン詰合わせを販売中'},
        {image: pickUp.PickUpChocolat, title: 'CHOCOLATS', text: '口の中でソフトにとろける上質なショコラ。多彩なラインナップはこちらから'},
        {image: pickUp.PickUpGift, title: '詰合せギフトBOX', text: '大切な方へのギフトにもおすすめ、ギフトBOXのご案内'}
      ]
    }
  }
}
</script>

<style scoped>
  #pick-up {
    position: relative;
    background-color: white;
    width: 95%;
    margin: 0px auto;
  }
  .pick-up-container {
    display: flex;
    flex-wrap: wrap;
  }
  .pick-up-item-container {
    width: 50%;
  }
</style>