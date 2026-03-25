<template lang="pug">
.accordion-table.mt-3.overflow-scroll.scrollbar(style="height: 300px")
    table.table.table-sm.table-borderless.page-table-cover.fs-7.user-select-none
        thead
            tr.text-nowrap.page-table-cover.fs-7
                th.fs-7.text-wrap.text-center.align-middle.table-th-small id
                th.fs-7.text-wrap.text-center.align-middle Номер книги
                th.fs-7.text-wrap.text-center.align-middle Раздел
                th.fs-7.text-wrap.text-center.align-middle Автор
                th.fs-7.text-wrap.text-center.align-middle Заглавие книги
                th.fs-7.text-wrap.text-center.align-middle Настройки
        tbody
            tr.text-nowrap.page-table-cover.fs-7(v-for="(item, index) in books" :key="index")
                td.fs-7(scope="col") {{ index + 1 }}
                td.fs-7 {{ item.id }}
                td.fs-7 {{ item.tags[0] }}
                td.fs-7 {{ item.author.join(", ") }}
                td.fs-7 {{ item.title}}
                td.fs-7.text-center
                    button.me-2.btn.border.border-dark.btn-sm.btn-outline-secondary.text-Light.fs-7(:data-id="item.id" @click="deleteLibraryCardBook(index)" type="button") Удалить
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'

export default {
    props: {
        books: {
            type: Array,
            default: []
        },
    },
    methods: {
        ...mapMutations(["deleteLibraryCardBook"]),

        showBooks(books) {
            console.log(books);
        }
    },
}
</script>

<style lang="scss" scoped>

</style>