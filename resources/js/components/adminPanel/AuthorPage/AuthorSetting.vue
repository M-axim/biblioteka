<template lang="pug">
.genre-setting.col-12
    v-inputLine(:label="`ФИО автора`" :small="true" v-model:value="authorName")
.bookEdit-setting.col-12.text-end
    button.btn.btn-secondary.me-2(v-if="id !== null" @click="cleanField()") Очистить
    button.btn.btn-secondary(@click="checkInputs()") Добавить
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            id: null,
            authorName: ""
        }
    },
    computed: {
        ...mapGetters(["authorList", "authorObject"])
    },
    methods: {
        ...mapMutations(["newAuthor", "resetAuthorObject", "editAuthor"]),

        checkInputs() {
            if (this.authorName !== "")
            {
                let tmpAuthorObject = {
                    id: this.id === null ? this.authorList.length + 1 : this.id,
                    label: this.authorName.toLowerCase(),
                    checked: false
                }
                this.id === null ? this.newAuthor(tmpAuthorObject) : this.editAuthor(tmpAuthorObject)
                this.cleanField()
            }
        },
        cleanField() {
            this.id = null
            this.authorName = ""
            this.resetAuthorObject()
        }
    },
    watch: {
        authorObject: function() {
            if (this.authorObject !== null) {
                this.id = this.authorObject.id
                this.authorName = this.authorObject.label
            } else {
                this.cleanField()
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>