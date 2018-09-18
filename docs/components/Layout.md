# Layout

使用方法
<ClientOnly>
  <layout-demos></layout-demos>
</ClientOnly>

```html
<g-layout style="color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
        content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
```

<ClientOnly>
  <layout-demos2></layout-demos2>
</ClientOnly>

```html
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
```

<ClientOnly>
  <layout-demos3></layout-demos3>
</ClientOnly>

```html
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-aside style=" background: #00a0e9; width:200px; color: #ffffff;">
        aside
    </g-aside>
    <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">
            header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
            footer
        </g-footer>
    </g-layout>
</g-layout>
```
