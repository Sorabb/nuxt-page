
<template>
  <div>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup>
import axios from 'axios';
const route = useRoute();
const router = useRouter()
import { getData, setData } from 'nuxt-storage/local-storage';
const token = getData('token');
const checkLogin = () => {
    axios.post('/api/getUserInfo',{
        token:token
    }).then((res) => {
        console.log(res);
    })
}

onMounted(() => {
    if (route.path != '/login') {
        if (token) {
            checkLogin();
        } else {
            console.log('notoken')
            router.push('/login');
        }
    }
})
</script>
<style>
    body{
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>