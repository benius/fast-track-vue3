<template>
  <div>
    <table>
      <thead>{{ famePlayer.name }}</thead>
      <tr>
        <td>ID</td>
        <td>{{ famePlayer.id }}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{{ famePlayer.name }}</td>
      </tr>
      <tr>
        <td>Position</td>
        <td>{{ famePlayer.position }}</td>
      </tr>
      <tr>
        <td>Year</td>
        <td>{{ famePlayer.year }}</td>
      </tr>
      <tr>
        <td>Achievements</td>
        <td>
          <ul>
            <li v-for="item in famePlayer.achievements" :key="item">
              {{ item }}
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { loadAllFamePlayers } from '@/components/functions.ts'
import { FamePlayer } from '@/components/models'

export default defineComponent({
  name: 'FamePlayer',
  props: {
    famePlayerId: Number
  },
  setup (props) {
    const famePlayers: FamePlayer[] = loadAllFamePlayers()
    const idx: number = famePlayers.findIndex(f => f.id === props.famePlayerId)
    const famePlayer = reactive(famePlayers[idx])

    return { famePlayer }
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
