import Mock from "mockjs"


export default defineNuxtPlugin(nuxtApp => {
    Mock.mock(/api\/user/, 'post',{
        code: 200,
        token: 'ey' + Mock.Random.string(10) + '_ct_' + Date.now().toString(),
        msg: '登录成功'
    })
    Mock.mock(/api\/getUserInfo/, 'post',(req) => {
        // check token validity
        console.log(req);
        return {
            code: 200,
            data: {
                user: {
                    id: 1,
                    username: 'a'
                },
                menu: [],
            },
            msg: '登录成功'
        }
    })
    Mock.mock(/api\/test/, 'get',{
        token: 'ey' + Mock.Random.string(10) + 'te_'
    })
})