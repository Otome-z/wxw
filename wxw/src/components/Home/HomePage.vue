<template>
    <div>
        <div class="section">
            <div class="item">
                <div class="cap">所属客服</div>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="item">
                <div class="cap">产品日期</div>
                <el-time-picker
                    is-range
                    v-model="value1"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围"
                >
                </el-time-picker>
            </div>
            <div class="item">
                <div class="cap">产品日期</div>
                <el-time-picker
                    is-range
                    v-model="value1"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围"
                >
                </el-time-picker>
            </div>
        </div>
        <div class="section">
            <div class="mb-20px">
                <el-button
                    type="primary"
                    size="small"
                    icon="el-icon-edit"
                    class="mr-20px"
                    >批量编辑</el-button
                >
                <el-button-group>
                    <el-button
                        type="primary"
                        size="small"
                        icon="el-icon-edit"
                    ></el-button>
                    <el-button
                        type="primary"
                        size="small"
                        icon="el-icon-share"
                    ></el-button>
                    <el-button
                        type="primary"
                        size="small"
                        icon="el-icon-delete"
                    ></el-button> </el-button-group
            ></div>
            <div class="mb-20px">
                <el-radio-group v-model="status" size="small">
                    <el-radio-button label="全部">全部(20)</el-radio-button>
                    <el-radio-button label="未发布">未发布(20)</el-radio-button>
                    <el-radio-button label="失败"
                        ><span class="RED">失败(20)</span></el-radio-button
                    >
                </el-radio-group></div
            >
            <div class="content">
                <div class="group">
                    <div class="group_title">
                        <span>本地分组</span>
                        <i class="fa fa-cog f-r"></i>
                    </div>
                    <el-tree :data="group" :props="defaultProps">
                        <span
                            class="custom-tree-node"
                            slot-scope="{ node, data }"
                        >
                            <span>{{ node.label }}</span>
                            <span>
                                32
                            </span>
                        </span>
                    </el-tree>
                </div>
                <div class="table">
                    <el-table
                        :data="tableData"
                        ref="table"
                        class="mb-10px"
                        @row-click="rowClick"
                        style="width:100%"
                    >
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="date" label="日期" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="180">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <el-button
                                    type="primary"
                                    size="small"
                                    icon="el-icon-edit"
                                    class="mr-10px"
                                    >编辑产品</el-button
                                ><el-button
                                    type="primary"
                                    size="small"
                                    icon="el-icon-edit"
                                    class="mr-10px"
                                    >编辑产品</el-button
                                >
                            </template>
                        </el-table-column>
                    </el-table>
                    <div>
                        <el-pagination
                            :current-page="currentPage4"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            :total="400"
                            layout="total, sizes, prev, pager, next, jumper"
                            class="f-r"
                        >
                        </el-pagination>
                    </div>
                    <div>
                        <el-button
                            type="primary"
                            size="small"
                            icon="el-icon-edit"
                            class="mr-10px"
                            >批量编辑</el-button
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                {
                    value: '选项1',
                    label: '选项1',
                },
                {
                    value: '选项2',
                    label: '选项2',
                },
            ],
            value: '',
            value1: [
                new Date(2016, 9, 10, 8, 40),
                new Date(2016, 9, 10, 9, 40),
            ],
            status: '全部',

            group: [
                {
                    label: '一级 1',
                },
                {
                    label: '一级 2',
                    children: [
                        {
                            label: '二级 2-1',
                            children: [
                                {
                                    label: '三级 2-1-1',
                                },
                            ],
                        },
                        {
                            label: '二级 2-2',
                            children: [
                                {
                                    label: '三级 2-2-1',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '一级 3',
                    children: [
                        {
                            label: '二级 3-1',
                            children: [
                                {
                                    label: '三级 3-1-1',
                                },
                            ],
                        },
                        {
                            label: '二级 3-2',
                            children: [
                                {
                                    label: '三级 3-2-1',
                                },
                            ],
                        },
                    ],
                },
            ],
            defaultProps: {
                children: 'children',
                label: 'label',
            },

            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                },
            ],

            currentPage4: 1,
        };
    },
    methods: {
        rowClick(row, column, event) {
            this.$refs.table.toggleRowExpansion(row);
        },
    },
};
</script>

<style lang="scss" scoped>
.section {
    padding: 10px;
    background: white;
    border-radius: 4px;
    margin-bottom: 20px;
    .item {
        display: inline-block;
        margin-left: 20px;
        .cap {
            color: #999;
            margin-bottom: 5px;
            font-size: 13px;
        }
    }
}
.mr-20px {
    margin-right: 20px !important;
}

.content {
    display: grid;
    grid-template-columns: 200px auto;

    .group {
        .group_title {
            padding: 5px 15px;
            background: #f1f1f1;

            .fa-cog {
                position: relative;
                top: 2px;
            }
        }

        .custom-tree-node {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            padding-right: 8px;
        }
    }

    .table {
        margin-left: 15px;

        ::v-deep .el-table__expand-icon {
            display: none;
        }
    }
}
</style>
