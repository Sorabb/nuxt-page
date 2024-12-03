import Mock from "mockjs"


export default defineNuxtPlugin((nuxtApp) => {
    const {$log} = nuxtApp;
    const timeout = process.env.NODE_ENV == "development" ? 200 : 500;

    Mock.setup({
        timeout: timeout
    })
    Mock.mock(/api\/user/, 'post',{
        code: 200,
        token: 'ey' + Mock.Random.string(10) + '_ct_' + Date.now().toString(),
        msg: '登录成功'
    })
    Mock.mock(/api\/getUserInfo/, 'post',(req) => {
        // check token validity
        // $log(req);
        return {
            code: 200,
            data: {
                user: {
                    id: 1,
                    username: 'admin'
                },
                menu: [
                    {
                        id: 1,
                        menu_name: '首页',
                        path: '/dashboard',
                        icon_name: 'ElIconHouse',
                        children: null,
                    },
                    {
                        id: 2,
                        menu_name: '系统设置',
                        icon_name: 'ElIconSetting',
                        children: [
                            {
                                id: 3,
                                path: '/setting/user-setting',
                                menu_name: '用户管理',
                            },
                            {
                                id: 4,
                                path: '/setting/role-setting',
                                menu_name: '角色管理',
                            },
                            {
                                id: 5,
                                path: '/setting/menu-setting',
                                menu_name: '菜单管理',
                            },
                            {
                                id: 6,
                                path: '/setting/dict-setting',
                                menu_name: '字典管理',
                            }
                        ]
                    }
                ],
            },
            msg: '登录成功'
        }

    })
    Mock.mock(/api\/test/, 'get',{
        token: 'ey' + Mock.Random.string(10) + 'te_'
    })
    Mock.mock(/api\/dashboard/, 'get',{
        code: 200,
        data: {
            data1: {
                "icon": 'ElIconDocument',
                "title": '数据1',
                "num|1-100000": 0
            },
            data2: {
                "icon": 'ElIconNotebook',
                "title": '数据2',
                "num|1-1000000": 0
            },
            data3: {
                "icon": 'ElIconTickets',
                "title": '数据3',
                "num|1-10000": 0
            },
            data4: {
                "icon": 'ElIconMemo',
                "title": '数据4',
                "num|1-10000000": 0
            },
        }
    })
})