<template lang="pug">
.students.mt-3.mb-3
    h1.text-center Список студентов
    .students__main
        studentsMainVue
</template>
    
<script>
import studentsMainVue from '../components/StudentsMain.vue'

export default {
    components: {
        studentsMainVue
    },
}
</script>

<style lang="scss" scoped>

</style>