export const state = () => ({
  list: ['foo', 'bar', 'baz'],
})

export const mutations = {
  add(state, text) {
    state.list.push(text)
  },
}
