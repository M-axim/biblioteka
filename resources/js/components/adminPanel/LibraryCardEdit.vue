<template lang="pug">
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            v-chevronDoubleLeft()
            h2.h2.m-auto Данные клиента
            v-house()
        .page-text.fs-4
            libraryCardSetting()
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            v-house()
            h2.h2.m-auto Список клиентов
        .page-text.fs-4.overflow-auto.scrollbar
            libraryCardEditTable()
</template>

<script>
import libraryCardEditTable from './LibraryCard/LibraryCardEditTable'
import libraryCardSetting from './LibraryCard/LibraryCardSetting'

import {ref} from "vue"

export default {
    components: {
        libraryCardEditTable,
        libraryCardSetting
    },
    data() {
        return {
            documentTitle: "libraryCardEdit",
            tableHeight: ref(window.innerHeight)._value - 210,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>