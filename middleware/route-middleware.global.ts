import axios from 'axios';
import routeData from '~/utils/route-list.ts';

export default defineNuxtRouteMiddleware(async (to, from) => {

    const token = useCookie('token');
    const userStore = useUserStore();
    const { user,updateUser } = userStore;
    // console.log(user,'user')

    const { staticList } = routeData;

    if (!staticList.includes(to.path)) {
        if (!user) {
            // console.log('getuser')
            if (token.value) {
                await axios.post('/api/getUserInfo', {
                    token: token.value
                }).then((res) => {
                    if (res.data.code == '200') {
                        updateUser(res.data.data);
                    }
                });
            }
        }
        if (token.value) {
            if (to.path === '/') {
                return navigateTo('/dashboard');
            } else if (to.path === '/login') {
                return navigateTo('/dashboard');
            }
        } else {
            // console.log('notoken')
            return navigateTo('/login');
        }
    }
})