<template lang="pug">
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            v-chevronDoubleLeft()
            h2.h2.m-auto Информация о книге
            v-house()
        .page-text.fs-4
            bookSetting()
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            v-house()
            h2.h2.m-auto Список книг
            v-chevronDoubleRight()
        .page-text.fs-4.overflow-auto.scrollbar
            bookEditTable()

</template>

<script>

import {ref} from "vue"
import bookEditTable from './BookPage/BookEditTable'
import bookSetting from './BookPage/BookSetting'

export default {
    components: {
        bookEditTable,
        bookSetting
    },
    data() {
        return {
            documentTitle: "bookEdit",
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
