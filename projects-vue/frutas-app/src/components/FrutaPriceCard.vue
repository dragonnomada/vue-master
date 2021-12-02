<template>
    <div class="p-8 border border-red-500">
        <div class="flex flex-col border border-red-500">
            <div class="flex flex-row hover:bg-gray-50 cursor-pointer"
                v-on:click="viewDetails()">
                <div class="px-4">
                    <!-- one way bind (v-bind:<attr>) -->
                    <img class="w-48 h-48" v-bind:src="picture" />
                </div>
                <div class="flex-grow flex flex-col justify-center items-center xbg-yellow-500">
                    <!-- physical state injection -->
                    <span class="text-4xl text-gray-700 font-bold">{{ name }}</span>
                    <!-- logical state injection -->
                    <span class="text-2xl text-gray-500">{{ priceLabel }}</span>
                </div>
            </div>
            <div class="flex flex-row bg-red-100 py-4">
                <div class="px-2" 
                    v-for="tag in ['fruta', 'rojo', 'redondo', 'dulce']" 
                    v-bind:key="tag">
                    <div class="bg-green-500 hover:bg-green-700 
                        text-white rounded px-2 py-1 
                        cursor-pointer select-none">
                        <span>{{ tag }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Importamos la imagen de los assets
import Logo from '../assets/logo.png'

export default {
    data: () => ({ // physical state
        name: 'Unknown',
        price: 0,
        picture: Logo
    }),
    computed: { // logical state
        // name() {
        //     return this.$store.state.name
        // },
        priceLabel() {
            return `$ ${this.price.toFixed(2)} kg`
        }
    },
    methods: {
        viewDetails() {
            // this.$emit('openDetails', fruta) --> parent (controller)
            // this.$store.dispatch('openDetails', fruta) --> store (controller)
        }
    }
}
</script>