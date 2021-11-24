<template>
    <div>
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="@/assets/imgs/logo.png" alt="" />
            </div>
            <!-- 表单区域 -->
            <el-form
                ref="LoginformRef"
                label-width="0px"
                class="login_input"
                :model="LoginForm"
                :rules="rules"
            >
                <!-- 帐号 -->
                <el-form-item prop="account">
                    <el-input
                        prefix-icon="iconfont icon-morentouxiang"
                        v-model="LoginForm.account"
                    ></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        prefix-icon="iconfont icon-3702mima"
                        v-model="LoginForm.password"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="language">
                        <i class="global fa fa-globe"></i>
                        <el-select
                            @change="changeLanguage"
                            v-model="selectLanguage"
                        >
                            <el-option
                                v-for="item in languages"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            ></el-option>
                        </el-select>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="login"
                        :loading="isLoginning"
                        >{{ $t('Login') }}</el-button
                    >
                </el-form-item>
                <el-form-item class="btns">
                    <span>
                        <el-checkbox v-model="remeber">{{
                            $t('Remember password')
                        }}</el-checkbox>
                    </span>
                    <span class="f-r">
                        <el-link
                            :underline="false"
                            @click="$router.push('/forgot')"
                            >{{ $t('Forgot') }}</el-link
                        >
                        <el-divider direction="vertical"></el-divider>
                        <el-link
                            :underline="false"
                            @click="$router.push('/register')"
                            >{{ $t('Registered') }}</el-link
                        >
                    </span>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            LoginForm: {
                account: '',
                password: '',
            },
            remeber: false,
            isLoginning: false,

            selectLanguage: 'zh',
        };
    },
    methods: {
        login() {
            this.$refs.LoginformRef.validate(valid => {
                if (valid) {
                    this.isLoginning = true;
                    // this.$post('/user/login', this.LoginForm).then(res => {
                    this.isLoginning = false;
                    // if (res.success) {
                    this.$message.success(this.$t('Login succeeded'));

                    this.initState({
                        isLogin: true,
                    });
                    this.$router.push('/home');
                    // } else {
                    // this.$message.error(res.message);
                    // }
                    // });
                } else {
                    return false;
                }
            });
        },

        changeLanguage(val) {
            this.selectLanguage = val;
            this.$i18n.locale = val;
            this.initState({
                language: val,
            });
        },

        close() {
            ipcRenderer.send('close');
        },

        ...mapMutations(['initState']),
    },
    computed: {
        rules() {
            return {
                account: [
                    {
                        required: true,
                        message: this.$t('Please enter the account number'),
                        trigger: 'blur',
                    },
                ],
                password: [
                    {
                        required: true,
                        message: this.$t('Please enter login password'),
                        trigger: 'blur',
                    },
                    // {
                    //     min: 3,
                    //     max: 10,
                    //     message: this.$t('The length is 3 to 5 for characters'),
                    //     trigger: 'change',
                    // },
                ],
            };
        },

        ...mapState(['isLogin', 'language', 'languages']),
    },
    watch: {
        language() {
            this.selectLanguage = this.language;
        },
    },
};
</script>

<style scoped lang="scss">
.login_box {
    margin: auto;
    width: 600px;
    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eeeeee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #dddddd;
        background-color: white;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eeeeee;
        }
    }
    .login_input {
    }
}
</style>
