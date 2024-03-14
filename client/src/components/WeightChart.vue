<script setup lang="ts">
//Page not completed, will flag problems if uncommented but otherwise does not affect site
/*import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import Chart from 'chart.js/auto';
import { type Weight } from '@/model/weight';

const props = defineProps<{
    weights: Weight[];
}>()

const chartRef = ref<Chart | null>(null);

const updateChart = () => {
if (chartRef.value) {
    chartRef.value.data.labels = props.weights
    .sort((a, b) => a.date - b.date)
    .map(weight => new Date(weight.date).toLocaleDateString())
    .slice(-7);

    chartRef.value.data.datasets[0].data = props.weights
    .sort((a, b) => a.date - b.date)
    .map(weight => weight.weight)
    .slice(-7);

    chartRef.value.update();
}
};

onMounted(() => {
const ctx = chartRef.value!.getContext('2d')!;
chartRef.value = new Chart(ctx, {
    type: 'line',
    data: {
    labels: [],
    datasets: [
        {
        label: 'Weight',
        data: [],
        backgroundColor: 'rgba(255, 69, 0, 0.2)',
        borderColor: 'rgba(255, 69, 0, 1)',
        borderWidth: 1,
        fill: true
        }
    ]
    },
    options: {
    responsive: true,
    maintainAspectRatio: false
    }
});
updateChart();
});

onUnmounted(() => {
if (chartRef.value) {
    chartRef.value.destroy();
}
});
</script>

<template>
<div class="canvas-box">
    <canvas ref="chart"></canvas>
</div>
</template>
  