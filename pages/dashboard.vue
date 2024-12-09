<template>
    <el-card style="margin-bottom: 20px">
        <template #header>
            <span>数据卡片</span>
        </template>
        <el-space fill :fill-ratio=24 style="display: flex">
            <div style="display: flex;align-items: center" v-for="i in 4" :key="i">
                <div style="text-align: center;flex: 1;display: flex;height: 100px;align-items: center;cursor: pointer;" @click="onSelectChart(dataKeyArray[i-1])">
                    <div class="data-card-img">
                        <el-icon :size="44"  :style="{color: colorJson[i-1]}">
                            <IconList :name="dashboardData[dataKeyArray[i-1]].icon"></IconList>
                        </el-icon>
                    </div>
                    <div class="data-card-world">
                        <p class="title">{{dashboardData[dataKeyArray[i-1]].title}}</p>
                        <p class="number">
                            <span>{{dashboardData[dataKeyArray[i-1]].num}}</span>个
                        </p>
                    </div>

                </div>
                <el-divider style="height: 40px" v-if="i!==4" direction="vertical" />
            </div>
        </el-space>
    </el-card>
    <el-card style="margin-bottom: 20px;">
        <template #header>
            <span>图表卡片</span>
        </template>
        <dashboard-line-chart :time="dashboardData.time" :chart-data="dashboardData[selectChart].lines"></dashboard-line-chart>
    </el-card>
    <div style="display: flex;gap: 20px">
        <el-card style="flex: 1">
            <dashboard-bar-chart :chart-data="dashboardDataBar"></dashboard-bar-chart>
        </el-card>
        <el-card style="flex: 1">
            <dashboard-pie-chart :chart-data="dashboardDataPie"></dashboard-pie-chart>
        </el-card>
    </div>
</template>
<script setup>
import { getDashboard, getDashboardPie, getDashboardBar } from '~/utils/api.ts';
    const selectChart = ref('data1');
    const onSelectChart = (val) => {
        if (val != selectChart.value) {
            selectChart.value = val;
        }
    }
    const colorJson = [
        "#40c9c6",
        "#36a3f7",
        "#f4516c",
        "#34bfa3"
    ]
    const dataKeyArray = [
        'data1',
        'data2',
        'data3',
        'data4'
    ]
    const { data: dashboardData } = await useAsyncData(
        'dashboard',
        () => getDashboard());

    const { data: dashboardDataPie } = await useAsyncData(
        'dashboardDataPie',
        () => getDashboardPie());

    const { data: dashboardDataBar } = await useAsyncData(
        'dashboardDataBar',
        () => getDashboardBar());
</script>
<style scoped>
    .data-card-img {
        padding: 0 10px 0 30px;
    }
    .data-card-world {
        .title {
            color: #00000072;
            text-align: left;
            margin: 2px 0 10px 0;
            font-size: 14px;
        }
        .number {
            color: #666;
            text-align: left;
            vertical-align: bottom;
            margin: 4px 0;
            font-size: 12px;
            line-height: 22px;
            span {
                font-weight: 500;
                margin-right: 3px;
                line-height: 22px;
                font-size: 22px;
            }
        }
    }
</style>