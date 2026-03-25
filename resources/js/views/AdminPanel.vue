<template lang="pug">
.admin-panel.mt-3.mb-3
    adminPanelMain
</template>
    
<script>

import {mapGetters, mapActions, mapMutations} from "vuex"
import adminPanelMain from '../components/AdminPanelMain'

export default {
    components: {
        adminPanelMain
    },
}
</script>

<style lang="scss" scoped>

</style>