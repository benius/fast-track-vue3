<template>
  <div>
    <select v-model="selectedFamePlayer.id">
      <option disabled>Please select one</option>
      <option v-for="item in famePlayers" :value="item.id" :key="item.id">{{ item.name }}</option>
    </select>
  </div>
  <p>
    Selected player id: {{ selectedFamePlayer.id }}
  </p>
  <p>
    <a href="https://en.wikipedia.org/wiki/List_of_players_in_the_Naismith_Memorial_Basketball_Hall_of_Fame">
      List of players in the Naismith Memorial Basketball Hall of Fame
    </a>
  </p>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import { FamePlayer } from '@/components/models.ts'
import { loadAllFamePlayers } from '@/components/functions.ts'

export default defineComponent({
  name: 'FamePlayerSelector',
  setup () {
    const famePlayers: FamePlayer[] = loadAllFamePlayers()
    const selectedFamePlayer = reactive({
      id: 0
    })
    watch(selectedFamePlayer, (newVal, oldVal) => {
      selectedFamePlayer.id = famePlayers.findIndex(f => f.id === newVal.id)
    })

    return { famePlayers, selectedFamePlayer }
  }
})

</script>

<style scoped>

</style>
