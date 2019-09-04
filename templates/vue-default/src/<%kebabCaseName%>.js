import { shallowMount } from '@vue/test-utils'
import <%pascalCaseName%> from './<%kebabCaseName%>.vue'

test('Renders', () => {
  const wrapper = shallowMount(<%pascalCaseName%>)
  expect(wrapper.exists()).toBe(true)
})