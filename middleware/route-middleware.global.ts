

import axios from 'axios';
import routeData from '~/utils/route-list.ts';

export default defineNuxtRouteMiddleware((to, from) => {

    const token = useCookie('token');
    const checkLogin = () => {
        axios.post('/api/getUserInfo',{
            token:token.value
        }).then((res) => {
            console.log(res);
        })
    }
    const { staticList } = routeData;
    if (!staticList.includes(to.path)) {
        if (token.value) {
            checkLogin();
        } else {
            console.log('notoken')
            return navigateTo('/login');
        }
    }
})