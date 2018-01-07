import axios from '~/plugins/axios'

export const state = () => ({
  showCalendar: false,
  events: [],
})

export const mutations = {
  close(state) {
    state.showCalendar = false
    state.events = []
  },
  setEvents(state, events) {
    state.events = events
    state.showCalendar = true
  },
}

export const actions = {
  fetchEventsByHelperId(context, helperId) {
    axios.get(`/api/helpers/${helperId.helperId}/events`).then((res) => {
      context.commit('setEvents', res.data)
    })
  },
}
