import LogoPicture from '../assets/logo.png'

// STORE ~ VIRTUAL MEGA COMPONENT (WITHOUT VIEW)

// STORE <-- HANDLE SHARED STATE (MULTI-COMPONENT)
export default {
    // STATE <-- PHYSICAL DATA (this.$store.state) | (this.$store.state.<module>)
    state: () => ({
        name: 'Manzana',
        price: 43.99,
        picture: LogoPicture,
    }),
    // GETTERS <-- LOGICAL DATA (this.$store.getters)  | (this.$store.getters[<module>])
    getters: {
        priceLabel: (state) => `$ ${state.price.toFixed(2)} kg`,
        priceWithIva: (state) => state.price * 1.16,
        nameInitial: (state) => state.name[0],
    },
    // MUTATIONS <-- METHODS TO CHANGE STATE (this.$store.commit)  | (this.$store.commit('<module>/...'))
    mutations: {
        updatePice: (state, newPrice) => {
            if (newPrice <= 0) throw new Error('Invalid negative or zero price')

            state.price = newPrice
        }
    },
    // ACTIONS <-- CALL MUTATIONS (this.$store.dispatch)  | (this.$store.dispatch('<module>/...', data))
    actions: {
        updatePriceByClient(store, data) {
            // data ~ clientId | data.clientId | data.userId | data.token
            if (typeof data !== "object") throw new Error('Data is not an object')

            const clientId = data.clientId // const { clientId } = data

            // TODO: Preguntarle al servidor el nuevo precio
            const newPrice = await getPriceByClientId(clientId)

            store.commit('updatePrice', newPrice)
        }
    }
}