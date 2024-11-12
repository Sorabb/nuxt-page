import Mock from "mockjs"


export default defineNuxtPlugin(nuxtApp => {
    Mock.mock(/api\/user/, 'post',{
        code: 200,
        token: 'ey' + Mock.Random.string(10) + 'te_',
        msg: '登录成功'
    })
    Mock.mock(/api\/getUserInfo/, 'post',(req) => {
        console.log(req);
        return {
            code: 200,
            data: {
                id: 1,
                username: 'a'
            },
            msg: '登录成功'
        }
    })
    Mock.mock(/api\/test/, 'get',{
        token: 'ey' + Mock.Random.string(10) + 'te_'
    })
})