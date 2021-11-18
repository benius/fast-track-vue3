<template>
  <div>
    <table>
      <thead>{{ player.famePlayer.name }}</thead>
      <tr>
        <td>ID</td>
        <td>{{ player.famePlayer.id }}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{{ player.famePlayer.name }}</td>
      </tr>
      <tr>
        <td>Position</td>
        <td>{{ player.famePlayer.position }}</td>
      </tr>
      <tr>
        <td>Year</td>
        <td>{{ player.famePlayer.year }}</td>
      </tr>
      <tr>
        <td>Achievements</td>
        <td>
          <ul>
            <li v-for="item in player.famePlayer.achievements" :key="item">
              {{ item }}
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import { loadAllFamePlayers } from '@/components/functions.ts'
import { FamePlayer } from '@/components/models'

export default defineComponent({
  name: 'FamePlayer',
  props: {
    playerId: Number
  },
  setup (props) {
    const famePlayers: FamePlayer[] = loadAllFamePlayers()
    const idx: number = famePlayers.findIndex(f => f.id === props.playerId)
    const player = reactive({
      famePlayer: idx > -1 ? famePlayers[idx] : famePlayers[0]
    })
    watch(() => props.playerId, (newId) => {
      console.log('Watched new props.famePlayerId: ', newId)
      const idx: number = famePlayers.findIndex(f => f.id === newId)
      player.famePlayer = idx > -1 ? famePlayers[idx] : famePlayers[0]
    })
    return { player }
  }
})
</script>

<style scoped lang="scss">
table, th, td {
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
}
</style>
