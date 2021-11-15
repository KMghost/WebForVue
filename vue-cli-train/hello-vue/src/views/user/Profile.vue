<template>
  <!--所有的元素必须在根节点-->
  <div>
    <h1>个人信息</h1>
    {{ id }} <!-- 方式二 -->
    <!-- {{ $route.params.id }} // 方式一 -->
  </div>
</template>

<script>
export default {
  props: ['id'],  // 方式二
  name: "UserProfile",
  beforeRouteEnter: (to, from, next) => {
    console.log("进入路由之前");
    next(vm => {
      vm.getData(); // 进入路由前执行 getData 方法
    });
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("进入路由之后");
    next();
  },
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/static/mock/data.json'
      }).then(function (response) {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>
