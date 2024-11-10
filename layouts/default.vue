<script setup lang="ts">
import axios from 'axios'
function contactForm() {
    axios.post('/api/user')
        .then((res) => {
            console.log('GET MOCK USER====', res.data)
        })
}
contactForm()
</script>

<template>
    <div>
        <header>header</header>
        <div>
            <div>menu</div>
            <slot />
        </div>
    </div>
</template>

<style scoped>

</style>