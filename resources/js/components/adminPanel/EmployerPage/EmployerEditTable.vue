<template lang="pug">
table.table.table-sm.table-borderless.page-table-cover.fs-7.user-select-none
    thead
        tr.text-nowrap.page-table-cover.fs-7
            th.fs-7.text-wrap.text-center.align-middle.table-th-small(data-id="id" scope="col") Номер сотрудника
            th.fs-7.text-wrap.text-center.align-middle(data-id="fullname" scope="col") ФИО
            th.fs-7.text-wrap.text-center.align-middle(data-id="tel" scope="col") Телефон
            th.fs-7.text-wrap.text-center.align-middle(data-id="login" scope="col") Логин
            th.fs-7.text-wrap.text-center.align-middle(data-id="password" scope="col") Пароль
            th.fs-7.text-wrap.text-center.align-middle(data-id="setting" scope="col") Настройки
    tbody
        tr.fs-5.text-nowrap.page-table-cover.fs-7(v-for="(item, index) in employerList" :key="index")
            th.fs-7.page-table-cover(scope="row") {{index+1}}
            td.fs-7.page-table-cover {{item.fullname.substring(0, 20) + "..."}}
            td.fs-7 {{item.tel}}
            td.fs-7 {{item.login}}
            td.fs-7 {{item.password}}
            td.fs-7.text-center
                button.me-2.btn.border.border-dark.btn-sm.btn-outline-secondary.text-Light.fs-7(:data-id="item.id" @click="deleteEmployer(item.id)" type="button") Удалить
                button.me-2.btn.border.border-dark.btn-sm.btn-outline-secondary.text-Light.fs-7(:data-id="item.id" @click="getEmployerObject(item.id)" type="button") Изменить
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    components: {
        
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["employerList", "employerObject"]),
    },
    methods: {
        ...mapActions(["fetchEmployerList"]),
        ...mapMutations(["deleteEmployer", "getEmployerObject"])
    },
    async mounted() {
        this.fetchEmployerList()
    },
}
</script>

<style lang="scss" scoped>
.table-th-small {
    width: 50px;
}

.fs-7 {
    font-size: .7rem !important;
}
</style>