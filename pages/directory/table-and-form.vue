<script setup lang="ts">
import { getDashboardBar, getTableData, deleteTableData } from '~/utils/api.ts';
import { useTableStore } from '~/composables/tableData.ts';
import axios from 'axios';
import TableEditModal from '~/components/TableEditModal.vue';

const page = ref(1);
const loading = ref(true);
const showEditModal = ref(false);
const showAddModal = ref(false);
const showDetailModal = ref(false);
const editModalData = ref(null);
const searchForm = ref({});
const searchFormRef = ref(null);
const searchValue = ref({});


const fetchListData = async () => {
    loading.value = true;
    const data = await getTableData({
        page: page.value,
        search: { ...searchValue.value }
    });
    loading.value = false;
    return data;
}
const { data: tableData,refresh: refreshTable } = await useAsyncData(
    'tableData',
    () => fetchListData(), {
        watch: [page,searchValue]
    })
const formattergender = (row,column) => {
    if (row.gender === '01') {
        return '男';
    } else if (row.gender === '02') {
        return '女';
    } else if (row.gender === '03') {
        return '未知';
    } else {
        return '-'
    }
}
const handleEdit = (a,b) => {
    showEditModal.value = true;
    editModalData.value = b;
}
const handleDetail = (a,b) => {
    showDetailModal.value = true;
    editModalData.value = b;
}
const onRefreshTable = () => {
    refreshTable();
}
const handleDelete = (_,item) => {
    deleteTableData({id: item.id}).then(() => {
        refreshTable();
    });
}
const handleCurrentChange = (target) => {
    page.value = target;
}
const onQuery = () => {
    page.value = 1;
    searchValue.value = { ...searchForm.value };
}
const onReset = () => {
    searchFormRef.value.resetFields();
    searchValue.value = {};
    page.value = 1;
}
</script>

<template>
    <el-card>
        <template #header>
            <span>增删改查表格</span>
        </template>
        <el-form inline ref="searchFormRef" :model="searchForm" style="padding-left: 20px">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="searchForm.name" clearable style="width: 150px" />
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-select v-model="searchForm.gender" clearable style="width: 150px" >
                    <el-option label="男" value="01"></el-option>
                    <el-option label="女" value="02"></el-option>
                    <el-option label="未知" value="03"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="searchForm.phone" clearable style="width: 150px" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onQuery">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="onReset">重置</el-button>
            </el-form-item>
        </el-form>
        <el-table
            v-loading="loading"
            :data="tableData.list" border>
            <el-table-column prop="name" label="姓名" align="center" />
            <el-table-column prop="gender" label="性别" align="center" :formatter="formattergender" />
            <el-table-column prop="phone" label="手机号" align="center" />
            <el-table-column prop="date" label="出生日期" align="center" />
            <el-table-column prop="address" label="住址" align="center" />
            <el-table-column label="操作" align="center">
                <template #default="item">
                    <el-button
                        text
                        type="primary"
                        @click="handleDetail(item.$index, item.row)">
                        查看
                    </el-button>
                    <el-button
                        text
                        type="primary"
                        @click="handleEdit(item.$index, item.row)">
                        编辑
                    </el-button>
                    <el-popconfirm
                        confirm-button-text="确认"
                        cancel-button-text="取消"
                        confirm-button-type="danger"
                        :icon="ElIconInfoFilled"
                        icon-color="#626AEF"
                        title="是否确认删除?"
                        @confirm="handleDelete(item.$index, item.row)"
                    >
                        <template #reference>
                            <el-button
                                text
                                type="danger"
                            >
                                删除
                            </el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            style="margin-top: 20px;"
            size="small"
            layout=" ->, total, prev, pager, next"
            :current-page="page"
            background
            @current-change="handleCurrentChange"
            :total="tableData.total" />

    </el-card>
    <TableEditModal v-model:showModal="showEditModal" :edit-data="editModalData" @refreshTable="onRefreshTable" />
    <TableDetailModal v-model:showModal="showDetailModal" :show-data="editModalData" />
</template>

<style scoped>

</style>