import { mount } from '@vue/test-utils'

import { createStore } from 'vuex'

import CounterStore from '../../src/stores/CounterStore'

import App from '../../src/App.vue'

const store = createStore({
    modules: {
        CounterStore
    }
})

test('Testing App...', async () => {
    const wrapper = mount(App, {
        global: {
            plugins: [store]
        }
    })

    const buttonIncrement = wrapper.find('button.btn-inc')
    const buttonDecrement = wrapper.find('button.btn-dec')
    const buttonReset = wrapper.find('button.btn-rst')
    
    for (let i = 0; i < 5; i++) {
        await buttonIncrement.trigger('click')
    }

    expect(wrapper.html()).toContain('Count: 5')

    for (let i = 0; i < 2; i++) {
        await buttonDecrement.trigger('click')
    }

    expect(wrapper.html()).toContain('Count: 3')

    await buttonReset.trigger('click')

    expect(wrapper.html()).toContain('Count: 0')
})