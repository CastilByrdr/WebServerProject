<script setup lang="ts">
import { ref, onMounted, shallowRef, computed, watch, nextTick } from 'vue'
import Chart from 'chart.js/auto'
import { type Weight, getWeight } from "@/model/weight";
import { isLogin, isAdmin } from "@/main"

const weights = ref<Weight[]>([])

const weights2 = ref([] as Weight[])

const weightChartEl = ref<HTMLCanvasElement | null>(null)

const weightChart = shallowRef<Chart | null>(null)

weights2.value = getWeight()

const weight = weights2.value.map(weight => weight.weight);
const date = weights2.value.map(weight => weight.date);
onMounted(() => {
for (let i=0;i<weight.length;i++)
    {
    weights.value.push({
		weight: weight[i],
		date: date[i]
	})
    } 
}) 


watch(weights, (newWeights) => {
	const ws = [...newWeights]

	if (weightChart.value) {
		weightChart.value.data.labels = ws
			.sort((a, b) => a.date - b.date)
			.map(weight => new Date(weight.date).toLocaleDateString() )
			.slice(-7)

		weightChart.value.data.datasets[0].data = ws
			.sort((a, b) => a.date - b.date)
			.map(weight => weight.weight)
			.slice(-7)

		weightChart.value.update()
		return
	}

	nextTick(() => {
		weightChart.value = new Chart(weightChartEl.value!.getContext('2d')!, {
			type: 'line',
			data: {
				labels: ws
					.sort((a, b) => a.date - b.date)
					.map(weight => new Date(weight.date).toLocaleDateString()),
				datasets: [
					{
						label: 'Weight',
						data: ws
							.sort((a, b) => a.date - b.date)
							.map(weight => weight.weight),
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
		})
	})
}, { deep: true })
</script>

<template>
	<main>
		<h1>Friend Charts</h1>
        <div class="avatar" v-if="!isAdmin && isLogin">
            <img src="../assets/Agent_Joseph.png" width="50" height="55">
            <strong> Joseph Ertman</strong>
        </div>
        <div class="avatar" v-else-if="!isLogin && isAdmin">
            <img src="../assets/Trunks_anime_profile.png" width="50" height="50">
            <strong> Trunks Brief</strong>
        </div>
        <div v-else></div>
		<div v-if="weights && weights.length >= 0">

			<h2>
				Last 7 days
			</h2>

			<div class="canvas-box">
				<canvas ref="weightChartEl"></canvas>
			</div>
		</div>
	</main>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'montserrat', sans-serif;
}

main {
	padding: 1.5rem;
}

h1 {
	font-size: 2em;
	text-align: center;
	margin-bottom: 2rem;
}

h2 {
	margin-bottom: 1rem;
	color: #888;
	font-weight: 400;
}

.canvas-box {
	width: 100%;
	max-width: 720px;
	background-color: white;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	margin-bottom: 2rem;
}
</style>