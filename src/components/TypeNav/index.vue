<template>
        <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <!-- 事件委派|事件委托 -->
                <div @mouseleave="leaveIndex" @mouseenter="enterShow">
                    <h2 class="all">全部商品分类</h2>
                    <!-- 三级联动   过渡动画 -->
                    <transition name="sort">
                        <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex==index}">
                                <h3 @mouseenter="changeIndex(index)">
                                    <a 
                                    :data-categoryName="c1.categoryName" 
                                    :data-category1Id="c1.categoryId" 
                                    >{{c1.categoryName}}</a>
                                    <!-- <router-link to="/search">{{c1.categoryName}}</router-link> -->

                                </h3>
                                <!-- 二三级分类 -->
                                <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                                    <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a 
                                                :data-categoryName="c2.categoryName" 
                                                :data-category2Id="c2.categoryId" 
                                                >{{c2.categoryName}}</a>
                                                <!-- <router-link to="/search">{{c2.categoryName}}</router-link> -->
                                                
                                            </dt>
                                            <dd>
                                                <em v-for="(c3 , index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a 
                                                    :data-categoryName="c3.categoryName" 
                                                    :data-category3Id="c3.categoryId" 
                                                    >{{c3.categoryName}}</a>
                                                    <!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                                <!-- <h3>
                                    <a href="">个护化妆</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore">
                                            <dt>
                                                <a href="">电子书6</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">免费</a>
                                                </em>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋/两性</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">经管</a>
                                                </em>
                                                <em>
                                                    <a href="">畅读VIP</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">数字音乐</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">通俗流行</a>
                                                </em>
                                                <em>
                                                    <a href="">古典音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">摇滚说唱</a>
                                                </em>
                                                <em>
                                                    <a href="">爵士蓝调</a>
                                                </em>
                                                <em>
                                                    <a href="">乡村民谣</a>
                                                </em>
                                                <em>
                                                    <a href="">有声读物</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>
                                                <a href="">音像</a>
                                            </dt>
                                            <dd>
                                                <em>
                                                    <a href="">音乐</a>
                                                </em>
                                                <em>
                                                    <a href="">影视</a>
                                                </em>
                                                <em>
                                                    <a href="">教育音像</a>
                                                </em>
                                                <em>
                                                    <a href="">游戏</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>文艺</dt>
                                            <dd>
                                                <em>
                                                    <a href="">小说</a>
                                                </em>
                                                <em>
                                                    <a href="">文学</a>
                                                </em>
                                                <em>
                                                    <a href="">青春文学</a>
                                                </em>
                                                <em>
                                                    <a href="">传记</a>
                                                </em>
                                                <em>
                                                    <a href="">艺术</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>人文社科</dt>
                                            <dd>
                                                <em>
                                                    <a href="">历史</a>
                                                </em>
                                                <em>
                                                    <a href="">心理学</a>
                                                </em>
                                                <em>
                                                    <a href="">政治/军事</a>
                                                </em>
                                                <em>
                                                    <a href="">国学/古籍</a>
                                                </em>
                                                <em>
                                                    <a href="">哲学/宗教</a>
                                                </em>
                                                <em>
                                                    <a href="">社会科学</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>经管励志</dt>
                                            <dd>
                                                <em>
                                                    <a href="">经济</a>
                                                </em>
                                                <em>
                                                    <a href="">金融与投资</a>
                                                </em>
                                                <em>
                                                    <a href="">管理</a>
                                                </em>
                                                <em>
                                                    <a href="">励志与成功</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>生活</dt>
                                            <dd>
                                                <em>
                                                    <a href="">家庭与育儿</a>
                                                </em>
                                                <em>
                                                    <a href="">旅游/地图</a>
                                                </em>
                                                <em>
                                                    <a href="">烹饪/美食</a>
                                                </em>
                                                <em>
                                                    <a href="">时尚/美妆</a>
                                                </em>
                                                <em>
                                                    <a href="">家居</a>
                                                </em>
                                                <em>
                                                    <a href="">婚恋与两性</a>
                                                </em>
                                                <em>
                                                    <a href="">娱乐/休闲</a>
                                                </em>
                                                <em>
                                                    <a href="">健身与保健</a>
                                                </em>
                                                <em>
                                                    <a href="">动漫/幽默</a>
                                                </em>
                                                <em>
                                                    <a href="">体育/运动</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>科技</dt>
                                            <dd>
                                                <em>
                                                    <a href="">科普</a>
                                                </em>
                                                <em>
                                                    <a href="">IT</a>
                                                </em>
                                                <em>
                                                    <a href="">建筑</a>
                                                </em>
                                                <em>
                                                    <a href="">医学</a>
                                                </em>
                                                <em>
                                                    <a href="">工业技术</a>
                                                </em>
                                                <em>
                                                    <a href="">电子/通信</a>
                                                </em>
                                                <em>
                                                    <a href="">农林</a>
                                                </em>
                                                <em>
                                                    <a href="">科学与自然</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>少儿</dt>
                                            <dd>
                                                <em>
                                                    <a href="">少儿</a>
                                                </em>
                                                <em>
                                                    <a href="">0-2岁</a>
                                                </em>
                                                <em>
                                                    <a href="">3-6岁</a>
                                                </em>
                                                <em>
                                                    <a href="">7-10岁</a>
                                                </em>
                                                <em>
                                                    <a href="">11-14岁</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>教育</dt>
                                            <dd>
                                                <em>
                                                    <a href="">教材教辅</a>
                                                </em>
                                                <em>
                                                    <a href="">考试</a>
                                                </em>
                                                <em>
                                                    <a href="">外语学习</a>
                                                </em>
                                            </dd>
                                        </dl>
                                        <dl class="fore">
                                            <dt>其它</dt>
                                            <dd>
                                                <em>
                                                    <a href="">英文原版书</a>
                                                </em>
                                                <em>
                                                    <a href="">港台图书</a>
                                                </em>
                                                <em>
                                                    <a href="">工具书</a>
                                                </em>
                                                <em>
                                                    <a href="">套装书</a>
                                                </em>
                                                <em>
                                                    <a href="">杂志/期刊</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div> -->

                        </div>
                        </div>
                    </transition>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>

            </div>
        </div>
