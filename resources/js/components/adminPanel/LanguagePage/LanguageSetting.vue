<template lang="pug">
.genre-setting.col-12
    v-inputLine(:label="`Язык`" v-model:value="languageName")
.bookEdit-setting.col-12.text-end
    button.btn.btn-secondary(@click="checkInputs()") Добавить
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            languageName: ""
        }
    },
    mapMutations: {
    },
    methods: {
        ...mapMutations(["newLanguage"]),

        checkInputs() {
            if (this.languageName !== "")
            {
                let tmpLanguageObject = {
                    id: 10,
                    label: this.languageName.toLowerCase(),
                    checked: false
                }
                this.newLanguage(tmpLanguageObject)
                this.cleanField()
            }
        },
        cleanField() {
            this.languageName = ""
        }
    }
}
</script>

<style lang="scss" scoped>

</style>