import axios from 'axios';
export default defineNuxtPlugin(nuxtApp => {
    const route = useRoute();
    const router = useRouter();
    console.log('router run' + route.path)
    axios.post('/api/user').then((res) => {
        console.log(res,'check');
        setTimeout(() => {
            router.push({ path: '/login' })
        },100)
    })


})