# Input

使用方法

<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>

```html
<g-input></g-input>
<g-input value="输入框"></g-input>
<g-input value="输入框 disabled" disabled></g-input>
<g-input value="输入框 readonly" readonly></g-input>
```

<ClientOnly>
  <input-demos2></input-demos2>
</ClientOnly>

```html
data:{
    value: '1'
}
<g-input v-model="value"></g-input>
<div>
    value: {{value}}
</div>
```
