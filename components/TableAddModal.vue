<script setup lang="ts">
import { addTableData } from '~/utils/api.ts';

const showModal = defineModel('showModal');
const emits = defineEmits(['refreshTable']);
const addForm = ref({});
const addFormRef = ref();

const closeModal = () => {
    addForm.value = {};
    showModal.value = false
}
const removeAllSpaces = (str) => {
    return str.replace(/\s+/g, '');
}
const onSubmit = () => {
    addFormRef.value.validate((data) => {
        if(data) {
            const submitData = {
                name: addForm.value.name,
                address: [
                    removeAllSpaces(addForm.value.address1),
                    removeAllSpaces(addForm.value.address2),
                    removeAllSpaces(addForm.value.address3)
                ].join(' '),
                gender: addForm.value.gender,
                phone: addForm.value.phone,
                date: addForm.value.date,
            }

            addTableData(submitData).then(() => {
                closeModal();
                emits('refreshTable');
            })
        }
    })
}
</script>

<template>
    <el-dialog v-model="showModal"  title="编辑" width="800">
        <el-form ref="addFormRef" :model="addForm" label-width="auto"
                 @keyup.enter="onSubmit">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="用户名"
                                  prop="name"
                                  :rules="[
                        {
                          required: true,
                          message: '请输入用户名',
                          trigger: 'blur',
                        },
                      ]">
                        <el-input v-model="addForm.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="性别"
                                  prop="gender"
                                  :rules="[
                        {
                          required: true,
                          message: '请选择性别',
                          trigger: 'blur',
                        },
                      ]">
                        <el-select v-model="addForm.gender" >
                            <el-option label="男" value="01"></el-option>
                            <el-option label="女" value="02"></el-option>
                            <el-option label="未知" value="03"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="手机号" prop="phone" :rules="[
                        {
                          required: true,
                          message: '请输入手机号',
                          trigger: 'blur',
                        },
                      ]">
                        <el-input v-model="addForm.phone" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="生日" prop="date" :rules="[
                        {
                          required: true,
                          message: '请输入生日',
                          trigger: 'blur',
                        },
                      ]">
                        <el-date-picker
                            format="YYYY-MM-DD"
                            v-model="addForm.date"
                            value-format="YYYY-MM-DD"
                            type="date"
                            style="width: 100%"
                        />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="住址" prop="address1"
                                  :rules="[
                        {
                          required: true,
                          message: '请输入地址',
                          trigger: 'blur',
                        },
                      ]">

                        <el-input v-model="addForm.address1" />

                    </el-form-item>
                </el-col>
                <el-col class="text-center" :span="1">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="7">
                    <el-form-item prop="address2"
                                  :rules="[
                        {
                          required: true,
                          message: '请输入地址',
                          trigger: 'blur',
                        },
                      ]">

                        <el-input v-model="addForm.address2" />
                    </el-form-item>
                </el-col>
                <el-col class="text-center" :span="1">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="7">
                    <el-form-item prop="address3"
                                  :rules="[
                        {
                          required: true,
                          message: '请输入地址',
                          trigger: 'blur',
                        },
                      ]">
                        <el-input v-model="addForm.address3" />
                    </el-form-item>
                </el-col>
            </el-row>
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
    line-height: 32px;
}
</style>