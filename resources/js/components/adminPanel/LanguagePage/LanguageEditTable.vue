<template lang="pug">
table.table.table-sm.table-striped.table-hover.table-bordered.border-primary.table-success
    thead
        tr.fs-5.text-nowrap
            th.fs-6.text-wrap.text-center.align-middle.table-th-small(data-id="id" scope="col") Код языка
            th.fs-6.text-wrap.text-center.align-middle(data-id="imgSrc" scope="col") Название
            th.fs-6.text-wrap.text-center.align-middle.table-th-small(data-id="setting" scope="col") Настройки
    tbody
        tr.fs-5.text-nowrap(v-for="(item, index) in languageList" :key="index")
            th.fs-6(scope="col") {{item.id}}
            td.fs-6 {{item.label}}
            td.fs-6.text-center
                button.me-2.btn.border.border-dark.btn-sm.btn-outline.fs-6(:data-id="item.id" @click="deleteLanguage(item.id)" type="submit") Удалить
                button.me-2.btn.border.border-dark.btn-sm.btn-outline.fs-6(:data-id="item.id" @click="newGenres({})" type="submit") Изменить
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
        ...mapGetters(["languageList"]),
    },
    methods: {
        ...mapActions(["fetchLanguageList"]),
        ...mapMutations(["deleteLanguage"])
    },
    watch: {
    },
    async mounted() {
        this.fetchLanguageList()
    },
}
</script>

<style lang="scss" scoped>
.table-th-small {
    width: 50px;
}
</style>