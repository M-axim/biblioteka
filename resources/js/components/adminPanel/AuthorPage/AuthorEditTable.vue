<template lang="pug">
table.table.table-sm.table-borderless.page-table-cover.fs-7.user-select-none
    thead
        tr.text-nowrap.page-table-cover.fs-7
            th.fs-6.text-wrap.text-center.align-middle.table-th-small(data-id="id" scope="col") Код автора
            th.fs-6.text-wrap.text-center.align-middle(data-id="imgSrc" scope="col") ФИО автора
            th.fs-6.text-wrap.text-center.align-middle.table-th-small(data-id="setting" scope="col") Настройки
    tbody
        tr.text-nowrap.page-table-cover.fs-7(v-for="(item, index) in authorList" :key="index")
            th.fs-6(scope="col") {{index+1}}
            td.fs-6 {{item.label}}
            td.fs-6.text-center
                button.me-2.btn.border.border-dark.btn-sm.btn-outline-secondary.text-Light.fs-7(:data-id="item.id" @click="deleteAuthor(item.id)" type="button") Удалить
                button.me-2.btn.border.border-dark.btn-sm.btn-outline-secondary.text-Light.fs-7(:data-id="item.id" @click="getAuthorObject(item.id)" type="button") Изменить
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
        ...mapGetters(["authorList"]),
    },
    methods: {
        ...mapActions(["fetchAuthorList"]),
        ...mapMutations(["deleteAuthor", "getAuthorObject"])
    },
    watch: {
    },
    async mounted() {
        this.fetchAuthorList()
    },
}
</script>

<style lang="scss" scoped>
.table-th-small {
    width: 50px;
}
</style>