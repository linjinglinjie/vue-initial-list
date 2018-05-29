<template>
<div>
  <ul id="vue-initial-list">
      <div class="wrapper" v-if="item.values" v-for="(item,i) in sortedData" :key="i">
        <p class="title" >{{item.name}}</p>
        <ul class="content">
          <li v-for="(jtem,j) in item.values" :key="j">{{jtem}}</li>
        </ul>
      </div>
  </ul>
  <div class="shortcut">
    <p class="item" v-for="(letter,k) in letters" :key="k">
{{letter}}
    </p>
      
  </div>
</div>
</template>

<script>
var pinyin = require("pinyin");
import BScroll from "better-scroll";
export default {
  name: "vue-initail-list",
  props: {
    options: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      sortedData: [],
      letters: []
    };
  },
  created() {
    const pinyinData = this.options.map(item => ({
      name: item.name,
      initials: pinyin(item.name, { style: pinyin.STYLE_FIRST_LETTER })[0][0]
    }));
    this.letters = "abcdefghjklmnopqrstwxyz".split("");
    for (let letter of this.letters) {
      this.sortedData.push({ name: letter });
    }
    this.sortedData = this.sortedData.filter(item => {
      item.values = [];
      pinyinData.map(jtem => {
        if (item.name == jtem.initials) {
          item.values.push(jtem.name);
        }
      });
      return item.values.length > 0;
    });
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper);
  }
};
</script>
<style lang="scss">
#vue-initial-list {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  .wrapper {
    text-align: left;
    font-size: 16px;
    .title {
      height: 1rem;
      line-height: 1rem;
      background-color: #f5f5f5;
      color: #878787;
      padding-left: 0.5rem;
    }
    .content {
      li {
        height: 1.3rem;
        line-height: 1.3rem;
        border-bottom: 1px solid #e5e5e5;
        width: 90%;
        margin: 0 auto;
      }
    }
  }
}
.shortcut {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 50%;
  margin-top: -7.0667rem;
  .item {
    text-align: center;
    font-size: 14px;
    color: #fa8919;
    height: 0.5rem;
    width: 1rem;
    margin: 0.1rem 0;
  }
}
</style>

