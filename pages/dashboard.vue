
<template>
    <div style="padding: 20px">
        <el-card style="margin-bottom: 20px">
            <template #header>
                <div class="card-header">
                    <span>数据卡片</span>
                </div>
            </template>
            <el-space fill fill-ratio="25%" style="display: flex">
                <div style="display: flex;align-items: center" v-for="i in 4" :key="i">
                    <div style="text-align: center;flex: 1;height: 100px">
                        {{ i }}
                    </div>
                    <el-divider style="height: 40px" v-if="i!=4" direction="vertical" />
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
    </div>

</template>
<script setup>

</script>
<style scoped>
    .flex-item__item {
        display: flex;
    }
</style>