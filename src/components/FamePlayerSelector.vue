<template>
  <div>
    <select @change="switchOption($event.target.value)">
      <option :value="-1" selected>Please select one</option>
      <option v-for="item in famePlayers" :value="item.id" :key="item.id">{{ item.name }}</option>
    </select>
  </div>
  <p>
    Selected player id: {{ playerId.id }}
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
  setup (props, { emit }) {
    const famePlayers: FamePlayer[] = loadAllFamePlayers()
    const playerId = reactive({
      id: 0
    })
    watch(() => playerId.id, (newId) => {
      console.log('Watched new id: ', newId)
      emit('updatePlayerId', newId)
    })

    return { famePlayers, playerId }
  },
  emits: {
    updatePlayerId: null
  },
  methods: {
    switchOption (val: string) {
      const idx = this.famePlayers.findIndex(f => f.id === Number(val))
      if (idx > -1) {
        const selectedId = this.famePlayers[idx].id
        this.playerId.id = selectedId
        console.log('switchOption:', selectedId)
      }
    }
  }
})
</script>

<style scoped>

</style>
