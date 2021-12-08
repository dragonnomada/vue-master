const defaultState = () => ({
    name: 'unknown',
    status: 'unknown'
})

const getters = {
    name: state => state.name.toUpperCase(),
    status: state => state.status.toUpperCase(),
}

const mutations = {
    updateItem: (state, { name, status }) => {
        state.name = name
        state.status = status
    }
}

const actions = {
    changeItem: (store, name) => {
        // TODO: Pregutar al API por estatus de name
        const status = {
            'manzana': 'created',
            'mango': 'deprecated'
        }

        store.commit('updateItem', { name, status: status[name] })
    }
}

export default {
    namespaced: true,
    state: defaultState,
    getters,
    mutations,
    actions
}