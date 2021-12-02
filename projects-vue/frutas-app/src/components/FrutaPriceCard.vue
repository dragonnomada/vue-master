<template>
    <div>
        <div class="flex flex-col">
            <div class="flex flex-row">
                <div></div>
                <div></div>
            </div>
            <div class="flex flex-row">
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