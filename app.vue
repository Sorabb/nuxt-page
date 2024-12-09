
<template>
    <div>
        <el-config-provider :locale="zhCn">
            <NuxtLoadingIndicator />
            <NuxtLayout>
                <NuxtPage/>
            </NuxtLayout>
        </el-config-provider>
    </div>
</template>

<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>
<style>
    body{
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>