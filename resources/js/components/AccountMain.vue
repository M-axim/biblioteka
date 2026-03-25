<template lang="pug">
.account-page.mt-4
    .bookEdit-settings.row.mb-4
        //libraryCardSetting()
    .bookEdit-views.table-responsive.overflow-scroll(:style="{height: tableHeight + 'px'}")
        //libraryCardEditTable()
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
//import libraryCardEditTable from "./account/LibraryCardEditTable"
//import libraryCardSetting from "./account/LibraryCardSetting"
import {ref} from "vue"


export default {
    components: {
        //libraryCardEditTable,
        //libraryCardSetting
    },
    data() {
        return {
            tableHeight: ref(window.innerHeight)._value - 210,
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