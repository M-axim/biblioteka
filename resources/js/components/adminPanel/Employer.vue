<template lang="pug">
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            v-chevronDoubleLeft()
            h2.h2.m-auto Данные сотрудника
            v-house()
        .page-text.fs-4
            employerSetting()
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            v-house()
            h2.h2.m-auto Список сотрудников
            v-chevronDoubleRight()
        .page-text.fs-4.overflow-auto.scrollbar
            employerEditTable()
</template>

<script>

import {ref} from "vue"
import employerEditTable from "./EmployerPage/EmployerEditTable"
import employerSetting from "./EmployerPage/EmployerSetting"

export default {
    components: {
        employerEditTable,
        employerSetting
    },
    data() {
        return {
            documentTitle: "EmployerEdit",
            tableHeight: ref(window.innerHeight)._value - 210,
        }
    },
    computed: {
    },
    methods: {
    },
    watch: {

    },
}
</script>

<style lang="scss" scoped>
</style>
