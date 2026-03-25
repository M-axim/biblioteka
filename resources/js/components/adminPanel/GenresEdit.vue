<template lang="pug">
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            v-chevronDoubleLeft()
            h2.h2.m-auto Информация о жанре
            v-house()
        .page-text.fs-4
            genresSetting()
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            v-house()
            h2.h2.m-auto Список жанров
            v-chevronDoubleRight()
        .page-text.fs-4.overflow-auto.scrollbar
            genresEditTable()
</template>

<script>
import genresEditTable from './GenresPage/GenresEditTable'
import genresSetting from './GenresPage/GenresSetting'
import {ref} from "vue"

export default {
    components: {
        genresEditTable,
        genresSetting
    },
    data() {
        return {
            documentTitle: "genresEdit",
            tableHeight: ref(window.innerHeight)._value - 210,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>