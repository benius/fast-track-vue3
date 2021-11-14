<template>
  <div>
    <fame-player-selector />
    <p/>
    <fame-player-detail :fame-player-id="selectedPlayerId.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import FamePlayerDetail from '@/components/FamePlayer.vue'
import FamePlayerSelector from '@/components/FamePlayerSelector.vue'

export default defineComponent({
  name: 'HallOfFame',
  components: {
    FamePlayerDetail: FamePlayerDetail,
    FamePlayerSelector: FamePlayerSelector
  },
  setup () {
    const selectedPlayerId = reactive({
      id: 20210001
    })
    return { selectedPlayerId }
  }
})

</script>

<style scoped>

</style>
