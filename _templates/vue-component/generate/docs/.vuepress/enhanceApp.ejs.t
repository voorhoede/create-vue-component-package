---
to: <%=name%>/docs/.vuepress/enhanceApp.js
---
export default ({ router }) => {
  router.addRoutes([
    { path: '/', redirect: '/v1' },
  ])
}
