<template>
    <el-container :style="{height: '100vh'}">
        <el-aside width="40%"
                  style="display:flex;align-items: center;justify-content: center;background: #1890FF;color: #fff">
            这是背景
        </el-aside>
        <el-main
            style="display:flex;align-items: center;justify-content: center;background: #eee">
            <div style="width: 400px;background: #fff;padding: 0 100px 40px;border-radius:var(--el-border-radius-base)">
                <el-form :model="formValue"
                         ref="formRef"
                         label-width="auto"
                         @keyup.enter="login"
                >
                    <div :style="`font-size: var(--el-font-size-title);line-height:4;text-align:center`">系统登录</div>
                    <el-form-item label="用户名" prop="username" :rules="[
                        {
                          required: true,
                          message: '请输入用户名',
                          trigger: 'blur',
                        },
                      ]">
                        <el-input :prefix-icon="ElIconUser" v-model="formValue.username" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password" :rules="[
                        {
                          required: true,
                          message: '请输入密码',
                          trigger: 'blur',
                        },
                      ]">
                        <el-input :prefix-icon="ElIconLock" v-model="formValue.password" type="password" show-password />
                    </el-form-item>
                    <el-form-item label="验证码" prop="captch" width="60%" :rules="[
                        {
                          required: true,
                          message: '请输入验证码',
                          trigger: 'blur',
                        },
                      ]">
                        <el-col :span="15">
                            <el-input :prefix-icon="ElIconPostcard" v-model="formValue.captch" />
                        </el-col>
                        <el-col :span="9" style="padding-left: 20px">
                            <Captcha v-model:code="captchaValue"></Captcha>
                        </el-col>
                    </el-form-item>
                </el-form>
                <div>
                    <el-button @click="login" type="primary" style="width: 100%">登录</el-button>
                </div>

            </div>
        </el-main>
    </el-container>
</template>
<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { setData } from 'nuxt-storage/local-storage';
import { ElMessage } from 'element-plus';
const token = useCookie('token');
const formValue = reactive({
    username: 'admin',
    password: 'admin',
    captch: '',
});

const captchaValue = ref();
const formRef = ref();
const router = useRouter();

const login = () => {
    formRef.value.validate((result) => {
        if (result) {
            if (formValue.captch !== captchaValue.value) {
                ElMessage.error('请输入正确的验证码');
                return;
            }
            axios.post('/api/user')
                .then((res) => {
                    console.log('GET MOCK USER====', res.data);
                    if(res.data.code === 200) {
                        ElMessage({
                            message: res.data.msg,
                            type: 'success',
                        });
                        token.value = res.data.token;
                        router.push('/');
                        return;
                    }
                });
        }

    });
};

definePageMeta({
    layout: '',
});
</script>