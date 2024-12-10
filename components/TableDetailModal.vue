<script setup lang="ts">
import { editTableData } from '~/utils/api.ts';

const showModal = defineModel('showModal');
const { showData } = defineProps(['show-data']);
const emits = defineEmits(['refreshTable']);
const editForm = ref({});

watch(() => showData,(a,b) => {
    editForm.value = { ...showData }
});
const closeModal = () => {
    showModal.value = false
}
</script>

<template>
    <el-dialog v-model="showModal"  title="详情" width="800" v-if="editForm">
        <el-descriptions :column=2>
            <el-descriptions-item label="用户名">{{ editForm.name }}</el-descriptions-item>
            <el-descriptions-item label="性别">
                <template v-if="editForm.gender == '01'">
                    男
                </template>
                <template v-else-if="editForm.gender == '02'">
                    女
                </template>
                <template v-else-if="editForm.gender == '03'">
                    未知
                </template>
                <template v-else>
                    -
                </template>
            </el-descriptions-item>
            <el-descriptions-item label="手机号">{{ editForm.phone }}</el-descriptions-item>
            <el-descriptions-item label="生日">{{ editForm.date }}</el-descriptions-item>
            <el-descriptions-item label="住址" span="2">{{ editForm.address }}</el-descriptions-item>
        </el-descriptions>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="closeModal">
                    关闭
                </el-button>
            </div>
        </template>
    </el-dialog>

</template>

<style scoped>
.text-center {
    text-align: center;
}
</style>