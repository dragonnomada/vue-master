import { mount } from '@vue/test-utils'

import store from '../../src/store'

import App from '../../src/App.vue'

const wrapper = mount(App, {
  global: {
      plugins: [store]
  }
})

test('Testing App...', async () => {
    const buttonManzana = wrapper.find('button.btn-manzana')
    const buttonMango = wrapper.find('button.btn-mango')
    const labelName = wrapper.find('p.lbl-name')
    
    await buttonManzana.trigger('click')

    expect(wrapper.html()).toContain('Name: MANZANA')
    expect(wrapper.html()).toContain('Status: CREATED')

    await buttonMango.trigger('click')

    expect(wrapper.html()).toContain('Name: MANGO')
    expect(wrapper.html()).toContain('Status: DEPRECATED')

    await buttonManzana.trigger('click')

    expect(wrapper.html()).toContain('Name: MANZANA')
    expect(wrapper.html()).toContain('Status: CREATED')

    expect(labelName.text()).toContain('MANZANA')
})

test('Login...', async () => {
  const buttonManzana = wrapper.find('button.btn-manzana')
  const buttonMango = wrapper.find('button.btn-mango')
  const labelName = wrapper.find('p.lbl-name')
  
  await buttonManzana.trigger('click')

  expect(wrapper.html()).toContain('Name: MANZANA')
  expect(wrapper.html()).toContain('Status: CREATED')

  await buttonMango.trigger('click')

  expect(wrapper.html()).toContain('Name: MANGO')
  expect(wrapper.html()).toContain('Status: DEPRECATED')

  await buttonManzana.trigger('click')

  expect(wrapper.html()).toContain('Name: MANZANA')
  expect(wrapper.html()).toContain('Status: CREATED')

  expect(labelName.text()).toContain('MANZANA')
})