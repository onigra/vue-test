import axios from '~/plugins/axios'

export const state = () => ({
  showCalendar: false,
  events: [],
})

export const mutations = {
  close(state) {
    state.showCalendar = false
  },
  setEvents(state, events) {
    state.events = events
    state.showCalendar = true
  },
}

export const actions = {
  fetchEventsByHelperId(context) {
    axios.get('/api/helpers/1/events').then((res) => {
      context.commit('setEvents', res.data)
    })
  },
}
