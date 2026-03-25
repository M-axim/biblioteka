<template lang="pug">
.col.mb-3.bg-light(v-for="(item, index) in bookList" :key="index")
    .book-card.card
        img.card-img-top(:src="item.imgSrc")
        .card-body.p-1.fs-5
            h5.card-title.fw-bold.text-truncate.fs-5 {{ item.title }}
            p.card-text.fs-5() {{ truncated(item.description) }}
            p.card-text.m-0.fw-bold Год издания: 
                span.fw-normal {{ item.publicationDate }}
            p.card-text.m-0.fw-bold Раздел: 
                span.fw-normal {{item.tags[0]}}
            p.card-text.m-0.fw-bold автор/ы: 
                span.fw-normal {{item.author.join()}}
        //- .card-footer.p-1
            button.btn.btn-outline-primary.w-100.fs-5.p-1 Подробнее

                //- h5.card-title.fw-bold {{ item.title }}
                //- p.card-text.m-1 {{ item.description }}
                //- p.card-text.m-1 Год издания: {{ item.publicationDate }}
                //- p.card-text.d-flex.fs-4.m-1 Теги:
                //- ul.list-group.list-group-horizontal.list-unstyled.d-flex.flex-wrap.border
                //-     li.list-group-item.p-1.m-1.border.rounded-3.user-select-none(v-for="(elem, index) in item.tags") {{ elem }}
        //- .text-end.border-top.border-info.mt-2
        //-     button.btn.mt-2.ms-2
        //-         i.bi.bi-star В избранное
        //-     button.btn.btn-secondary.mt-2.ms-2.text-decoration-line-through.disabled(v-if="!item.bookAvailable") Нет в наличии
        //-     button.btn.btn-secondary.mt-2.ms-2(v-else) Забронировать
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
export default {
    components: {
    },
    computed: {
        ...mapGetters(["bookList"])
    },
    methods: {
        truncated(str) {
            return str.substr(0, 50) + "..."
        }
    },
}
</script>

<style lang="scss" scoped>
.fs-5 {
    font-size: .7rem !important;
}
</style>