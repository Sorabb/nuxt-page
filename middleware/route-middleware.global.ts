import axios from 'axios';
import routeData from '~/utils/route-list.ts';

export default defineNuxtRouteMiddleware(async (to, from) => {

    console.log('mid run',to.path)
    const token = useCookie('token');
    const checkLogin = async () => {
        return await axios.post('/api/getUserInfo', {
            token: token.value
        }).then((res) => {
            console.log(res, 1);
            return res;
        });
    }
    const { staticList } = routeData;
    console.log(token)
    if (!token.value) {
        console.log('token not found');
        return abortNavigation()
    } else {
        return abortNavigation()
    }

    if (!staticList.includes(to.path)) {
        if (token.value) {
            const userInfoRes = await checkLogin();
            console.log(userInfoRes,3);
            if (to.path === '/') {
                return navigateTo('/dashboard');
            } else if (to.path === '/login') {
                return navigateTo('/dashboard');
            }
        } else {
            console.log('notoken')
            return navigateTo('/login');
        }
    }
})