<template lang="pug">
.libraryCard-settings.row.user-select-none
    .libraryCard-setting.col-12
        v-inputLine(:label="`ФИО`" :small="true" v-model:value="fullname")
    .libraryCard-setting.col-12.col-sm-6
        v-inputLine(:label="`Год рождения`" type="date" :small="true" v-model:value="birthdate")
    .libraryCard-setting.col-12.col-sm-6
        v-inputNumber(:label="`Телефон`" type="number" :small="true" v-model:value="tel")
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
            fullname: "",
            birthdate: "",
            tel: ""
        }
    },
    computed: {
        ...mapGetters(["libraryCardList", "libraryCardObject"])
    },
    methods: {
        ...mapMutations(["updateLibraryCard", "newLibraryCard", "resetLibraryCardObject"]),

        checkInputs() {
            if (this.fullname !== "" && this.birthdate !== "" && this.tel !== "")
            {
                let tmpLibraryCard = {
                    id: this.id === null ? this.libraryCardList.length + 1 : this.id,
                    fullname: this.fullname,
                    birthdate: this.birthdate,
                    tel: this.tel,
                    books: []
                }
                //this.newLanguage(tmpLanguageObject)

                this.id === null ? this.newLibraryCard(tmpLibraryCard) : this.updateLibraryCard(tmpLibraryCard)
                this.cleanField()
            }
        },
        cleanField() {
            this.id = null
            this.fullname = ""
            this.birthdate = ""
            this.tel = ""
            this.resetLibraryCardObject()
        }
    },
    watch: {
        libraryCardObject: function() {
            if (this.libraryCardObject !== null) {
                this.id = this.libraryCardObject.id
                this.fullname = this.libraryCardObject.fullname
                this.birthdate = this.libraryCardObject.birthdate
                this.tel = this.libraryCardObject.tel
            } else {
                this.cleanField()
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>