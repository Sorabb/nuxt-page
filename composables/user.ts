export const useUserStore = defineStore('userStore', () => {
    const menu = ref([1])
    const user = ref();
    const updateUser = (data) => {
        menu.value = data.menu;
        user.value = data.user;
    }
    return {
        menu,user,updateUser
    }
})