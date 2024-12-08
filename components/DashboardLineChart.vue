<script setup lang="ts">
    import { ref,shallowRef } from 'vue';
    import * as echarts from 'echarts';
    import { useResizeHandler } from '~/composables/resizeHandler.ts';
    const { time, chartData} = defineProps(['time','chartData']);
    const color = [
        "#40c9c6",
        "#36a3f7"
    ]
    const chartboxRef = ref(null);
    const chartRef = shallowRef(null);

    const setupChart = () => {
        chartRef.value.setOption({
            xAxis: {
                data: time,
                boundaryGap: false,
                axisTick: {
                    show: false
                }
            },
            grid: {
                left: 100,
                right: 50,
                bottom: 20,
                top: 30,
                containLabel: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                padding: [5, 10]
            },
            yAxis: {
                axisTick: {
                    show: false
                }
            },
            legend: {
                data: ['line1', 'line2']
            },
            series: [
                {
                    name: 'line1',
                    smooth: true,
                    type: 'line',
                    itemStyle: {
                        color: '#FF005A',
                    },
                    lineStyle: {
                        color: '#FF005A',
                        width: 2
                    },
                    data: chartData[0],
                    animationDuration: 900,
                    animationEasing: 'cubicInOut'
                },
                {
                    name: 'line2',
                    smooth: true,
                    type: 'line',
                    itemStyle: {
                        color: '#3888fa',
                    },
                    lineStyle: {
                        color: '#3888fa',
                        width: 2
                    },
                    areaStyle: {
                        color: '#f3f8ff'
                    },
                    data: chartData[1],
                    animationDuration: 900,
                    animationEasing: 'quadraticOut'
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