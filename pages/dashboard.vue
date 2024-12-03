<template>
    <el-card style="margin-bottom: 20px">
        <template #header>
            <div class="card-header">
                <span>数据卡片</span>
            </div>
        </template>
        <el-space fill fill-ratio="25%" style="display: flex">
            <div style="display: flex;align-items: center" v-for="i in 4" :key="i">
                <div style="text-align: center;flex: 1;display: flex;height: 100px;align-items: center;">
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
    <el-card>
        <template #header>
            <div class="card-header">
                <span>图表卡片</span>
            </div>
        </template>
        <div style="display: flex;">
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
        </div>
    </el-card>
</template>
<script setup>
    import { getDashboard } from '~/utils/api.ts';
    const {$log} = useNuxtApp();
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
    const { data: dashboardData }  = await useAsyncData(
        'dashboard',
        () => getDashboard());
    $log(321321);
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