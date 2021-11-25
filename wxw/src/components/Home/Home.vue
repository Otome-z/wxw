<template>
    <div ref="home">
        <el-container class="home">
            <!-- 头部 -->
            <!-- 主题 -->
            <el-container>
                <!-- 侧边栏 -->
                <el-aside :width="isCollapse ? '66px' : '201px'">
                    <!-- 折叠区 -->
                    <!-- 侧边栏菜单区 -->
                    <div @click="isCollapse = !isCollapse" class="fold">
                        <i class="el-icon-s-unfold" v-show="isCollapse"></i>
                        <i class="el-icon-s-fold" v-show="!isCollapse"></i>
                    </div>
                    <vue-scroll :ops="ops" ref="scroll" class="asidScroll">
                        <el-menu
                            class="el-menu-vertical-demo"
                            ref="asideMenu"
                            :background-color="isCollapse ? '#348fe4' : '#fff'"
                            :text-color="isCollapse ? '#fff' : '#000'"
                            :active-text-color="isCollapse ? '#000' : '#fff'"
                            :default-active="asideChecked"
                            :default-openeds="[asideChecked.split('-')[0]]"
                            :collapse="isCollapse"
                            :collapse-transition="false"
                            :class="{ isCollapse: isCollapse }"
                            @select="select('asideChecked', $event)"
                            @open="asideOpen"
                            @close="asideClose"
                        >
                            <div v-show="!isCollapse">
                                <el-select
                                    v-model="searchValue"
                                    filterable
                                    placeholder="请选择"
                                    @change="searchMenu"
                                >
                                    <template slot="prefix">
                                        <i class="el-icon-search"></i>
                                    </template>
                                    <el-option
                                        v-for="item in searchOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </div>
                            <el-submenu
                                :index="Mindex + ''"
                                popper-class="home_popper"
                                v-for="(menu, Mindex) in leftMenus"
                                :key="Mindex"
                            >
                                <template slot="title">
                                    <i :class="menu.icon"></i>
                                    <span slot="title">{{ menu.name }}</span>
                                </template>
                                <div class="triangle"></div>
                                <vue-scroll :ops="ops" ref="scroll">
                                    <el-menu-item-group
                                        v-for="(group, Gindex) in menu.group"
                                        :key="group.name"
                                    >
                                        <span slot="title" class="group_name">{{
                                            group.name
                                        }}</span>
                                        <el-menu-item
                                            v-for="(sub, Sindex) in group.sub"
                                            :ref="
                                                `${Mindex}-${Gindex}-${Sindex}`
                                            "
                                            :key="Sindex"
                                            :index="
                                                `${Mindex}-${Gindex}-${Sindex}`
                                            "
                                            :class="{
                                                checked:
                                                    asideChecked ==
                                                    `${Mindex}-${Gindex}-${Sindex}`,
                                            }"
                                            >{{ sub.name }}</el-menu-item
                                        >
                                    </el-menu-item-group>
                                </vue-scroll>
                            </el-submenu>
                        </el-menu>
                    </vue-scroll>
                </el-aside>
                <!-- 右边主体内容 -->
                <el-main>
                    <el-header>
                        <div class="f-l">
                            <div class="tabs">
                                <span
                                    class="tab"
                                    v-for="(tab, index) in tabs"
                                    :key="index"
                                    >{{ tab.text }}</span
                                >
                            </div>
                        </div>
                        <div class="f-r ">
                            <i class="el-icon-bell"></i>
                            <i class="fa fa-question-circle-o  mr-20px"></i>
                            <el-divider direction="vertical"></el-divider>
                            <span class="id ml-20px">ID:123465</span>
                            <el-button size="mini" type="info"
                                >免费版</el-button
                            >
                            <el-button size="mini" type="primary"
                                >升级</el-button
                            >
                            <el-popover
                                placement="top-start"
                                width="300"
                                trigger="hover"
                                popper-class="user_popover"
                            >
                                <div>
                                    <div class="welcome">你好: 125*4789</div>
                                    <div class="user_info">
                                        <div class="clearfloat">
                                            <div class="f-l cap">当前版本</div>
                                            <div class="f-r">VIP2</div>
                                        </div>
                                        <div class="clearfloat">
                                            <div class="f-l cap">到期</div>
                                            <div class="f-r">2021-12-15</div>
                                        </div>
                                        <div class="clearfloat">
                                            <div class="f-l cap"
                                                >剩余店铺点数<i
                                                    class="el-icon-question"
                                                ></i
                                            ></div>
                                            <div class="f-r">3点/10点</div>
                                        </div>
                                        <div class="clearfloat">
                                            <el-progress
                                                :stroke-width="8"
                                                :percentage="50"
                                                :format="format"
                                            ></el-progress>
                                        </div>
                                        <div class="clearfloat">
                                            <div class="f-l cap"
                                                ><img
                                                    src="https://www.wxwerp.com/images/platform_icons/icon_17.png"
                                                    alt=""
                                                />Shopee</div
                                            >
                                            <div class="f-r">已绑定 5 </div>
                                        </div>
                                        <el-divider></el-divider>
                                        <div class="user_option">
                                            <i class="fa fa-user mr-20px"></i>
                                            <span>账号管理</span>
                                        </div>
                                        <div class="user_option">
                                            <i class="fa fa-user mr-20px"></i>
                                            <span>重置密码</span>
                                        </div>
                                        <el-divider></el-divider>
                                        <div class="user_option">
                                            <i
                                                class="fa fa-power-off mr-20px"
                                            ></i>
                                            <span>退出</span>
                                        </div>
                                    </div>
                                </div>
                                <i
                                    class="el-icon-user
                            "
                                    slot="reference"
                                ></i>
                            </el-popover>
                        </div>
                    </el-header>
                    <div class="page_title">产品列表</div>
                    <keep-alive>
                        <div class="content">
                            <router-view></router-view>
                        </div>
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            // vue-scroll
            ops: {
                mode: 'number',
                gutterOfSide: '5px',
                detectResize: true,
                scrollPanel: {
                    scrollingX: false,
                },
                rail: {
                    gutterOfEnds: null,
                    gutterOfSide: '2px',
                    keepShow: true,
                },
                bar: {
                    showDelay: 500,
                    onlyShowBarOnScroll: false,
                    keepShow: false,
                    background: 'rgba(0,0,0,0.2)',
                    opacity: 1,
                    size: '4px',
                    hoverStyle: false,
                },
            },

            asideChecked: '',

            isCollapse: true,
            activeName: '',

            searchOptions: [],
            searchValue: '',

            tabs: [
                {
                    text: '首页',
                    path: '',
                },
                {
                    text: '产品',
                    path: '',
                },
                {
                    text: '订单',
                    path: '',
                },
                {
                    text: '营销',
                    path: '',
                },
                {
                    text: '仓库',
                    path: '',
                },
                {
                    text: '物流',
                    path: '',
                },
                {
                    text: '报表',
                    path: '',
                },
            ],
        };
    },
    created() {
        this.searchOptions = [];
        this.leftMenus.forEach((el, Mindex) => {
            el.group.forEach((group, Gindex) => {
                let temp = group.sub.map((sub, Sindex) => {
                    return {
                        label: sub.name,
                        value: sub.name,
                        index: `${Mindex}`,
                        selfIndex: `${Mindex}-${Gindex}-${Sindex}`,
                    };
                });
                this.searchOptions = this.searchOptions.concat(temp);
            });
        });

        console.log(this.searchOptions);
    },
    mounted() {
        this.$refs.home.style.setProperty(
            '--asidHeight',
            window.innerHeight - 56 + 'px'
        );
        this.$refs.home.style.setProperty(
            '--asideBGColor',
            this.isCollapse ? '#348fe4' : '#fff'
        );
        this.$refs.home.style.setProperty(
            '--asideIconColor',
            this.isCollapse ? '#fff' : '#000'
        );
        this.$refs.home.style.setProperty(
            '--hoverColor',
            this.isCollapse ? '#2a72b6' : '#ddd'
        );
        window.onresize = () => {
            return (() => {
                if (this.$refs && this.$refs.home) {
                    this.$refs.home.style.setProperty(
                        '--asidHeight',
                        window.innerHeight - 56 + 'px'
                    );
                }
            })();
        };
    },
    methods: {
        asideOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        asideClose(key, keyPath) {
            console.log(key, keyPath);
        },

        selectTab(a, b) {
            console.log(a);
            console.log(b);
        },
        select(key, value, c) {
            this[key] = value;
        },

        searchMenu(value) {
            let option = this.searchOptions.find(el => {
                return el.value == value;
            });
            this.$nextTick(() => {
                this.$refs.asideMenu.open(option.index);
                console.log(this.$refs[option.selfIndex][0].$el);
                debugger;
            });
        },

        format(percentage) {
            return '';
        },
    },

    computed: {
        ...mapState(['leftMenus']),
    },
    watch: {
        isCollapse() {
            this.$refs.home.style.setProperty(
                '--asideBGColor',
                this.isCollapse ? '#348fe4' : '#fff'
            );
            this.$refs.home.style.setProperty(
                '--asideIconColor',
                this.isCollapse ? '#fff' : '#000'
            );
            this.$refs.home.style.setProperty(
                '--hoverColor',
                this.isCollapse ? '#2a72b6' : '#ddd'
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.el-header {
    padding: 0 0 1px 0;
    border-bottom: 1px solid #ddd;
    height: 57px !important;
    background: white;

    .f-r {
        line-height: 57px;
        margin-right: 20px;
        .el-icon-user {
            font-size: 25px;
            border-radius: 23px;
            border: 2px solid;
            color: #7e7e7e;
            font-weight: 600;
            position: relative;
            top: 3px;
            margin-left: 20px;
        }

        .el-button--mini {
            padding: 5px 11px;
            position: relative;
            top: -1px;
        }

        .id {
            margin-right: 25px;
            color: #788ba2;
        }

        i:not(.el-icon-user) {
            color: #788ba2;
            margin-left: 25px;
            &:hover {
                color: #5cb6ff;
            }
        }
    }

    .tabs {
        .tab {
            display: inline-block;
            padding: 17px 25px;
            height: 22px;
            cursor: pointer;
            &:hover {
                background-color: #ecf5ff;
                color: #409eff;
            }
        }
    }
}

.el-main {
    padding: 0;
    background: #f0f2f5;
    .page_title {
        background: white;
        padding: 13px 15px;
    }
    .content {
        padding: 10px;
    }
}
.el-container {
    height: 100%;
}
.el-aside {
    border-right: 1px solid #ddd;
    background: var(--asideBGColor);
    overflow: inherit;

    .asidScroll {
        height: var(--asidHeight) !important;

        ::v-deep {
            .el-input__inner {
                border-radius: 0px;
                border-left: none;
                border-right: none;
            }

            .el-icon-search {
                position: relative;
                top: 10px;
                left: 1px;
            }
        }
    }

    .fold {
        cursor: pointer;
        &:hover {
            background: var(--hoverColor);
        }
        i {
            padding-left: 20px;
            color: var(--asideIconColor);
            font-size: 18px;
            height: 56px;
            line-height: 56px;
        }
    }

    .el-menu {
        border-right: none;
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
        ::v-deep {
            i {
                color: var(--asideIconColor);
            }
            .checked {
                background-color: #348fe4 !important;
            }

            .el-submenu .el-menu-item {
                height: 40px;
                line-height: 40px;
                margin: 0px 15px;
                min-width: 170px;

                &:hover {
                    background-color: #348fe4 !important;
                    color: white !important;
                }
            }

            // .el-menu-item-group__title {
            //     display: none;
            // }
        }

        .isCollapse {
            .is-active {
                ::v-deep .el-submenu__title {
                    background-color: #2a72b6 !important;
                }
            }

            ::v-deep {
                .el-submenu .el-menu-item:hover {
                    background-color: #348fe4 !important;
                    color: white !important;
                }

                // .el-menu-item-group__title {
                //     display: block;
                // }
            }
        }
    }
}
</style>

<style lang="scss">
.home_popper {
    .triangle {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-left: 10px solid #348fe4;
        border-bottom: 10px solid transparent;
        position: relative;
        left: -1px;
        top: 17px;
    }
    .el-menu {
        height: 600px;
        .group_name {
            font-size: 16px;
            font-weight: bold;
        }
        .el-menu-item,
        .el-submenu__title {
            height: 34px;
            line-height: 34px;
        }

        .el-menu-item {
            &:hover {
                color: white !important;
                background-color: #348fe4 !important;
            }
        }
    }
    .el-menu-item-group ul {
        padding: 0px 10px !important;
    }
    .el-menu,
    .el-submenu__title,
    .el-menu-item,
    .el-submenu {
        background-color: white !important;
        color: black !important;
    }
    .el-menu--popup-right-start {
        margin-left: 1px;
    }
    .el-menu--popup {
        padding: 0;
    }
}
.user_popover {
    padding: 0px !important;
    .popper__arrow:after {
        border-bottom-color: #409eff !important ;
    }
    .clearfloat {
        margin-bottom: 10px;
    }

    .welcome {
        padding: 25px 20px 15px 20px;
        background: #409eff;
        font-size: 16px;
        color: white;
        font-weight: bold;
    }
    .user_info {
        padding: 20px 20px 10px 20px;
    }
    .cap {
        color: #999999;
        font-size: 16px;
    }

    .el-progress-bar {
        padding-right: 0px;
    }
    .el-divider--horizontal {
        margin: 15px 0px;
    }
    .user_option {
        padding: 10px 0px;
        cursor: pointer;
        &:hover {
            color: #409eff;
        }
    }
}
</style>
