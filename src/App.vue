<template>
  <div id="app">
    <vue-initail-list :options="options"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      options: [
        {
          name: "北京市",
          tags: "BEIJING,北京市",
          cityid: 1
        },
        {
          name: "上海市",
          tags: "SHANGHAI,上海市",
          cityid: 4
        },
        {
          name: "深圳市",
          tags: "SHENZHEN,深圳市",
          cityid: 2
        },
        {
          name: "广州市",
          tags: "GUANGZHOU,广州市",
          cityid: 3
        },
        {
          name: "武汉市",
          tags: "WUHAN,武汉市",
          cityid: 6
        }
      ]
    };
    }
  }
</script>

<style>

</style>
