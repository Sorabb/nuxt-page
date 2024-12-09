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
    const data =  await instance.get('/api/dashboard');
    return data;
}
export const getDashboardPie = async () => {
    const data =  await instance.get('/api/dashboard/pie');
    return data;
}
export const getDashboardBar = async () => {
    const data =  await instance.get('/api/dashboard/bar');
    return data;
}
export const getTableData = async (params) => {
    const data =  await instance.get('/api/table/list',{
        params
    });
    return data;
}
export const deleteTableData = async (params) => {
    const data =  await instance.post('/api/table/delete',params);
    return data;
}
export const editTableData = async (params) => {
    const data =  await instance.post('/api/table/edit',params);
    return data;
}
export const getError = async () => {
    const data =  await instance.get('/error');
    return data;
}
export const getLogtimeout = async () => {
    const data =  await instance.get('/logtimeout');
    return data;
}
