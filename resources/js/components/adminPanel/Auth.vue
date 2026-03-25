<template lang="pug">
.page.page-bg-cover.page-cover-top
    .page-content
        .text-center.d-flex.user-select-none
            h2.h2.m-auto(v-if="user.role === 'user'") Авторизация
            h2.h2.m-auto(v-else) Панель администратора
            div(v-if="user.role !== 'user'")
                v-chevronDoubleRight()
        .page-text.fs-4
            .page-categories(v-if="user.role !== 'user'")
                button.btn.btn-sm.btn-outline-dark.mb-2.page-category.w-100.d-flex(@click="resetUser()")
                    span.me-auto Выйти
                    span 5 стр.
                button.btn.btn-sm.btn-outline-dark.mb-2.page-category.w-100.d-flex(v-for=" (elem, index) in pageCategoriesAdmin" @click="flip(currentPage - (elem.id * -2)), getCurrentPage(currentPage - (elem.id * -2))" :key="index")
                    span.me-auto {{ elem.label}}
                    span {{ elem.id + 5 }} стр.
            form(v-else)
                .mb-2
                    v-inputLine(:label="`Введите логин`" :small="true" v-model:value="login")
                    p.text-danger.fs-5.m-0 {{ loginError }}
                .mb-2
                    v-inputLine(:label="`Введите пароль`" :type="`password`" :small="true" v-model:value="password")
                    p.text-danger.fs-5.m-0 {{ passwordError }}
                .mb-2.text-end
                    p.text-danger.fs-5.m-0 {{ formError }}
                    button.btn.btn-outline-secondary(@click="auth()" type="button") Войти

</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    data() {
        return {
            pageCategoriesAdmin: [
                    {
                        id: 1,
                        label: "Сотрудники",
                    },
                    {
                        id: 2,
                        label: "Авторы",
                    },
                    {
                        id: 3,
                        label: "Жанры",
                    },
                    {
                        id: 4,
                        label: "Книги",
                    },
                    {
                        id: 5,
                        label: "Читатели",
                    },
                ],
            login: "",
            loginError: "",
            password: "",
            passwordError: "",
            formError: ""
        }
    },
    computed: {
        ...mapGetters(["user", "employerList", "employerIndex", "currentPage"])
    },
    methods: {
        ...mapMutations(["updateUser", "resetUser", "employerAuth", "flip"]),
        ...mapActions(["fetchUser", "fetchEmployerList", "fetchBookList"]),
        getCurrentPage(page) {
            console.log(page);
            if (page === 11 || page === 12)
                this.fetchBookList({})
        },
        auth() {
            this.resetError()

            if (this.login === "")
                this.loginError = "Введите логин"

            if (this.password === "" || this.password.length < 7)
                this.passwordError = "Минимальная длина пароля 8 символов"

            if (this.login !== "" && this.password.length >= 7) {
                this.employerAuth({
                    login: this.login,
                    password: String(this.password)
                })
            }

        },
        resetError() {
            this.loginError = ""
            this.passwordError = ""
            this.formError = ""
        },
        resetParams() {
            this.login = ""
            this.password = ""
        }
    },
    async mounted() {
        this.fetchUser()
        this.fetchEmployerList()
    },
    watch: {
        employerIndex: {
            deep: true,
            handler(e) {
                if (this.employerIndex) {
                    this.updateUser({
                        user: this.employerIndex.fullname,
                        role: this.employerIndex.login
                    })
                    this.resetParams()
                    this.resetError()
                } else {
                    this.formError = "Проверьте правильность введенных данных, авторизация не удалась"
                }
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>