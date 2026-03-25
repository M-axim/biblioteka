<template lang="pug">
.offcanvas.offcanvas-end#offcanvasRight(tabindex="-2" data-bs-backdrop="false" data-bs-scroll="true" aria-labelledby="offcanvasRightLabel")
    .offcanvas-header
        h5.offcanvas-title#offcanvasRightLabel Расширенный поиск
        button.btn-close(type="button" data-bs-dismiss="offcanvas" aria-label="Close")
    .offcanvas-body
        form.form.bookListsSearch.accordion#accordionSearch.p-2.border.border-light
            .accordion-item(v-for="(elem, index) in accordionItems" :key="index")
                .accordion-header
                    div.accordion-button
                        span.text-bold {{ elem.title }}
                .accordion-collapse.collapse.show(:id=`"collapse-" + index` :data-bs-parent=`"collapse-" + index`)
                    .accordion-body
                        v-inputSelect(v-if="elem.nameInput === 'select'" v-model:value="sortType")

                        v-inputCheck(v-else-if="elem.nameInput === 'check'"
                        :items="elem.options"
                        :filterNameTag="elem.filterNameTag"
                        v-model:value="bookSearchTags"
                        v-on:updateInput="updateInput")

                        v-inputNumber(:compare="true" v-else-if="elem.nameInput === 'number'")
                        a.btn.btn-outline(@click="showToas('advanceSearchFilter', elem.filterNameTag)" v-if="elem.advancedSearch") Еще
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

    export default {
        components: {
            
        },
        data() {
            return {
                accordionItems: [],
                sortType: ""
            }
        },
        computed: {
            ...mapGetters(["bookSearchFilterType", "bookSearchTags", "languageList", "authorList", "genreLists"])
        },
        methods: {
            ...mapMutations(["updateBookSearchFilterType", "updateBookSearchTags", "languageChecked", "authorChecked", "genreChecked"]),
            ...mapActions(["fetchLanguageList", "fetchGenreLists", "fetchBookList", "fetchAuthorList"]),

            showToas(id, filterNameTag = null) {
                if (filterNameTag !== null)
                    this.updateBookSearchFilterType(filterNameTag)
                let toast = document.getElementById(id)
                toast = new bootstrap.Toast(toast)
                toast.show()
            },
            updateInput(item, filterNameTag) {
                item.filterNameTag = filterNameTag
                this.updateBookSearchTags(item)
                switch (item.filterNameTag) {
                    case "languageList":
                        this.languageChecked(item)
                        break;
                    case "genresList":
                        this.genreChecked(item)
                        break;
                    case "authorList":
                        this.authorChecked(item)
                        break;
                }
                this.fetchBookList({page: 0, tags: this.bookSearchTags.map(e => e.label)})
            }
        },
        watch: {
            languageList: function(e) {
                //console.log(e);
            },
            sortType: function(e) {
                //console.log(e);
            }
        },
        async mounted() {
            this.fetchLanguageList()
            this.fetchGenreLists()
            this.fetchAuthorList()
            this.accordionItems = [
                    {
                        title: "Сортировка",
                        advancedSearch: false,
                        nameInput: "select",
                        filterNameTag: "",
                        options: null
                    },
                    {
                        title: "Язык",
                        advancedSearch: true,
                        nameInput: "check",
                        filterNameTag: "languageList",
                        options: this.languageList.slice(0, 3)
                    },
                    {
                        title: "Жанр",
                        advancedSearch: true,
                        nameInput: "check",
                        filterNameTag: "genresList",
                        options: this.genreLists.slice(0, 3)
                    },
                    {
                        title: "Автор",
                        advancedSearch: true,
                        nameInput: "check",
                        filterNameTag: "authorList",
                        options: this.authorList.slice(0, 3)
                    },
                    {
                        title: "Год издания",
                        advancedSearch: false,
                        nameInput: "number",
                        filterNameTag: "",
                        options: null
                    },
                ]
        },
    }
</script>

<style lang="scss" scoped>
.accordion-button::after {
    display: none;
}
</style>