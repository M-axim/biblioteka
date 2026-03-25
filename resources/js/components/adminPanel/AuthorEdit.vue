<template lang="pug">
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            v-chevronDoubleLeft()
            h2.h2.m-auto Информация об авторе
            v-house()
        .page-text.fs-4
            authorSetting()
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            v-house()
            h2.h2.m-auto Список авторов
            v-chevronDoubleRight()
        .page-text.fs-4.overflow-auto.scrollbar
            authorEditTable()
</template>

<script>

import {ref} from "vue"
import authorEditTable from "./AuthorPage/AuthorEditTable"
import authorSetting from "./AuthorPage/AuthorSetting"

export default {
    components: {
        authorEditTable,
        authorSetting
    },
    data() {
        return {
            documentTitle: "authorEdit",
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
