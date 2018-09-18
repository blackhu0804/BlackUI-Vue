<template>
    <div style="padding-top: 16px;">
        <h2>布局</h2>
        <p>
            <strong>预览</strong>
        </p>


        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
                header
            </g-header>
            <g-layout>
                <g-aside style="height: 100px; background:#3ba0e9; width:200px; color: black;">
                    aside
                </g-aside>
                <g-content style="height: 100px; background:deepskyblue;">
                    content
                </g-content>
            </g-layout>
            <g-footer style="height: 50px; background:lightskyblue;">
                footer
            </g-footer>
        </g-layout>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
<script>
    import GLayout from '../../../src/layout/layout'
    import GHeader from '../../../src/layout/header'
    import GFooter from '../../../src/layout/footer'
    import GContent from '../../../src/layout/content'
    import GAside from '../../../src/layout/aside'
    export default {
        components: {GLayout, GHeader, GFooter, GContent, GAside},
        data () {
            return {
                content: `
            <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                <g-header style="height: 50px; background:lightskyblue;">
                    header
                </g-header>
                <g-layout>
                    <g-aside style="height: 100px; background:#3ba0e9; width:200px; color: black;">
                    aside
                    </g-aside>
                    <g-content style="height: 100px; background:deepskyblue;">
                    content
                    </g-content>
                </g-layout>
                <g-footer style="height: 50px; background:lightskyblue;">
                    footer
                </g-footer>
            </g-layout>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
