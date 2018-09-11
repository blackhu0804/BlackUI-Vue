<template lang="html">
    <transition name="slide">
        <div class="aside" v-if="visible">
            <slot></slot>
            <a @click="visible=false">隐藏</a>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'blackAside',
        data() {
            return {
                visible: true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .aside {
        position: relative;
        > a {
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .slide-enter-active, .slide-leave-active {
        transition: all .5s;
    }
    .slide-enter, .slide-leave-to {
        margin-left: -200px;
    }
</style>
