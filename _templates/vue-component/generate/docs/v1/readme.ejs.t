---
to: <%=name%>/docs/v1/readme.md
---
# <%=name%>

## Installation

```
npm install <%=name%>
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import <%=h.pascalName(name)%> from '<%=name%>'

Vue.use(<%=h.pascalName(name)%>)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="<%=name%>/dist/<%=h.kebabName(name)%>.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/<%=name%>"></script>
```

## Examples

::: demo
<<%=h.kebabName(name)%>></<%=h.kebabName(name)%>>
:::

<!-- The API section is auto generated, don't touch please -->

## API