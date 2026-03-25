<template lang="pug">
#mainTabContent.tab-content.fs-4.mt-2
    contingentTab
    academicPerformanceTab
    consolidatedStatementTab
</template>

<script>
import contingentTab from "../components/contingentTabs/ContingentTab"
import academicPerformanceTab from "./academicPerformanceTabs/AcademicPerformance"
import consolidatedStatementTab from './consolidatedStatementTabs/СonsolidatedStatementTab'

export default
{
    components: {
        contingentTab,
        academicPerformanceTab,
        consolidatedStatementTab
    },
    data() {
        return {
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
            ]
        }
    },
    mounted() {
        console.log(this.$route.params.id);
    },
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>