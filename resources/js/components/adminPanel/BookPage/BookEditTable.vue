<template lang="pug">
table.table.table-sm.table-borderless.page-table-cover.fs-7.user-select-none
    thead
        tr.text-nowrap.page-table-cover.fs-7
            th.fs-7.text-wrap.text-center.align-middle.table-th-small(data-id="id" scope="col") Код книги
            th.fs-7.text-wrap.text-center.align-middle(data-id="imgSrc" scope="col") Изображение
            th.fs-7.text-wrap.text-center.align-middle(data-id="title" scope="col") Заголовок
            th.fs-7.text-wrap.text-center.align-middle(data-id="description" scope="col") Описание
            th.fs-7.text-wrap.text-center.align-middle.table-th-small(data-id="publicationDate" scope="col") Год издания
            th.fs-7.text-wrap.text-center.align-middle(data-id="countGoods" scope="col") Автор(ы)
            th.fs-7.text-wrap.text-center.align-middle(data-id="tags" scope="col") Тег(и)
            th.fs-7.text-wrap.text-center.align-middle(data-id="setting" scope="col") Настройки
    tbody
        tr.fs-5.text-nowrap.page-table-cover.fs-7(v-for="(item, index) in bookList" :key="index")
            th.fs-7.page-table-cover(scope="row") {{index+1}}
            td.fs-7.page-table-cover {{item.imgSrc.substring(0, 20) + "..."}}
            td.fs-7 {{item.title.substring(0, 30) + "..."}}
            td.fs-7 {{item.description.substring(0, 30) + "..."}}
            td.fs-7 {{item.publicationDate}}
            td.fs-7 {{(item.author.join(", ")).substring(0, 15) + "..."}}
            td.fs-7 {{(item.tags.join(", ")).substring(0, 15) + "..."}}
            td.fs-7.text-center
                button.me-2.btn.border.border-dark.btn-sm.btn-outline-secondary.text-Light.fs-7(:data-id="item.id" @click="fetchBookList({}), deleteBook(item.id)" type="button") Удалить
                button.me-2.btn.border.border-dark.btn-sm.btn-outline-secondary.text-Light.fs-7(:data-id="item.id" @click="getBookObject(item.id)" type="button") Посмотреть
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
        ...mapGetters(["bookList", "bookObject"]),
    },
    methods: {
        ...mapActions(["fetchBookList"]),
        ...mapMutations(["newBook", "deleteBook", "getBookObject"])
    },
    async mounted() {
        this.fetchBookList({allBooks : true})
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