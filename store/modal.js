export const state = () => ({
  showModal: false,
})

export const mutations = {
  open(state) {
    state.showModal = true
  },
  close(state) {
    state.showModal = false
  },
}
