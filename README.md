# 试着去造几个轮子

[![Build Status](https://travis-ci.org/hu970804/BlackUI-Vue.svg?branch=master)](https://travis-ci.org/hu970804/BlackUI-Vue)

## 介绍

这是一个使用 Vue 做的一个 UI 组件库，内容在不断更新中~

## 开始使用

1. 设置css
    使用此UI组件，请使用 `border-box`，支持 IE8 及其以上浏览器。
    ```css
    *,*::before,*::after {
        box-sizing: border-box;
    }
    ```
    此外需要设置一些默认的css变量：
    ```css
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: #fff;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```

2. 安装
    ```
        npm i --save blackui-vue
    ```
3. 引入
    ```js
        import {Button, ButtonGroup, Icon} from 'blackui-vue'
        import 'blackui-vue/dist/index.css'

        export default {
          name: 'app',
          components: {
            HelloWorld,
            'g-button': Button,
            'g-icon': Icon
          }
        }
    ```
## 文档

## 安装

npx parcel index.html --no-cache 运行
