<script setup lang="ts">
    const route = useRoute();
    console.log(route.matched);
    watchEffect(() => {
        console.log(route.matched,1);
    })
    const menuData = [
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
                },
                {
                    id: 7,
                    path: '/setting',
                    menu_name: '字典管理',
                }
            ]
        }
    ]
</script>

<template>
    <el-container class="container">
        <el-header class="header">
            <div class="logo">logo</div>
            <div class="title">demo平台</div>
            <div class="user">
                <span class="img"></span>
                <span>
                    user-name
                </span>
            </div>

        </el-header>
        <el-container>
            <el-aside class="aside">
                <el-menu
                    :default-active="route.path"
                    router
                    style="width: 100%;height: 100%;"
                >
                    <template v-for="item in menuData">
                        <el-sub-menu  v-if="item.children && item.children.length > 0" :index="String(item.path)">
                            <template #title>
                                <IconList :name="item.icon_name"></IconList>
                                {{item.menu_name}}
                            </template>
                            <el-menu-item  v-for="childrenItem in item.children" :index="String(childrenItem.path)">
                                <template #title>
                                    {{childrenItem.menu_name}}
                                </template>
                            </el-menu-item>
                        </el-sub-menu>
                        <el-menu-item v-else :index="String(item.path)">
                            <template #title>
                                <IconList :name="item.icon_name"></IconList>
                                {{item.menu_name}}
                            </template>
                        </el-menu-item>
                    </template>
<!--                    <el-menu-item>
                        <template #title>
                            end
                        </template>
                    </el-menu-item>-->
                </el-menu>
            </el-aside>
            <el-container  class="content">
                <el-main class="main">
                    <div class="wrapper">
                        <slot />
                    </div>

                </el-main>
                <el-footer class="footer">
                    footer
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<style scoped>
    .container {
        min-height: 100vh;
    }
    .header {
        display: flex;
        background: #ffffff;
        align-items: center;
        border-bottom: 1px solid #ebebeb;
        .logo {
            height: 30px;
            width: 60px;
            background: #1890FF;
            margin-right: 20px;
            border-radius: 4px;
            text-align: center;
            line-height: 30px;
            color: #fff;
        }
        .title {
            flex: 1;
        }
        .user {
            cursor: pointer;
            .img {
                display: inline-block;
                height: 20px;
                width: 20px;
                background: #1890FF;
                border-radius: 50%;
                vertical-align: middle;
            }
            span {
                vertical-align: middle;
                line-height: 20px;
            }
        }
    }
    .aside {
        background: #ffffff;
        width: 200px;
        border-right: 1px solid #ebebeb;
    }
    .content {
        min-width: 900px;
        background: #f2f3f5;
        .main {
            padding: 6px 20px 0;
            .wrapper {
                background: #ffffff;
                height: 100%;
                width: 100%;
            }
        }
        .footer {
            height: 30px;
            text-align: center;
        }
    }
</style>