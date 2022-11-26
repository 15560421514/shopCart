<template>
  <div>
    <!-- 三级联动已经注册为全局组件，因此不需要引入，直接使用即可 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Link/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>

  </div>
</template>

<script>
//
import ListContainer from '@/pages/Home/ListContainer/index.vue'
import Recommend from '@/pages/Home/Recommend/index.vue'
import Rank from '@/pages/Home/Rank/index.vue'
import Link from '@/pages/Home/Link/index.vue'
import Floor from '@/pages/Home/Floor/index.vue'
import Brand from '@/pages/Home/Brand/index.vue'
import {mapState} from 'vuex'
export default {
  name:'',
  data() {
    return {};
  },

  components: {ListContainer,Recommend,Rank,Link,Floor,Brand},

  computed:{
    ...mapState({
      floorList:state=>state.home.floorList
    })
  },

  mounted () {
    //派发获取floor组件的数据
    this.$store.dispatch("getFloorList");
    //获取用户信息在首页展示 携带token
    this.$store.dispatch("getUserInfo");
  },

  methods: {

  }
}
</script>

<style scoped>

</style>