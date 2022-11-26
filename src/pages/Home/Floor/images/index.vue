<template>
  <div>
    <!-- 三级联动已经注册为全局组件，因此不需要引入，直接使用即可 -->
    <TypeNva/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Link/>
    <Fller/>
  </div>
</template>

<script>
//
import ListContainer from '@/pages/Home/ListContainer/index.vue'
import Recommend from '@/pages/Home/Recommend/index.vue'
import Rank from '@/pages/Home/Rank/index.vue'
import Link from '@/pages/Home/Link/index.vue'
import Fller from '@/pages/Home/Fllor/index.vue'
export default {
  name:'',
  data() {
    return {};
  },

  components: {ListContainer,Recommend,Rank,Link,Fller},

  //computed:{},

  //mounted () {},

  //method: {},
}
</script>

<style scoped>

</style>