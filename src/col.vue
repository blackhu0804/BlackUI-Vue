<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'blackCol',
        props: {
            span: {
                type: [Number, String]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
        height: 100px;
        background-color: #ccc;
        width: 50%;
        border: 1px solid #223223;

        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
    }
</style>
