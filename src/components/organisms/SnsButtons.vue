<template>
  <div id="sns-buttons">
    <SnsButton :icon="twitterIcon" />
    <SnsButton :icon="facebookIcon" />
    <SnsButton :icon="instagramIcon" />
    <SnsButton :icon="youtubeIcon" />
    <SnsButton :icon="lineIcon" />
  </div>
</template>

<script>
import SnsButton from '@/components/atoms/SnsButton.vue'
import { fab } from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'SnsButtons',
  components: {
    SnsButton
  },
  computed: {
    twitterIcon () {
      return fab.faTwitter
    },
    facebookIcon () {
      return fab.faFacebookF
    },
    instagramIcon () {
      return fab.faInstagram
    },
    youtubeIcon () {
      return fab.faYoutube
    },
    lineIcon () {
      return fab.faLine
    }
  }
}
</script>

<style scoped>
  #sns-buttons {
    display: flex;
    justify-content: flex-end;
  }
</style>