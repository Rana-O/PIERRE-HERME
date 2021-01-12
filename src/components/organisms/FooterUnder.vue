<template>
  <div id="footer-under">
    <div class="button-container">
      <Button name="FRENCH SITE"/>
    </div>
    <div class="sns-buttons-container">
      <SnsButtons />
    </div>
    <div class="footer-nav-container">
      <FooterNav />
    </div>
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
  #footer-under {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .button-container {
    width: 50%;
    text-align: left;
  }
  .sns-buttons-container {
    width: 50%;
    text-align: right;
  }
  .footer-nav-container {
    width: 100%;
    text-align: left;
  }
  .footer-copyright {
    width: 100%;
  }

</style>