<template lang="pug">
label.form-label.w-100.text-secondary.fs-7
    span.ps-2.ms-1.mb-2.d-block.text-dark {{label}}
    input.form-control(:type="type" :name="id" :class="{'form-control-sm': small}" :readonly="readonly" :placeholder="placeholder" :disabled="disabled" :value="value" @input="$emit('update:value', $event.target.value)" v-if="toast === ''")
    input.form-control(:type="type" :name="id" :class="{'form-control-sm': small}" readonly :disabled="disabled" :value="value" @click="$emit('updateInput', 'advanceSearchFilter', toast)" v-else)
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
        label: {
            type: String,
            default: "Номер приказа"
        },
        placeholder: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        small: {
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