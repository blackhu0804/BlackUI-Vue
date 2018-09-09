<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'blackRow',
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        mounted() {
            this.$children.forEach( (vm) => {
                vm.gutter = this.gutter
            })
        },
        computed: {
            rowStyle() {
                let {gutter} = this
                return {
                    marginLeft: -gutter/2+'px',
                    marginRight: -gutter/2+'px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        margin-bottom:10px;
        .col:nth-of-type(odd) {
            background-color: rgba(0, 160, 233, 0.7);
        }
        .col:nth-of-type(even) {
            background-color: #00a0e9;
        }
    }
</style>
