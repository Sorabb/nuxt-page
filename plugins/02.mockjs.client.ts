import Mock from "mockjs";
import dayjs from "dayjs";


export default defineNuxtPlugin((nuxtApp) => {
    const timeout = process.env.NODE_ENV == "development" ? 200 : 500;

    const createNum = (min,max) => {
        return Mock.Random.integer(min,max)
    }
        Mock.setup({
        timeout: timeout
    })
    Mock.mock('/api/user', 'post',{
        code: 200,
        token: 'ey' + Mock.Random.string(10) + '_ct_' + Date.now().toString(),
        msg: '登录成功'
    })
    Mock.mock('/api/getUserInfo', 'post',(req) => {
        // check token validity
        // console.log(req);
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
    Mock.mock('/api/test', 'get',{
        token: 'ey' + Mock.Random.string(10) + 'te_'
    })
    Mock.mock('/api/dashboard', 'get', (req) => {
        const timeArray = [];
        let index = 3;
        const subNum = createNum(1,7);
        for (let i = 3; i >= 0; i--) {
            const time = dayjs().subtract(i * 7 + subNum,'day').format('YYYY-MM-DD');
            timeArray.push(time);
        }
        const createLinesData = (min,max) => {
            const returnArray = [];
            for (let i = 0; i < 2; i++) {
                const itemArry = [];
                for (let j = 0; j < 4; j++) {
                    itemArry.push(createNum(min,max));
                }
                returnArray.push(itemArry);
            }
            return returnArray;
        }

        return {
            code: 200,
            data: {
                time: timeArray,
                data1: {
                    "icon": 'ElIconDocument',
                    "title": '数据1',
                    "num": createNum(10000,100000),
                    "lines": createLinesData(10000,100000)
                },
                data2: {
                    "icon": 'ElIconNotebook',
                    "title": '数据2',
                    "num": createNum(100000,1000000),
                    "lines": createLinesData(100000,1000000)
                },
                data3: {
                    "icon": 'ElIconTickets',
                    "title": '数据3',
                    "num": createNum(1000,10000),
                    "lines": createLinesData(1000,10000)
                },
                data4: {
                    "icon": 'ElIconMemo',
                    "title": '数据4',
                    "num": createNum(1000000,10000000),
                    "lines": createLinesData(1000000,10000000)
                },
            }
        }
    })
    Mock.mock('/api/dashboard/pie', 'get', (req) => {
        const createPieData = (min,max) => {
            const returnArray = [];
            for (let i = 0; i < 4; i++) {
                const item = {
                    name: Mock.Random.cname(),
                    value: createNum(1,99)
                }
                returnArray.push(item);
            }
            return returnArray;
        }
        const resultData = createPieData();
        return {
            code: 200,
            data: resultData
        }
    })
    Mock.mock('/api/dashboard/bar', 'get', (req) => {
        const createBarData = (min,max) => {
            const returnArray = [];
            for (let i = 0; i < 6; i++) {
                const item = {
                    name: Mock.Random.cname(),
                    value1: createNum(1,99),
                    value2: createNum(1,99),
                    value3: createNum(1,99)
                }
                returnArray.push(item);
            }
            return returnArray;
        }
        const resultData = createBarData();
        return {
            code: 200,
            data: resultData
        }
    })
    Mock.mock('/error','get', (req) => {
        return {
            code: 500,
            msg: '请求错误'
        }
    })
    Mock.mock('/logtimeout','get', (req) => {
        return {
            code: 400,
            msg: '登录过期'
        }
    })
})