export const useTableStore = defineStore('tableStore', () => {
    const list = shallowRef({list:[]});
    const updateData = (data) => {
        list.value.list = data;
    }
    const fetchData = (page,size?,query:any) => {
        return 'fadsfasdf';
    }
    const deleteData = (id) => {
        const findItem = list.value.list.find(item => item.id === id);
        findItem.deletion = '00';
    }
    const editData = (data) => {
        const findItem = list.value.list.find(item => item.id == data.id);
        for (const i in data) {
            findItem[i] = data[i];
        }
    }
    const addData = (data) => {
        const olist = list.value.list;
        const id = olist[olist.length - 1].id + 1;
        olist.push({
            id: id,
            deletion: '01',
            ...data
        })
    }
    const itemData = (data) => {
        const findItem = list.value.list.find(item => item.id === data.id);
        for (const i of data) {
            findItem[i] = data[i];
        }
    }
    return {
        list,fetchData, updateData, deleteData, editData, addData
    }
})