import axios from 'axios';

const instance = axios.create();
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code == 200) {
        return response.data.data;
    } else if (response.data.code == 500) {
        console.log(500)
    } else {
        console.log(response.data.code)
        //navigateTo('/about');
    }
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});
export const getDashboard = async () => {
    return await instance.get('/api/dashboard');
}
export const getDashboardPie = async () => {
    return await instance.get('/api/dashboard/pie');
}
export const getDashboardBar = async () => {
    return  await instance.get('/api/dashboard/bar');
}
export const getTableData = async (params) => {
    return await instance.get('/api/table/list',{
        params
    });
}
export const deleteTableData = async (params) => {
    return await instance.post('/api/table/delete',params);
}
export const editTableData = async (params) => {
    return await instance.post('/api/table/edit',params);
}
export const addTableData = async (params) => {
    return await instance.post('/api/table/add',params);
}
export const getError = async () => {
    return await instance.get('/error');
}
export const getLogtimeout = async () => {
    return await instance.get('/logtimeout');
}
