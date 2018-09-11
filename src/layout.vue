<template lang="html">
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'blackLayout',
        data() {
            return {
                layoutClass: {
                    hasAside: false
                }
            }
        },
        mounted() {
            this.$children.forEach( (vm) => {
                if(vm.$options.name === 'blackAside') {
                    this.layoutClass.hasAside = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        &.hasAside {
            flex-direction: row;
        }
    }
</style>
