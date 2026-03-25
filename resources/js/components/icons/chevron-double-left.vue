<template>
<svg xmlns="http://www.w3.org/2000/svg" @click="flipPrev(), getCurrentPage()" width="32" height="32" fill="currentColor" class="pe-auto bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
    <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    computed: {
        ...mapGetters(["currentPage"])
    }, 
    methods: {
        ...mapMutations(['flipPrev']),
        ...mapActions(["fetchBookList"]),
        getCurrentPage() {
            if (this.currentPage === 9)
                this.fetchBookList({})
        }
    },
    
}
</script>

<style lang="scss" scoped>

</style>