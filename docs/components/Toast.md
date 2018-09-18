# Toast

使用方法

<ClientOnly>
  <Toast-demos></Toast-demos>
</ClientOnly>

```html
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```

<ClientOnly>
  <Toast-demos2></Toast-demos2>
</ClientOnly>

```html
<div>
    <g-button @click="onClickButton">你知道我在等你吗</g-button>
</div>
methods: {
    onClickButton () {
        this.$toast('你知道我在等你吗？', {
            closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('他说知道了')
                }
            }
        })
    }
},
```

<ClientOnly>
  <Toast-demos3></Toast-demos3>
</ClientOnly>

```html
<div>
    <g-button @click="onClickButton">上方弹出</g-button>
</div>
methods: {
    onClickButton () {
        this.$toast('你知道我在等你吗？', {
            closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('他说知道了')
                }
            }
        })
    }
},
```
