export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('log', (str:string) => {
        if (process.env.NODE_ENV == "development") {
            console.log(str)
        }
    })
})