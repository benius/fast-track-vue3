<template>
  <div>
    <table>
      <thead>{{ employee.firstName }} {{ employee.lastName }}</thead>
      <tr>
        <td>ID</td>
        <td>{{ employee.employeeId }}</td>
      </tr>
      <tr>
        <td>Frist Name</td>
        <td>{{ employee.firstName }}</td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td>{{ employee.lastName }}</td>
      </tr>
      <tr>
        <td>Birthday</td>
        <td>{{ employee.birthday }}</td>
      </tr>
      <tr>
        <td>Country</td>
        <td>{{ employee.country }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'EmployeeDetail',
  setup () {
    const employee = reactive({
      employeeId: '19911001',
      firstName: 'John',
      lastName: 'Chen',
      birthday: '1970-10-05',
      country: 'TW'
    })
    return { employee }
  }
})
</script>

<style scoped lang="scss">
table, th, td {
  border: 1px solid black;
}
</style>
