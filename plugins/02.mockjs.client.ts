import Mock from "mockjs";
import dayjs from "dayjs";
import { useTableStore } from '~/composables/tableData.ts';
import url from 'url';


export default defineNuxtPlugin((nuxtApp) => {
    const timeout = process.env.NODE_ENV == "development" ? 300 : 400;
    const Random = Mock.Random;
    Random.extend({
        mockphone: () => {
            const mobile = [134, 135, 136, 137, 138, 139, 150, 151, 152, 158, 159, 182, 183, 184, 187, 188];
            const unicom = [130, 131, 132, 155, 156, 185, 186];
            const telecom = [133, 153, 180, 181, 189];
            const topthree = [].concat(mobile,unicom,telecom);
            const three = String(Random.pick(topthree));
            const eight = Random.string('number',8);
            return three + eight;
        }
    })


    const tableStore = useTableStore();
    const { list:tableList,updateData, deleteData, editData, addData } = tableStore;

    const tableData = Mock.mock({
        "data|30-50": [
            {
                "id|+1": 1,
                "name": () => {
                    return Random.cname();
                },
                "gender|1":['01','02','03'],
                "phone": () => {
                    return Random.mockphone();
                },
                "date": () => {
                    return Random.date()
                },
                "address": () => {
                    return Mock.mock('@county(true)')
                },
                "deletion": '01'
            }
        ]
    });
    updateData(tableData.data);


    const createNum = (min,max) => {
        return Random.integer(min,max)
    }
        Mock.setup({
        timeout: timeout
    })
    Mock.mock('/api/user', 'post',{
        code: 200,
        token: 'ey' + Random.string(10) + '_ct_' + Date.now().toString(),
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
                        id: 3,
                        menu_name: '功能页',
                        path: '/directory',
                        icon_name: 'ElIconOperation',
                        children: [
                            {
                                id: 31,
                                path: '/directory/table-and-form',
                                menu_name: '表格增删改查',
                            }
                        ],
                    },
                    {
                        id: 2,
                        menu_name: '系统设置',
                        icon_name: 'ElIconSetting',
                        children: [
                            {
                                id: 21,
                                path: '/setting/user-setting',
                                menu_name: '用户管理',
                            },
                            {
                                id: 22,
                                path: '/setting/role-setting',
                                menu_name: '角色管理',
                            },
                            {
                                id: 23,
                                path: '/setting/menu-setting',
                                menu_name: '菜单管理',
                            },
                            {
                                id: 24,
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
        token: 'ey' + Random.string(10) + 'te_'
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
                    name: Random.cname(),
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
                    name: Random.cname(),
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
    Mock.mock(/api\/table\/list/,'get', (req) => {
        const list = tableList.list;
        const params = url.parse(req.url,true).query;
        const paramsPage = Number(params.page);
        const paramsSearch = params.search;
        const page = Number.isInteger(paramsPage) && paramsPage > 0 ? paramsPage : 1;
        let filterList = list.filter((i) => {
            return i.deletion == '01'
        });
        for (const key in paramsSearch) {
            if (key == 'name') {
                filterList = filterList.filter((i) => {
                    return i.name.indexOf(paramsSearch[key]) > -1
                })
            }
            if (key == 'gender') {
                filterList = filterList.filter((i) => {
                    return i.gender == paramsSearch[key]
                })
            }
            if (key == 'phone') {
                filterList = filterList.filter((i) => {
                    return i.phone.indexOf(paramsSearch[key]) > -1
                })
            }
        }
        return {
            code: 200,
            data: {
                total: filterList.length,
                page: page,
                list: filterList.slice((page - 1) * 10, page * 10)
            }
        }
    })
    Mock.mock(/api\/table\/delete/,'post',(req) => {
        const targetDelete = JSON.parse(req.body).id;
        deleteData(targetDelete);
        return {
            code: 200,
            data: '删除成功'
        }
    })
    Mock.mock(/api\/table\/edit/,'post',(req) => {
        const targetEdit = JSON.parse(req.body);
        editData(targetEdit)
        return {
            code: 200,
            data: '修改成功'
        }
    })
    Mock.mock(/api\/table\/add/,'post',(req) => {
        const targetAdd = JSON.parse(req.body);
        addData(targetAdd)
        return {
            code: 200,
            data: '修改成功'
        }
    })
    Mock.mock(/api\/table\/info/,'get', (req) => {
        const list = tableList.list;
        const params = url.parse(req.url,true).query;
        return {
            code: 200,
            data: {
                total: list.length,
                page: req.page,
                list: list
            }
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