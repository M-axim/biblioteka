<template lang="pug">

header
  nav.navbar.navbar-expand-lg.navbar-dark.fixed-top.bg-info.bg-gradient
    .container-fluid
      a.navbar-brand(href='/').m-0.ms-md-3 Моя библиотека
      button.navbar-toggler.p-1.p-md-2(type='button' data-bs-toggle='collapse' data-bs-target='#navigation' aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation")
        span.navbar-toggler-icon
      
      .collapse.navbar-collapse#navigation
        ul.navbar-nav.ms-auto
          li.nav-item(v-for="(elem, index) in navLinks" :key="index")
              router-link(:to="elem.link" class="nav-link text-dark" v-if="elem.role === 'user' || user.role === elem.role") {{ elem.value}}
          li.nav-item.d-flex(v-if="this.user.role === 'user'")
            button.btn.btn-sm.nav-link.text-dark(@click="updateRole('admin')")
              i.bi.bi-box-arrow-in-left.me-2.cursor-pointer.icon-padding Войти
          li.nav-item.d-flex(v-else-if="this.user.role === 'admin'")
            button.btn.btn-sm.nav-link.text-dark(@click="updateRole('user')")
              i.bi.bi-box-arrow-in-left.me-2.cursor-pointer.icon-padding Выйти
.header-divider

</template>
    
<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

import OffCanvasBody from "./blocks/OffCanvasBody"
export default {
    components: {
        OffCanvasBody
    },
    data: () => ({
            navLinks: [
                    {link: '/', value: 'Поиск книг', role: 'user'},
                    {link: '/libraryCard', value: 'Читательские билеты', role: 'admin'},
                    {link: '/adminPanel', value: 'Админка', role: 'admin'},
            ]
        }),
    computed: {
      ...mapGetters(["user"])
    },
    methods: {
      ...mapActions(["fetchUser"]),
      ...mapMutations(["updateRole"])
    },
    mounted() {
      this.fetchUser()
    }
}
</script>

<style lang="scss" scoped>

.header-divider {
    height: 56px;
}
</style>