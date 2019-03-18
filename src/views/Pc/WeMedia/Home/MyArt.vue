<template>
    <div class="my-art">
        <div class="title">
            <div>
                <span>文章管理</span>
                <span v-if="isEdit">> 文章编辑</span>
            </div>
            <div class="cancle">
                <span @click="cancleEdit" v-if="isEdit">取消编辑</span>
            </div>
        </div>

        <!-- 文章管理 -->
        <el-tabs v-if="!isEdit" class="list" v-model="activeName" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first">
                <el-table
                    :data="allList"
                    stripe
                    style="width: 100%">

                    <el-table-column
                    prop="title"
                    label="标题"
                    width="">
                    </el-table-column>

                    <el-table-column
                    prop="add_time"
                    label="发表时间"
                    width="160"
                    align="center">
                    </el-table-column>

                    <el-table-column label="状态" width="100" align="center">
                        <template  slot-scope="scope">
                            {{scope.row.type==1?'已发表':'草稿'}}
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" width="200" align="center">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </el-tab-pane>
            <el-tab-pane label="已发表" name="second">
               <el-table
                    :data="publishList"
                    stripe
                    style="width: 100%">

                    <el-table-column
                    prop="title"
                    label="标题"
                    width="">
                    </el-table-column>

                    <el-table-column
                    prop="add_time"
                    label="发表时间"
                    width="160"
                    align="center">
                    </el-table-column>

                    <el-table-column label="状态" width="100" align="center">
                        <template  slot-scope="scope">
                            {{scope.row.type==1?'已发表':'草稿'}}
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" width="200" align="center">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </el-tab-pane>
            <el-tab-pane label="草稿" name="third">
                <el-table
                    :data="draftList"
                    stripe
                    style="width: 100%">

                    <el-table-column
                    prop="title"
                    label="标题"
                    width="">
                    </el-table-column>

                    <el-table-column
                    prop="add_time"
                    label="发表时间"
                    width="160"
                    align="center">
                    </el-table-column>

                    <el-table-column label="状态" width="100" align="center">
                        <template  slot-scope="scope">
                            {{scope.row.type==1?'已发表':'草稿'}}
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" width="200" align="center">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </el-tab-pane>
        </el-tabs>

        <!-- 文章编辑 -->
        <EditArt v-show="isEdit" :newsId='newsId'></EditArt>
    </div>
</template>

<script>
import EditArt from './EditArt.vue';
    export default {
        components:{
            EditArt
        },
        data() {
            return {
                activeName: 'first',
                isEdit: false,

                allList:[],         //全部文章
                publishList:[],     //已发布列表
                draftList:[],       //草稿箱

                newsId:-1,
            }
        },
        methods: {
            handleClick(tab) {
                if(this.activeName == 'first'){
                    this.getList()
                }
                if(this.activeName == 'second'){
                    this.getPublished()
                }
                if(this.activeName == 'third'){
                    this.getDraft()
                }
            },
            getList(){
                this.$axios.post('v2/article/list').then(res =>{
                    if(res.code == 0){
                        this.allList = res.data.list
                    }
                })
            },
            getPublished(){
                this.$axios.post('v2/article/published').then(res =>{
                    if(res.code == 0){
                        this.publishList = res.data.list
                    }
                })
            },
            getDraft(){
                this.$axios.post('v2/article/draft').then(res =>{
                    if(res.code == 0){
                        this.draftList = res.data.list
                    }
                })
            },
            handleDelete(index,row){
                this.$confirm('此操作将删除该文章, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post('v2/article/delete',{
                        aid:row.a_id
                    },{
                        transformRequest: [function (data) {
                            let ret = ''
                            for (let it in data) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                            }
                            return ret
                        }],
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(res =>{
                        if(res.code == 0){
                            console.log(res);
                            this.$notify({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.handleClick()
                        }else{
                           this.$notify({
                                type: 'error',
                                message: '删除失败!'
                            }); 
                        }
                    })
                }).catch(() => {
                    this.$notify({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            },
            handleEdit(index,row){
                this.isEdit = true
                this.newsId = Number(row.a_id)
            },
            cancleEdit(){
                this.isEdit = false
            }
        },
        created(){
            this.getList()
        }
    }
</script>

<style scoped lang='scss'>
    .my-art{
        .title{
            font-size: 18px;
            font-weight: 800;
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
            .cancle{
                span{
                    font-size: 14px;
                    font-weight: 0;
                    padding: 5px 15px;
                    cursor: pointer;
                    border: 1px solid #000;
                    border-radius: 5px;
                }
                span:hover{
                    font-size: 14px;
                    font-weight: 0;
                    padding: 5px 15px;
                    color: red;
                    cursor: pointer;
                    border: 1px solid #000;
                    border-radius: 5px;
                }
            }
        }
        .list{
            margin: 0 20px;
            margin-top: 20px;
        }
    }
</style>