<template lang="pug">
.bookLists__row
    bookListsSearch()
    bookListsViews()
    advancedSearchFilter()
</template>

<script>
import bookListsSearch from './bookLists/BookListsSearch'
import bookListsViews from './bookLists/BookListsViews'
import advancedSearchFilter from './toast/AdvancedSearchFilter'
    export default {
        components: {
            bookListsSearch,
            bookListsViews,
            advancedSearchFilter
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>