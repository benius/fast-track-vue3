<template>
  <div>
    <table>
      <tr>
        <td>ID</td>
        <td> {{ employee.id }} </td>
      </tr>
      <tr>
        <td>NAME</td>
        <td> {{ employee.name }} </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Employee',
  setup () {
    const employee = reactive({
      id: 20211009,
      name: 'Michael Chen'
    })
    return { employee }
  }
})
</script>

<style scoped lang="scss">
table, tr, td {
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
}
</style>
