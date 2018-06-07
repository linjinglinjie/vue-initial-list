<template>
  <div id="vue-initial-list" ref="bscroll">
    <div>
      <div class="wrapper" v-for="(item,i) in sortedData" :key="i" :id="item.initials">
          <p class="initial-list">{{item.initials}}</p>
          <ul class="content">
            <li v-for="(jtem,j) in item.detail" :key="j" @click.stop="listItemClick(jtem)">{{jtem.name}}</li>
          </ul>
      </div>
    </div>
    <div class="right-nav">
      <p class="item" v-for="(letter,k) in letters" :key="k">{{letter}}</p>
    </div>
    <div class="toast" v-show="isToast">{{toatText}}</div>
  </div>
</template>

<script>
var pinyin = require("pinyin");
import BScroll from "better-scroll";
import "amfe-flexible/index.js";
export default {
  name: "vue-initial-list",
  props: {
    options: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      aBScroll: null,
      sortedData: [],
      letters: [],
      isToast: false,
      toatText: ""
    };
  },
  created() {
    // 传入的汉字属性名必须为name
    const pinyinData = this.options.map(item => ({
      detail: item,
      initials: pinyin(item.name, {
        style: pinyin.STYLE_FIRST_LETTER
      })[0][0].toUpperCase()
    }));
    // todo 生成26个字母的数组对象
    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    for (let letter of this.letters) {
      this.sortedData.push({ initials: letter });
    }
    // todo 过滤掉没有信息的字母对象
    this.sortedData = this.sortedData.filter(item => {
      item.detail = [];
      pinyinData.map(jtem => {
        if (item.initials === jtem.initials) {
          item.detail.push(jtem.detail);
        }
      });
      return item.detail.length > 0;
    });
  },
  mounted() {
    var self = this;
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll;
      this.aBScroll = new BScroll(bscrollDom, { click: true, bounce: false });
    });
    const letters = document.querySelector(".right-nav").children;
    const initials = document.querySelectorAll(".initial-list");
    for (let i = 0; i < letters.length; i++) {
      letters[i].index = i;
      // 点击字母表跳转
      letters[i].onclick = function() {
        // if (this.index === 26) {
        //   //回底部
        //   document.querySelector("html").scrollIntoView(false);
        // }
        let letter = this.innerHTML; //点击左侧的字母
        self.isToast = true;
        self.toatText = letter;
        clearTimeout("t");
        const t = setTimeout(() => {
          self.isToast = false;
        }, 1000);
        self.aBScroll.scrollToElement(`#${letter}`);
      };
    }
    // 触摸字母表跳转
    document.querySelector(".right-nav").addEventListener("touchmove", e => {
      //根据elementFromPoint实时获取触摸dom
      e = e || window.event;
      var touch = e.changedTouches[0];
      var ele = document.elementFromPoint(touch.pageX, touch.pageY);
      let letter = ele.innerText;
      self.aBScroll.scrollToElement(`#${letter}`);
    });
  },
  methods: {
    listItemClick(jtem) {
      this.$emit("change", jtem);
    }
  },
  beforeDestroy() {
    this.$off("change");
    this.aBScroll.destroy();
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
    .initial-list {
      height: 1rem;
      line-height: 1rem;
      background-color: #f5f5f5;
      color: #878787;
      padding-left: 0.5rem;
    }
    .content {
      li {
        list-style: none;
        height: 1.3rem;
        line-height: 1.3rem;
        border-bottom: 1px solid #e5e5e5;
        width: 90%;
        margin: 0 auto;
      }
    }
  }
  .right-nav {
    position: fixed;
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
    }
  }
  .toast {
    width: 4rem;
    height: 3rem;
    line-height: 3rem;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -1.5rem;
    margin-left: -2rem;
    text-align: center;
    color: #fff;
    background-color: rgba($color: #000000, $alpha: 0.7);
    z-index: 99999;
    border-radius: 5px;
  }
}
</style>