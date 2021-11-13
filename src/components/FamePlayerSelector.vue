<template>
  <div>
    <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option disabled value="">Please select one</option>
      <option v-for="item in famePlayers" :value="item.id" :key="item.id">{{ item.name }}</option>
    </select>
  </div>
  <p>
    Selected player id: {{ modelValue }}
  </p>
  <p>
    <a href="https://en.wikipedia.org/wiki/List_of_players_in_the_Naismith_Memorial_Basketball_Hall_of_Fame">
      List of players in the Naismith Memorial Basketball Hall of Fame
    </a>
  </p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { FamePlayer } from '@/components/models.ts'
import { loadAllFamePlayers } from '@/components/functions.ts'

export default defineComponent({
  name: 'FamePlayerSelector',
  props: {
    modelValue: String
  },
  setup (props) {
    // let famePlayers = reactive(props.allPlayers)
    const famePlayers: FamePlayer[] = loadAllFamePlayers()
    const selectedFamePlayerId = ref(props.modelValue)
    return { famePlayers, selectedFamePlayerId }
  }
})

</script>

<style scoped>

</style>
