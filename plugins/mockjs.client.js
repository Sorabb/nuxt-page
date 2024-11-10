import Mock from "mockjs"


export default defineNuxtPlugin(nuxtApp => {
    Mock.mock(/api\/user/, 'post',{
        code: 200,
        msg: '请求成功'
    })
    Mock.mock(/api\/user2/, 'post',{
        'list|1-10': [{
            'id|+1': 1,
            'email': '@EMAIL'
        }]
    })
})