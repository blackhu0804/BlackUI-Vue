<template>
    <div class="col" :class="colClass"
         :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach( key => {
            if(!['span', 'offset'].includes(key)) {
                valid = false
            }
        });
        return valid
    };
    export default {
        name: 'blackCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            ipad: {
                type: Object,
                validator,
            },
            narrowPc: {
                type: Object,
                validator,
            },
            pc: {
                type: Object,
                validator,
            },
            widePc: {
                type: Object,
                validator,
            }
        },
        data() {
            return {
                gutter: 0,
            }
        },
        methods: {
            createClass (obj, str = '') {
                if(!obj) return []
                let array = []
                if(obj.span) {
                    array.push(`col-${str}${obj.span}`)
                }
                if(obj.offset) {
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
            }
        },
        computed: {
            colClass() {
                let {span, offset, phone, ipad, narrowPc, pc, widePc} = this;
                let createClass = this.createClass
                return [
                    ...createClass({span, offset}),
                    ...createClass(ipad,'ipad-'),
                    ...createClass(narrowPc,'narrow-pc-'),
                    ...createClass(pc,'pc-'),
                    ...createClass(widePc,'wide-pc-'),
                ];
            },
            colStyle() {
                let {gutter} = this
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
        height: 50px;
        width: 50%;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        /*ipad*/
        @media (min-width:577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        /*narrow*/
        @media (min-width:769px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }

        /*pc*/
        @media (min-width:993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }

        @media (min-width:1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }
</style>
