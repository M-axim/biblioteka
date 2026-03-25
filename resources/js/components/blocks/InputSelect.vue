<template lang="pug">
label.form-label.w-100.text-secondary 
    span.ps-2.ms-1.mb-2.d-block {{label}}
    select.form-select.form-select-sm.fs-7(aria-label="Выберите тип сортировки" @change="$emit('update:value', $event.target.value)")
        option(
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
            :selected="option.value === rating") {{option.text}}
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
        },
        rating: {
            type: Number,
            default: -1
        },
        value: {
            type: String,
            default: ""
        },
        options: {
            type: Array,
            default: [
                {
                    value: 0,
                    text: "По релевантности"
                },
                {
                    value: 1,
                    text: "По году публикации (по возр.)"
                },
                {
                    value: 2,
                    text: "По году публикации (по убыв.)"
                },
                {
                    value: 3,
                    text: "По автору (по возр.)"
                },
                {
                    value: 4,
                    text: "По автору (по убыв.)"
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>