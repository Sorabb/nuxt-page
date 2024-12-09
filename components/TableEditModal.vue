<script setup lang="ts">
    import { editTableData } from '~/utils/api.ts';

    const showModal = defineModel('showModal');
    const { editData } = defineProps(['edit-data']);
    const emits = defineEmits(['refreshTable']);
    const editForm = ref({});

    watch(() => editData,(a,b) => {
        const address = editData.address.split(' ');
        const odata = {
            ...editData,
            address1: address[0],
            address2: address[1],
            address3: address[2]
        };

        delete(odata.address)
        editForm.value = odata
    });
    const closeModal = () => {
        showModal.value = false
    }
    const onSubmit = () => {
        const submitData = {
            name: editForm.value.name,
            id: editForm.value.id,
            address: [editForm.value.address1, editForm.value.address2, editForm.value.address3].join(' '),
            gender: editForm.value.gender,
            phone: editForm.value.phone,
            date: editForm.value.date,
        }
        editTableData(submitData).then(() => {
            closeModal();
            emits('refreshTable');
        })
    }
</script>

<template>
    <el-dialog v-model="showModal"  title="编辑" width="800" v-if="editForm">
        <el-form :model="editForm" label-width="auto"
                 @keyup.enter="onSubmit">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="用户名">
                        <el-input v-model="editForm.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="性别">
                        <el-select v-model="editForm.gender" >
                            <el-option label="男" value="01"></el-option>
                            <el-option label="女" value="02"></el-option>
                            <el-option label="未知" value="03"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="editForm.phone" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="生日" prop="date">
                        <el-date-picker
                            format="YYYY-MM-DD"
                            v-model="editForm.date"
                            value-format="YYYY-MM-DD"
                            type="date"
                            style="width: 100%"
                        />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="住址" prop="address">
                <el-col :span="6">
                    <el-input v-model="editForm.address1" />
                </el-col>
                <el-col class="text-center" :span="2">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="7">
                    <el-input v-model="editForm.address2" />
                </el-col>
                <el-col class="text-center" :span="2">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="7">
                    <el-input v-model="editForm.address3" />
                </el-col>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="closeModal">取消</el-button>
                <el-button type="primary" @click="onSubmit">
                    确认
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