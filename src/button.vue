<template lang="html">
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name=icon class="icon"></g-icon>
        <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
        <div class="content">
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
    @keyframes spin {
        %0 { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .g-button {
        font-style: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .content {
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
