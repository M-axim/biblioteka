<template lang="pug">
.student.mt-3.mb-3
    h1.text-center Личная карточка студента № 1

    tabsItems(v-bind:TabsItems="mainTabList")
    studentMain

</template>

<script>
import tabsItems from "../components/TabsItems"

export default
{
    components: {
        personalInfo,
        tabsItems,
        studentMain
    },
    data() {
        return {
            mainTabList: 
            [
                {
                    tabId: "contingent",
                    selected: true,
                    text: "Приказы движения по контингенту"
                },
                {
                    tabId: "academicPerformance",
                    selected: false,
                    text: "Результаты успеваемости"
                },
                {
                    tabId: "consolidatedStatement",
                    selected: false,
                    text: "Сводная ведомость"
                },
            ],
            contingentTabList: 
            [
                {
                    tabId: "enrolled",
                    selected: true,
                    text: "Приказы на зачисление"
                },
                {
                    tabId: "transfer-course",
                    selected: false,
                    text: "Приказы на переход по курсам"
                },
                {
                    tabId: "transfer-group",
                    selected: false,
                    text: "Приказы на переводы"
                },
                {
                    tabId: "expulsion",
                    selected: false,
                    text: "Приказы на отчисление"
                },
                {
                    tabId: "academicLeave",
                    selected: false,
                    text: "Приказы на академический отпуск"
                },
            ],
            studentId: 0
        }
    },
    mounted() {
        this.studentId = this.$route.params.id
    }
}
</script>

<style lang="scss" scoped>

</style>