<template lang="pug">

studentSetting
.students__content
    studentContent
</template>

<script>
import studentContent from './students/StudentContent'
import studentSetting from './students/StudentSetting'

    export default {
        components: {
            studentContent,
            studentSetting
        }
    }
</script>

<style scoped>

</style>