<template lang="pug">
.admin-panel-main
    .page-title
        h2 Панель администратора
    .page-tabs
        tabsItems(v-bind:TabsItems="mainTabList")
    .account-main.tab-content.mt-4.position-relative
        bookEdit()
        genresEdit()
        languageEdit()
        authorEdit()
.toast-wraper.w-100
    advancedSearchFilter()
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
import tabsItems from "./TabsItems"
import advancedSearchFilter from './toast/AdvancedSearchFilter'

import bookEdit from "./adminPanel/BookEdit"
import genresEdit from "./adminPanel/GenresEdit"
import languageEdit from "./adminPanel/LanguageEdit"
import authorEdit from "./adminPanel/AuthorEdit"

export default {
    components: {
        tabsItems,
        bookEdit,
        genresEdit,
        authorEdit,
        languageEdit,
        advancedSearchFilter
    },
    data() {
        return {
            mainTabList: 
            [
                {
                    page: "bookEdit",
                    tabId: "bookEdit",
                    selected: false,
                    text: "Книги"
                },
                {
                    page: "genresEdit",
                    tabId: "genresEdit",
                    selected: false,
                    text: "Жанры"
                },
                {
                    page: "languageEdit",
                    tabId: "languageEdit",
                    selected: false,
                    text: "Языки"
                },
                {
                    page: "authorEdit",
                    tabId: "authorEdit",
                    selected: false,
                    text: "Авторы"
                }
            ],
        }
    },
    computed: {
    },
    methods: {
    },
    async mounted() {
    },
}
</script>

<style scoped>
.nav-tabs .nav-link {
    color: black;
}
</style>