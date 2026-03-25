<template lang="pug">
label.form-label.w-100.text-secondary 
    span.ps-2.ms-1.mb-2.d-block.text-dark {{label}}
    .input-group
        //span.input-group-text(style="font-size: .6rem") +7
        input.form-control(type="tel" :name="id" :class="{'form-control-sm': small}" :readonly="readonly" :disabled="disabled" :value="value" :min="min" :max="max" :pattern="pattern" @input="$emit('update:value', $event.target.value)")
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
        min: {
            type: Number,
            default: 9
        },
        max: {
            type: Number,
            default: 14
        },
        readonly: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        },
        pattern: {
            type: String,
            default: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
        toast: {
            type: String,
            default: ""
        }
    },
    emits: ['update:value', 'updateInput'],
}
</script>

<style scoped>

</style>