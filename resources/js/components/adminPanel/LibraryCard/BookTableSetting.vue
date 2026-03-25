<template lang="pug">
.libraryCard-settings.row
    .libraryCard-setting.col-12
        v-inputNumber(:label="`Инвентарный номер книги`" :small="true" v-model:value="bookId")
        p.text-danger.fs-5(v-if="bookError") Книга с таким номером не найдена 
    .bookEdit-setting.col-12.text-end
        button.btn.btn-outline-secondary(@click="checkInputs()") Добавить
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            bookId: "",
            bookError: false
        }
    },
    computed: {
        ...mapGetters(["bookObject"])
    },
    methods: {
        ...mapMutations(["newLibraryCardBook", "getBookObject", "resetBookObject"]),
        checkInputs() {
            if (this.bookId !== "") {
                this.bookError = false

                this.getBookObject(Number(this.bookId))
                let book = this.bookObject

                if (book) {
                    this.resetBookObject()
                    this.newLibraryCardBook(book)
                    this.bookId = ""
                } else {
                    this.bookError = true
                }

            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>