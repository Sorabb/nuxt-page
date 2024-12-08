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
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                left: 'center',
                bottom: '10',
                data: chartData.map(i => i.name)
            },
            series: [
                {
                    name: 'pie chart',
                    type: 'pie',
                    roseType: 'radius',
                    radius: [15, 95],
                    center: ['50%', '38%'],
                    data: chartData,
                    animationEasing: 'cubicInOut',
                    animationDuration: 900
                }
            ]
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