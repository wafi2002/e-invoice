<!-- pages/index.vue -->
<template>
    <!-- Card container -->
    <div class="min h-screen bg-gray-100 p-12 flex justify-center items-start my-5">
        <div class="bg-white rounded-2xl shadow-lg p-6 w-auto border border-red-500">
            <h2 class="text-xl font-semibold mb-4">Chart in card</h2>
            <div class="relative h-64">
                <canvas ref="canvas" class="w-full"></canvas>

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)

const canvas = ref(null)

onMounted(() => {
    const ctx = canvas.value.getContext('2d')

    new Chart(ctx, {
        type: 'pie', // You can change to 'line', 'pie', etc.
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green'],
            datasets: [
                {
                    label: 'Votes',
                    data: [12, 19, 3, 5],
                    backgroundColor: ['red', 'blue', 'yellow', 'green'],
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    })
})

</script>
