import Rate from 'main/components/Rate.vue'
import { shallowMount } from '@vue/test-utils'

describe('rate', () => {
  test('should ', () => {
    const wrapper = shallowMount(Rate, {
      props: {
        modelValue: 2,
      },
    })
    expect(wrapper.text()).toMatch('★★')
  })
})
