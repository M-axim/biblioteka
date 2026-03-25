<template lang="pug">
.accordion#libraryCardAccordion
    .accordion-item.mb-2.page-bg-cover.rounded-0(v-for="(item, index) in libraryCardList" :key="index")
        h2.accordion-header.rounded-0(:id="`libraryCardAccordionHeader-${index}`")
            button.accordion-button.collapsed.fs-6.page-bg-cover.rounded-0(
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#libraryCardAccordionCollapse-${index}`"
                aria-expanded="true"
                @click="setTargetLibraryCard(item.id)"
                :aria-controls="`libraryCardAccordionCollapse-${index}`") {{ item.fullname}} / {{ item.birthdate }} / {{ item.tel }}
        .accordion-collapse.collapse(:id="`libraryCardAccordionCollapse-${index}`" aria-labelledby="headingOne" data-bs-parent="#libraryCardAccordion")
            .accordion-body
                fieldset.border.border-dark.p-2
                    legend.float-none.w-auto Книжний учет
                    bookTableSetting()
                    bookTable(:books="item.books")
                fieldset.border.border-dark.p-2
                    legend.float-none.w-auto Номер читательского билета {{ getLibraryCardNumber(item.id) }}
                    
                    .accordion-setting.text-end
                        button.btn.btn-outline-secondary.me-2(@click="deleteLibraryCard(item.id)") Удалить билет
                        button.btn.btn-outline-secondary(@click="getLibraryCardObject(item.id)") Изменить данные
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
import bookTableSetting from "./BookTableSetting"
import bookTable from "./BookTable"
export default {
    components: {
        bookTableSetting,
        bookTable
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["libraryCardList"]),
    },
    methods: {
        ...mapActions(["fetchLibraryCardList"]),
        ...mapMutations(["deleteLibraryCard", "getLibraryCardObject", "setTargetLibraryCard"]),
        getLibraryCardNumber(n) {
            return ("000000000" + n).slice(-9)
        }
    },
    watch: {
    },
    async mounted() {
        this.fetchLibraryCardList()
    },
}
</script>

<style lang="scss" scoped>
.table-th-small {
    width: 50px;
}
</style>