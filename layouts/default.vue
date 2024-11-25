<script setup lang="ts">
    const menuData = [
        {
            id: 1,
            menu_name: '首页',
            path: '/',
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
    ]
</script>

<template>
    <el-container class="container">
        <el-header class="header">
            icon
            header
            user-icon
            user-name
        </el-header>
        <el-container>
            <el-aside class="aside">
                <el-menu
                    :collapse="false"
                    style="width: 100%;height: 100%;"
                >
                    <template v-for="item in menuData">
                        <el-sub-menu  v-if="item.children && item.children.length > 0" :index="String(item.id)">

                            <template #title>
                                <IconList :name="item.icon_name"></IconList>
                                {{item.menu_name}}
                            </template>
                            <el-menu-item  v-for="childrenItem in item.children" :index="String(childrenItem.id)">
                                <template #title>
                                    {{childrenItem.menu_name}}
                                </template>
                            </el-menu-item>
                        </el-sub-menu>
                        <el-menu-item v-else :index="String(item.id)">
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
        background: #ffffff;
        height: 60px;
        border-bottom: 1px solid #ebebeb;
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