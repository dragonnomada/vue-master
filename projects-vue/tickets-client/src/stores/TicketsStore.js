import sendTicket from "../api/sendTicket"

export default {
    // namespaced: true,
    state: () => ({ // Crea el estado inicial
        isLocked: false,
        statusMessage: 'Idle',
        errorMessage: '',
        ticket: null
    }),
    mutations: {
        lock(state) {
            state.isLocked = true
            state.statusMessage = 'Locking...'
        },
        unlock(state) {
            state.isLocked = false
            state.statusMessage = 'Unlocking...'
        },
        setStatus(state, status) {
            if (status === 'sending') {
                state.statusMessage = 'Sending ticket...'
            } else if (status === 'sent') {
                state.statusMessage = 'Ticket sended...'
            } else if (status === 'error') {
                state.statusMessage = 'Error sending ticket...'
            }
        },
        setError(state, error) {
            state.errorMessage = `${error}`
        },
        setTicket(state, ticket) {
            state.ticket = ticket
        }
    },
    actions: {
        async sendTicket(context, { email, content }) {
            context.commit('lock')
            context.commit('setStatus', 'sending')

            try {
                const ticket = await sendTicket(email, content)
                context.commit('setTicket', ticket)
                context.commit('setStatus', 'sent')
            } catch (error) {
                context.commit('setError', error)
                context.commit('setStatus', 'error')
            }

            context.commit('unlock')
        }
    }
}