<template lang="pug">
.employer-settings.row.mb-4
    .employer-setting.col-12
        v-inputLine(:label="`ФИО`" :placeholder="``" :small="true" v-model:value="fullname")
    .employer-setting.col-12
        v-inputLine(:label="`Телефон`" :type="`number`" :small="true" v-model:value="tel")
    .employer-setting.col-12
        v-inputLine(:label="`login`" :small="true" v-model:value="login")
    .employer-setting.col-12
        v-inputLine(:label="`Пароль`" :type="`password`" :small="true" v-model:value="password")
        p.text-danger.fs-6.m-0 {{ passwordError }}
    .employer-setting.col-12.text-end
        button.btn.btn-secondary.me-2(v-if="id !== null" @click="cleanField()") Очистить
        button.btn.btn-secondary(@click="checkInputs()") Добавить
</template>

<script>

import {mapMutations, mapActions, mapGetters} from 'vuex'
import {ref} from "vue"

export default {
    data() {
        return {
            id: null,
            fullname: "",
            passwordError: "",
            tel: "",
            login: "",
            password: ""
        }
    },
    computed: {
        ...mapGetters(["employerList", "employerObject"]),
    },
    methods: {
        ...mapMutations(["editEmployer", "newEmployer", "resetEmployerObject"]),

        checkInputs() {
            this.passwordError = ""

            if (this.password.length < 8) {
                this.passwordError = "Минимальная длина пароля 8 символов"
            } else {
                if (this.fullname !== "" &&
                this.tel !== "" &&
                this.login !== "" &&
                this.password !== "")
                {
                    let tmpEmployerObject = {
                        id: this.id === null ? this.employerList.length + 1 : this.id,
                        fullname: this.fullname,
                        tel: this.tel,
                        login: this.login,
                        password: this.password,
                    }
                    this.id === null ? this.newEmployer(tmpEmployerObject) : this.editEmployer(tmpEmployerObject)

                    this.clearFields()
                }
            }
        },
        clearFields() {
            this.id = null
            this.fullname = ""
            this.tel = ""
            this.login = ""
            this.password = ""
            this.resetEmployerObject()
            // this.cleanTags()
        },
    },  
    watch: {
        employerObject: function () {
                if (this.employerObject !== null && this.employerObject) {
                    this.id = this.employerObject.id
                    this.fullname = this.employerObject.fullname
                    this.tel = this.employerObject.tel
                    this.login = this.employerObject.login
                    this.password = this.employerObject.password
                } else {
                    this.clearFields()
                }
            }
    },
}
</script>

<style lang="scss" scoped>
</style>
