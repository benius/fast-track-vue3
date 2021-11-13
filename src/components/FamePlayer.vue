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
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'FamePlayer',
  setup () {
    const famePlayer = reactive({
      id: 1000,
      name: 'Michal Jordan',
      position: 'G',
      year: 2009,
      achievements: [
        '6× NBA Champion (1991–1993, 1996–1998)',
        '5× NBA MVP (1988, 1991–92, 1996, 1998)',
        '14× NBA All-Star (1985–1993, 1996–1998, 2002–2003)',
        '6× NBA Finals MVP (all-time record)(1991–93, 1996–98)',
        '10× All-NBA First Team Selection (1987–1993, 1996–1998)',
        '9× NBA All-Defensive First Team Selection (1988–1993, 1996–1998)',
        '1× NBA Defensive Player of the Year (1988)',
        'NBA All-Rookie First Team (1985)',
        'NBA Rookie of the Year (1985)',
        '10× NBA Season Scoring Title (all-time record)(1987–1993, 1996–1998)',
        '3× NBA Season Steals Leader (1988, 1990, 1993)',
        'NCAA Men\'s Basketball Champion (1982)',
        'Naismith Award (1984)',
        '2× Summer Olympics  Gold: 1984, 1992',
        'FIBA Americas Championship  Gold: 1992',
        'Pan American Games  Gold: 1983',
        '2× USA Basketball Male Athlete of the Year (1983, 1984)',
        'Member of the "Dream Team" inducted as a unit in 2010',
        '50 Greatest Players in NBA History',
        'FIBA Hall of Fame (2015)'
      ]
    })
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
