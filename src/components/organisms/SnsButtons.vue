<template>
  <div id="sns-buttons">
    <SnsButton :icon="twitterIcon" />
    <SnsButton :icon="facebookIcon" />
    <SnsButton :icon="instagramIcon" />
    <SnsButton :icon="youtubeIcon" />
    <SnsButton :icon="lineIcon" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SnsButton from '@/components/atoms/SnsButton.vue'
import { fab, IconDefinition } from '@fortawesome/free-brands-svg-icons'

export default Vue.extend({
  name: 'SnsButtons',

  components: {
    SnsButton
  },

  computed: {
    twitterIcon (): IconDefinition {
      return fab.faTwitter
    },
    facebookIcon (): IconDefinition {
      return fab.faFacebookF
    },
    instagramIcon (): IconDefinition {
      return fab.faInstagram
    },
    youtubeIcon (): IconDefinition {
      return fab.faYoutube
    },
    lineIcon (): IconDefinition {
      return fab.faLine
    }
  }
})
</script>

<style scoped>
  #sns-buttons {
    display: flex;
    justify-content: flex-end;
  }
</style>