<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方-->
    <router-view></router-view>
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //派发通知vuex发请求 获取商品三级分类的数据  存储仓库当中 store
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
