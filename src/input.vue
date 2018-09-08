<template lang="html">
    <div class="wrapper" :class="{error}">
        <input :readonly="readonly" :disabled="disabled" :value="value" type="text"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
        >
        <template v-if="error">
            <Icon name="error" class="icon-error"></Icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name: 'Black-input',
        components: {Icon},
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-color-focus: rgba(0,0,0,.5);
    $border-radius: 4px;
    $font-size: 14px;
    $red: #F1435D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {
            margin-right: .5em;
        }
        >input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $border-color-focus;
                outline: none;
            }
            &[readonly]:focus {
                box-shadow: none;
            }
            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error {
            >input {
                border-color: $red;
            }
        }
        .icon-error {
            fill: $red;
        }
        .error-message {
            color: $red;
        }
    }
</style>
