import { Chart, registerables } from 'chart.js'
import type { ChartType, ChartData, ChartOptions } from 'chart.js'
import { ref, watchEffect, onBeforeMount } from 'vue'

Chart.register(...registerables)

/**
 * Create a reusable chart
 * @param canvas HTMLCanvasElement
 * @param type chart type (e.g. 'pie', 'bar')
 * @param data Chart data
 * @param options Chart options (optional)
 * @returns Chart instance or null
 */

export function useChart<TType extends ChartType>() {
    const chartRef = ref<Chart<TType> | null>(null)

    function createChart(
        canvas: HTMLCanvasElement | null,
        type: TType,
        data: ChartData<TType>,
        options?: ChartOptions<TType>
    ) {
        if (!canvas) {
            console.error('Canvas is null.')
            return
        }

        // Destroy existing chart before creating a new one
        if (chartRef.value) {
            chartRef.value.destroy()
        }

        const ctx = canvas.getContext('2d')
        if (!ctx) {
            console.error('Canvas context could not be retrieved.')
            return
        }

        const mergedOptions: ChartOptions<TType> = {
            responsive: true,
            maintainAspectRatio: false,
            ...(options || {})
        } as unknown as ChartOptions<TType>

        chartRef.value = new Chart<TType>(ctx, {
            type,
            data,
            options: mergedOptions
        })
    }

    // Cleanup on unmount
    onBeforeUnmount(() => {
        if (chartRef.value) {
            chartRef.value.destroy()
        }
    })

    return {
        chartRef,
        createChart
    }
}