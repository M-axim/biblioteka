<template lang="pug">
.genre-setting.col-12
    v-inputLine(:label="`Название жанра`" :small="true" v-model:value="genreName")

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
            genreName: ""
        }
    },
    computed: {
        ...mapGetters(["genreLists", "genreObject"])
    },
    methods: {
        ...mapMutations(["newGenre", "editGenre", "resetGenreObject"]),

        checkInputs() {
            if (this.genreName !== "")
            {
                let tmpGenreObject = {
                    id: this.id === null ? this.genreLists.length + 1 : this.id,
                    label: this.genreName.toLowerCase(),
                    checked: false
                }                
                this.id === null ? this.newGenre(tmpGenreObject) : this.editGenre(tmpGenreObject)
                this.cleanField()
            }
        },
        cleanField() {
            this.id = null
            this.genreName = ""
            this.resetGenreObject()
        }
    },
    watch: {
        genreObject: function() {
            if (this.genreObject !== null) {
                this.id = this.genreObject.id
                this.genreName = this.genreObject.label
            } else {
                this.cleanField()
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>