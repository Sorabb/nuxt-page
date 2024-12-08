<script setup lang="ts">
import { ref,shallowRef } from 'vue';
import * as echarts from 'echarts';
import { useResizeHandler } from '~/composables/resizeHandler.ts';

const { chartData } = defineProps(['chartData']);

const chartboxRef = ref(null);
const chartRef = shallowRef(null);

const setupChart = () => {
    chartRef.value.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: 10,
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: chartData.map(i => i.name),
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: 'bar1',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: chartData.map(i => i.value1),
            animationDuration: 900
        }, {
            name: 'bar2',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: chartData.map(i => i.value2),
            animationDuration: 900
        }, {
            name: 'bar3',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: chartData.map(i => i.value3),
            animationDuration: 900
        }]
    });
}
const onChartResize = () => {
    chartRef.value.resize();
}
onMounted(() => {
    if (!chartRef.value) {
        chartRef.value = echarts.init(chartboxRef.value);
    }
    setupChart();
})
useResizeHandler(onChartResize)
watch(() => chartData,(chartData,preData) => {
    setupChart();
});


/*
watch等效
onUpdated(() => {
    setupChart();
})
*/
</script>

<template>
    <div class="chart" ref="chartboxRef"></div>
</template>

<style scoped>
.chart {
    width: 100%;
    height: 400px;
}
</style>