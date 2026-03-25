<template lang="pug">
.bookEdit-settings.row.mb-4
    .bookEdit-setting.col-12
        v-inputLine(:label="`Изображение`" :placeholder="`По умолчанию`" :disabled="readonly" :small="true" v-model:value="imgSrc")
    .bookEdit-setting.col-12
        v-inputLine(:label="`Заголовок`" :small="true" :disabled="readonly" v-model:value="title")
    .bookEdit-setting.col-12
        v-inputLine(:label="`Описание`" :small="true" :readonly="readonly" v-model:value="description")
    .bookEdit-setting.col-6.col-lg-4
        v-inputNumber(:label="`Год издания`" :small="true" :disabled="readonly" v-model:value="publicationDate")
    .bookEdit-setting.col-6.col-lg-4
        v-inputLine(:label="`Жанр(ы)`"
        v-model:value="tags"
        :toast="`genresList`"
        :small="true" :disabled="readonly"
        v-on:updateInput="updateInput")
    .bookEdit-setting.col-6.col-lg-4
        v-inputLine(:label="`Автор(ы)`"
        v-model:value="author"
        :toast="`authorList`"
        :small="true" :disabled="readonly"
        v-on:updateInput="updateInput")
    .bookEdit-setting.col-12.text-end
        button.btn.btn-secondary(v-if="!readonly" @click="fetchBookList({}), checkInputs()") Добавить
        button.btn.btn-secondary(v-else @click="clearFields()") Очистить
</template>

<script>

import {mapMutations, mapActions, mapGetters} from 'vuex'
import {ref} from "vue"

export default {
    data() {
        return {
            title: null,
            description: null,
            publicationDate: "1990",
            tags: [],
            author: [],
            imgSrc: null,
            readonly: false
        }
    },
    computed: {
        ...mapGetters(["bookToastFilter", "bookSearchTags", "bookList", "bookObject"]),
    },
    methods: {
        updateInput(id, filterNameTag) {
            this.updateBookToastFilter(false)
            if (filterNameTag !== null)
                this.updateBookSearchFilterType(filterNameTag)
            let toast = document.getElementById(id)
            toast = new bootstrap.Toast(toast)
            toast.show()
        },
        ...mapMutations(["updateBookSearchFilterType",
                        "updateBookToastFilter",
                        "newBookItem",
                        "languageChecked",
                        "genreChecked",
                        "authorChecked",
                        "cleanBookSearchTags",
                        "resetBookObject"]),
        ...mapActions(["fetchLanguageList", "fetchGenreLists", "fetchAuthorList", "fetchBookList"]),

        checkInputs() {
            if (this.imgSrc === null)
                this.imgSrc = "https://placehold.co/50"

            if (this.title !== null &&
            this.description !== null &&
            this.publicationDate !== null &&
            this.author.length >= 1 &&
            this.imgSrc !== null && 
            this.tags.length >= 1)
            {
                let tmpBook = {
                    id: this.bookList.length + 1,
                    title: this.title,
                    description: this.description,
                    imgSrc: this.imgSrc,
                    tags: this.tags,
                    author: this.author,
                    publicationDate: this.publicationDate,
                    bookAvailable : true
                }
                this.clearFields()
                this.newBookItem(tmpBook)
            }
        },
        clearFields() {
            this.title = null
            this.description = null
            this.publicationDate = "1990"
            this.tags = []
            this.author = []
            this.imgSrc = null
            this.resetBookObject()
            this.cleanTags()
        },
        cleanTags() {
            this.cleanBookSearchTags()
            this.languageChecked()
            this.genreChecked()
            this.authorChecked()
        },
    },  
    watch: {
        publicationDate: function() {
            if (this.publicationDate < 0)
                this.publicationDate = "0"
        },
        bookSearchTags: {
            deep: true,
            handler: function(e, we) {
                let tmpGenresList = []
                let tmpAuthorList = []

                this.bookSearchTags.map( (elem) => {
                    switch (elem.tag) {
                        case "genresList":
                            tmpGenresList.push(elem.label)
                            break;
                        case "authorList":
                            tmpAuthorList.push(elem.label)
                            break;
                        default:
                            break;
                    }
                })
                this.tags = tmpGenresList
                this.author = tmpAuthorList
            }
        },
        bookObject: {
            deep: true,
            handler(e) {
                if (this.bookObject !== null && this.bookObject) {
                    this.title = this.bookObject.title
                    this.description = this.bookObject.description
                    this.publicationDate = this.bookObject.publicationDate
                    this.tags = [this.bookObject.tags].join()
                    this.author = [this.bookObject.author].join()
                    this.imgSrc = this.bookObject.imgSrc

                    this.readonly = true
                } else {
                    this.readonly = false
                    this.clearFields()
                }
            }
        }
    },
    mounted() {
        this.fetchLanguageList()
        this.fetchGenreLists()
        this.fetchAuthorList()
    },
}
</script>

<style lang="scss" scoped>
</style>
