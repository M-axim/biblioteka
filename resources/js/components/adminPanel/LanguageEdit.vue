<template lang="pug">
.tab-pane.fade(role="tabpanel" :aria-labelledby="`${documentTitle}-tab`" :id="documentTitle")
    .bookEdit-settings.row.mb-4
        languageSetting()
    .bookEdit-views.table-responsive.overflow-scroll(:style="{height: tableHeight + 'px'}")
        languageEditTable()
</template>

<script>

import {ref} from "vue"
import languageSetting from './LanguagePage/LanguageSetting'
import languageEditTable from './LanguagePage/LanguageEditTable'

export default {
components: {
    languageSetting,
    languageEditTable
},
data() {
    return {
        documentTitle: "languageEdit",
        tableHeight: ref(window.innerHeight)._value - 210,
    }
},
computed: {
},
methods: {
    
},  
watch: {

},
}
</script>

<style lang="scss" scoped>
</style>
