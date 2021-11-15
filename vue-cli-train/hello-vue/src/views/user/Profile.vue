<template>
  <!--所有的元素必须在根节点-->
  <dev>
    <h1>个人信息</h1>
    {{ id }} <!-- 方式二 -->
    <!-- {{ $route.params.id }} // 方式一 -->
  </dev>
</template>

<script>
export default {
  props: ["id"],  // 方式二
  name: "Profile"
}
</script>

<style scoped>

</style>
