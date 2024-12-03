<script setup lang="ts">
    const route = useRoute();
    const user = useUserStore();
    const userInfo = user.user;
    const menuData = user.menu;
    const breadcrumbArray = ref([]);
    const token = useCookie('token');
    const {$log} = useNuxtApp();
    const logout = () => {
        token.value = null;
        navigateTo('/login');
    }
    const menuMap = new Map();
    const mapFunction = (menuData:any) => {
        menuMap.clear();
        const travel = (list:[],parentPath?:any) => {
            for (const item of list) {
                let path = [item];
                if (parentPath) {
                    path = parentPath.concat(path);
                }
                menuMap.set(item.path, path);
                if (item.children?.length > 0) {
                    travel(item.children,path);
                }
            }
        }
        travel(menuData);
    }
    if (menuData?.length > 0) {
        mapFunction(menuData);
    }
    watchEffect(()=> {
        $log(route.path)
        breadcrumbArray.value = menuMap.get(route.path);
    })
</script>
<template>
    <el-container class="container">
        <el-header class="header">
            <div class="logo">logo</div>
            <div class="title">demo平台</div>
            <div class="user">
                <span class="img" style="margin-right: 5px"></span>
                <el-dropdown trigger="click">
                <span>
                    {{userInfo.username}}
                </span>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="logout">登出</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
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
                                <el-icon><IconList :name="item.icon_name"></IconList></el-icon>
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
                                <el-icon><IconList :name="item.icon_name"></IconList></el-icon>
                                {{item.menu_name}}
                            </template>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-container  class="content">
                <el-main class="main">
                    <div class="wrapper">
                        <div style="padding-top: 10px">
                            <el-breadcrumb :separator-icon="ElIconArrowRight">
                                <el-breadcrumb-item v-for="item in breadcrumbArray">
                                    {{item.menu_name}}
                                </el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                        <div style="padding: 20px 0">
                            <slot />
                        </div>

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
                box-sizing: border-box;
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