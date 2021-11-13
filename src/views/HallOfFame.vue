<template>
  <div>
    <fame-player-selector />
    <p/>
    <FamePlayerDetail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FamePlayerDetail from '@/components/FamePlayer.vue'
import FamePlayerSelector from '@/components/FamePlayerSelector.vue'

export default defineComponent({
  name: 'HallOfFame',
  components: {
    FamePlayerDetail: FamePlayerDetail,
    FamePlayerSelector: FamePlayerSelector
  }
})

</script>

<style scoped>

</style>
