import HelloWorld from 'main/components/HelloWorld.vue'
import { shallowMount } from '@vue/test-utils'

describe('aaa', () => {
  test('should ', () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        who: 'Peter',
      },
    })
    expect(wrapper.text()).toMatch('Peter')
  })
})
