<template>
  <div>
    <fame-player-selector @update-player-id="updatePlayerWithId"/>
    <p/>
    <fame-player-detail :player-id="playerId"/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import FamePlayerDetail from '@/components/FamePlayer.vue'
import FamePlayerSelector from '@/components/FamePlayerSelector.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HallOfFame',
  components: {
    FamePlayerDetail: FamePlayerDetail,
    FamePlayerSelector: FamePlayerSelector
  },
  setup () {
    const store = useStore()
    const playerId = computed({
      get () {
        return store.state.playerId
      },
      set (newId) {
        console.log('famePlayerId newId: ', newId)
        store.commit('setPlayerId', newId)
      }
    })
    return { playerId }
  },
  methods: {
    updatePlayerWithId (selectedId: number) {
      console.log('updatePlayerWithId:', selectedId)
      console.log(typeof selectedId)
      this.playerId = selectedId
      console.log('this.famePlayerId = ', this.playerId)
    }
  }
})

</script>

<style scoped>

</style>