</template>

<script>
import {mapState} from 'vuex'
import throttle from 'lodash/throttle'

export default {
    name:'TypeNav',
    data() {
        return {
            currentIndex:-1,
            //存用户鼠标移上去的index索引值 

            show:true
        };
    },
    methods: {
        //鼠标进入修改响应式数据 currentIndex
        // changeIndex(index){
        //     this.currentIndex = index;
        // },
        //节流函数别用箭头函数  可能会出现上下文this不正确的情况
        changeIndex:throttle(function(index){
            this.currentIndex = index;
        },50),
        leaveIndex(){
            //判断如果是search路由组件时候才会执行
                this.currentIndex=-1;
            if (this.$route.path != '/home') {
                this.show = false;
            }
        },

        goSearch(event){
            // this.$router.push('/search') 
            let element = event.target;
            let {categoryname,category1id,category2id,category3id} = element.dataset;
            if (categoryname) {
                let location = {name:'search'}
                let query = {categoryName:categoryname}
                if (category1id) {
                    query.category1Id = category1id
                }else if(category2id){
                    query.category2Id = category2id
                }else if(category3id){
                    query.category3Id = category3id
                }
                //如果路由跳转的时候带有params参数 需要一同传递过去
                if (this.$route.params) {
                    location.params = this.$route.params
                    location.query = query;
                    this.$router.push(location)

                }


            }  
        },
        enterShow(){
            //当鼠标移入的时候让商品列表进行展示
            if (this.$route.path != '/home') {
                this.show = true;  
            }
        }
    },

    components: {

    },
    computed:{
        ...mapState({
            //使用mapState state变量就是大的state
            categoryList:state=>state.home.categoryList
            // 等同以下写法
            // console.log(this.$store.state.home);
        })
    },

        //当组件挂在完毕就获取数据 发请求
    mounted () {

        
        //如果不是Home路由组件 将typaNav进行隐藏
        if(this.$route.path!="/home"){
            this.show = false;
        }
    },
}
</script>

<style scoped lang="less">
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }
                    // .item:hover{
                    //     background-color: pink;
                    // }
                    .cur{
                        background-color: skyblue;
                    }
                }
            }
            //过度动画的样式
            .sort-enter{
                height: 0px;
            }
            sort-enter-to{
                height: 461px;
            }
            .sort-enter-active{
                transition: all .5s linear;
            }
            
        }
    }
</style>