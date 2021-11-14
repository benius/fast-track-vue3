<template>
  <div>
    <select @change="switchOption($event.target.value)">
      <option :value="-1" selected>Please select one</option>
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
import { defineComponent, reactive } from 'vue'
import { FamePlayer } from '@/components/models.ts'
import { loadAllFamePlayers } from '@/components/functions.ts'

export default defineComponent({
  name: 'FamePlayerSelector',
  setup () {
    const famePlayers: FamePlayer[] = loadAllFamePlayers()
    const selectedFamePlayer = reactive({
      id: 0
    })
    return { famePlayers, selectedFamePlayer }
  },
  methods: {
    switchOption (val: string) {
      const idx = this.famePlayers.findIndex(f => f.id === Number(val))
      console.log(idx)
      if (idx > -1) {
        this.selectedFamePlayer.id = this.famePlayers[idx].id
      }
    }
  }
})

</script>

<style scoped>

</style>
