<template>
    <div class="bg-white rounded-2xl shadow-lg border border-red-500 p-4 sm:w-80">
        <h2 class="text-xl font-semibold mb-4 bg-yellow-100">Chart in card</h2>
        <div class="relative h-64 bg-blue-100">
            <canvas ref="canvas" class="w-full h-64 block"></canvas>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvas = ref<HTMLCanvasElement | null>(null)
const { createChart } = useChart<'pie'>()

onMounted(() => {
    createChart(canvas.value, 'pie', {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'Votes',
                data: [10, 20, 30],
                backgroundColor: ['red', 'blue', 'yellow']
            }
        ]
    })
})
</script>