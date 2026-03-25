<template lang="pug">
label.form-label.w-100.text-secondary 
    span.ps-2.ms-1.mb-2.d-block {{label}}
    textarea.form-control(:class="{'form-control-sm': small}" name="text" :placeholder="placeholder" :value="description" :disabled="disabled" @input="$emit('input', $event.target.value)")
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: "Номер приказа"
        },
        type: {
            type: String,
            default: "text"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        },
    },
    //emits: ['update:value', 'updateInput'],
    // methods: {
    //     changeValue(value) {
    //         this.$emit("update:value", value)
    //     }
    // },
}
</script>

<style scoped>

</style>