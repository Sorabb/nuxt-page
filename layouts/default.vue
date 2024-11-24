<script setup lang="ts">
import { ref } from 'vue';
const loadingStatus = ref(false);


</script>

<template>
    <template v-if="loadingStatus">
        <div class="loading-box">
            <el-icon class="is-loading"  style="font-size: 30px">
                <ElIconLoading />
            </el-icon>
        </div>
    </template>
    <template v-else>
        <div>
            <header>header</header>
            <div>
                <div>menu</div>
                <slot />
            </div>
        </div>
    </template>
</template>

<style scoped>
    .loading-box {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>