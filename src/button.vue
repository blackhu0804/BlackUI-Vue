<template lang="html">
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name=icon class="icon"></g-icon>
        <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
        <div class="context">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        // props: ['icon', 'iconPosition']
        name: 'Black-button',
        components: {
            'g-icon': Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {
                    return value === 'left' || value === 'right';
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        %0 { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .g-button {
        font-style: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background-color: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        > .context {
            order: 2;
        }
        &.icon-right {
            > .context {
                order: 1;
            }
            > .icon {
                margin-right: 0;
                margin-left: .3em;
                order: 2;
            }
        }
    }
    .loading {
        animation: spin 1.5s infinite linear;
    }
</style>
