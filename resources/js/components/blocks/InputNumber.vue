<template lang="pug">
label.form-label.w-100.text-dark.fs-7(v-if="compare === false")
    span.ps-2.ms-1.mb-2.d-block {{label}}
    input.form-control(type="number" :name="id" :class="{'form-control-sm': small}" :placeholder="placeholder" :disabled="disabled" :value="value" :min="min" :max="max" @input="$emit('update:value', $event.target.value)")
label.form-label.w-100.text-dark.m-0.input-group.w-100.fs-7(v-else)
    input.form-control.fs-7(type="number" :class="{'form-control-sm': small}" :disabled="disabled" aria-label="First name" placeholder="от: " @input="$emit('update:value', $event.target.value)")
    span.input-group-text.m-0.p-1 -
    input.form-control.fs-7(type="number" :class="{'form-control-sm': small}" :disabled="disabled" aria-label="Last name" placeholder="до: " @input="$emit('update:value', $event.target.value)")
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: "Number"
        },
        value: {
            type: String,
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        min: {
            type: Number,
            default: 0
        },
        small: {
            type: Boolean,
            default: false
        },
        max: {
            type: Number,
            default: 4
        },
        compare: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:value'],
    methods: {
        changeValue(value) {
            this.$emit("update:value", value)
        }
    },
}
</script>

<style scoped>

</style>