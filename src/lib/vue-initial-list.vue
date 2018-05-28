<template>
  <div id="vue-initial-list">
        <div class="wrapper wrapper-hook">
            <div class="scroller-hook">
                <div class="list list-hook" v-if="item.values.length!=0" v-for="(item,i) in sortedData" :key="i">
                  <p class="title">{{item.name}}</p>
                  <ul>
                    <li v-for="(jtem,j) in item.values" :key="j">{{jtem}}</li>
                  </ul>
                </div>
            </div>
            <div class="shortcut shortcut-hook" v-for="(letter,k) in letters" :key="k">{{letter}}</div>
        </div>
  </div>
</template>

<script>
var pinyin = require("pinyin");

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
      sortedData: [],
      letters:[]
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
    this.sortedData.map(item => {
      pinyinData.map(jtem => {
        if (item.name == jtem.initials) {
          item.values = [];
          item.values.push(jtem.value);
        }
      });
    });
  }
};
</script>

<style lang="scss">
</style>
