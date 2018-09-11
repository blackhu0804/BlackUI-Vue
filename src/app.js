import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Header from './layout/header'
import Aside from './layout/aside'
import Content from './layout/content'
import Footer from './layout/footer'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-content', Content);
Vue.component('g-aside', Aside);
Vue.component('g-footer', Footer);


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: '双向绑定'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        }
    }
});
