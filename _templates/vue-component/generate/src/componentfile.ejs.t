---
to: <%=name%>/src/<%= h.kebabName(name) %>.vue
---

<template>
  <div><%=name%></div>
</template>

<script>
export default {
  name: '<%= h.pascalName(name) %>',
}
</script>