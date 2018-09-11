<template lang="html">
    <div class="wrapper"  :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose()">
                {{closeButton.text}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'blackToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 3
            },
            closeButton: {
                type: Object,
                default () {
                    return {
                        text: '关闭', callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.lineStyleUpdate();
            this.execAutoClose();
        },
        computed: {
          toastClasses() {
              return {
                  [`position-${this.position}`] : true
              }
          }
        },
        methods: {
            lineStyleUpdate() {
                this.$nextTick( () => {
                    this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
                })
            },
            execAutoClose() {
                if(this.autoClose) {
                    setTimeout( () => {
                        this.close()
                    }, this.autoCloseDelay*1000)
                }
            },
            close() {
                this.$el.remove();
                this.$emit('close');
                this.$destroy();
            },
            onClickClose() {
                this.close();
                if(this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0,0,0,.75);
    $toast-shadow: 0 0 3px 0 rgba(0,0,0,.5);
    $animation-delay: 500ms;
    @keyframes slide-up {
        0% { opacity: 0; transform: translateY(100%); }
        100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes slide-down {
        0% { opacity: 0; transform: translateY(-100%); }
        100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.position-top {
            top: 0;
            .toast {
                animation: $animation-delay slide-down;
            }
        }
        &.position-bottom {
            bottom: 0;
            .toast {
                animation: $animation-delay slide-up;
            }
        }
        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            .toast {
                animation: $animation-delay fade-in;
            }
        }
    }
    .toast {
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        display: flex;
        align-items: center;
        background-color: $toast-bg;
        box-shadow: $toast-shadow;
        color: #fff;
        border-radius: 4px;
        padding: 0 16px;
        .message {
            padding: 8px 0;
        }
        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }
        .line {
            height: 100%;
            margin-left: 16px;
            border-left: 1px solid #666;
        }
    }
</style>
