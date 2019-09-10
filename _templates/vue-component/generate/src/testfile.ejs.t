---
to: <%=name%>/src/<%= h.kebabName(name) %>.test.js
---

import { shallowMount } from '@vue/test-utils'
import <%=h.pascalName(name)%> from './<%=h.kebabName(name)%>.vue'

test('Renders', () => {
  const wrapper = shallowMount(<%=h.pascalName(name)%>)
  expect(wrapper.exists()).toBe(true)
})