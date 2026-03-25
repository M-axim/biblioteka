<template lang="pug">
table.table.table-sm.table-borderless.page-table-cover.fs-7.user-select-none
    thead
        tr.text-nowrap.page-table-cover.fs-7
            th.fs-7.text-wrap.text-center.align-middle.table-th-small(data-id="id" scope="col") Код жанра
            th.fs-7.text-wrap.text-center.align-middle(data-id="imgSrc" scope="col") Название
            th.fs-7.text-wrap.text-center.align-middle.table-th-small(data-id="setting" scope="col") Настройки
    tbody
        tr.text-nowrap.page-table-cover.fs-7(v-for="(item, index) in genreLists" :key="index")
            th.fs-7(scope="col") {{index+1}}
            td.fs-7 {{item.label}}
            td.fs-7.text-center
                button.me-2.btn.border.border-dark.btn-sm.btn-outline-secondary.text-Light.fs-7(:data-id="item.id" @click="deleteGenres(item.id)" type="button") Удалить
                button.me-2.btn.border.border-dark.btn-sm.btn-outline-secondary.text-Light.fs-7(:data-id="item.id" @click="getGenreObject(item.id)" type="button") Изменить

</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    components: {
        
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["genreLists"]),
    },
    methods: {
        ...mapActions(["fetchGenreLists"]),
        ...mapMutations(["deleteGenres", "getGenreObject"])
    },
    watch: {
    },
    async mounted() {
        this.fetchGenreLists()
    },
}
</script>

<style lang="scss" scoped>
.table-th-small {
    width: 50px;
}
.fs-7 {
    font-size: .7rem !important;
}
</style>