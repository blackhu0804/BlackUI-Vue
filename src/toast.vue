<template lang="html">
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'blackToast',
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0,0,0,.75);
    $toast-shadow: 0 0 3px 0 rgba(0,0,0,.5);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        display: flex;
        align-items: center;
        background-color: $toast-bg;
        box-shadow: $toast-shadow;
        color: #fff;
        border-radius: 4px;
        padding: 0 16px;
    }
</style>
