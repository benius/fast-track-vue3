<template>
  <employee-detail/>
</template>

<script lang="ts">
import EmployeeDetail from '@/components/Employee.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Members',
  components: { EmployeeDetail }
})
</script>

<style scoped>

</style>
