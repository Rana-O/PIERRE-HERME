<template>
  <div class="footer-undeer">
    フッタアンダー
    <Button />
    <SnsButtons />
    <FooterNav />
    <small class="footer-copyrifht">© Copyright Pierre Hermé Paris 2016</small>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'
import SnsButtons from '@/components/organisms/SnsButtons.vue'
import FooterNav from '@/components/organisms/FooterNav.vue'
export default {
  name: 'FooterUnder',
  components: {
    Button,
    SnsButtons,
    FooterNav
  }
}
</script>

<style scoped>

</style>