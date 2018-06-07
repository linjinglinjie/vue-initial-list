<template>
  <div id="app">
    <vue-initial-list :options="options" @change="cb"/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      options: [
        {
          name: "鞍山市",
          tags: "ANSHAN,鞍山市",
          cityid: 64
        },
        {
          name: "安庆市",
          tags: "ANQING,安庆市",
          cityid: 149
        },
        {
          name: "安阳市",
          tags: "ANYANG,安阳市",
          cityid: 174
        },
        {
          name: "安康市",
          tags: "ANKANG,安康市",
          cityid: 320
        },
        {
          name: "阿克苏地区",
          tags: "AKESUDIQU,阿克苏地区",
          cityid: 348
        },
        {
          name: "阿勒泰地区",
          tags: "ALETAIDIQU,阿勒泰地区",
          cityid: 355
        },
        {
          name: "阿拉尔市",
          tags: "ALAER,阿拉尔市",
          cityid: 356
        },
        {
          name: "保定市",
          tags: "BAODING,保定市",
          cityid: 62
        },
        {
          name: "包头市",
          tags: "BAOTOU,包头市",
          cityid: 63
        },
        {
          name: "本溪市",
          tags: "BENXI,本溪市",
          cityid: 77
        },
        {
          name: "蚌埠市",
          tags: "BANGBU,蚌埠市",
          cityid: 100
        },
        {
          name: "北海市",
          tags: "BEIHAI,北海市",
          cityid: 161
        },
        {
          name: "重庆市",
          tags: "CHONGQING,重庆市",
          cityid: 18
        },
        {
          name: "长沙市",
          tags: "CHANGSHA,长沙市",
          cityid: 24
        },
        {
          name: "长春市",
          tags: "CHANGCHUN,长春市",
          cityid: 25
        },
        {
          name: "常州市",
          tags: "CHANGZHOU,常州市",
          cityid: 45
        },
        {
          name: "沧州市",
          tags: "CANGZHOU,沧州市",
          cityid: 59
        },
        {
          name: "承德市",
          tags: "CHENGDE,承德市",
          cityid: 72
        },
        {
          name: "大连市",
          tags: "DALIAN,大连市",
          cityid: 14
        },
        {
          name: "东莞市",
          tags: "DONGWAN,东莞市",
          cityid: 21
        },
        {
          name: "大庆市",
          tags: "DAQING,大庆市",
          cityid: 48
        },
        {
          name: "东营市",
          tags: "DONGYING,东营市",
          cityid: 73
        },
        {
          name: "德州市",
          tags: "DEZHOU,德州市",
          cityid: 120
        },
        {
          name: "大同市",
          tags: "DATONG,大同市",
          cityid: 125
        },
        {
          name: "大理州",
          tags: "DALIZHOU,大理州",
          cityid: 136
        },
        {
          name: "丹东市",
          tags: "DANDONG,丹东市",
          cityid: 163
        },
        {
          name: "德阳市",
          tags: "DEYANG,德阳市",
          cityid: 173
        },
        {
          name: "大兴安岭地区",
          tags: "DAXINGANLINGDIQU,大兴安岭地区",
          cityid: 218
        },
        {
          name: "儋州市",
          tags: "DANZHOU,儋州市",
          cityid: 270
        },
        {
          name: "东方市",
          tags: "DONGFANG,东方市",
          cityid: 273
        },
        {
          name: "定安县",
          tags: "DINGANXIAN,定安县",
          cityid: 275
        },
        {
          name: "达州市",
          tags: "DAZHOU,达州市",
          cityid: 285
        },
        {
          name: "德宏州",
          tags: "DEHONGZHOU,德宏州",
          cityid: 309
        },
        {
          name: "迪庆州",
          tags: "DIQINGZHOU,迪庆州",
          cityid: 311
        },
        {
          name: "鄂尔多斯市",
          tags: "EERDUOSI,鄂尔多斯市",
          cityid: 43
        },
        {
          name: "鄂州市",
          tags: "EZHOU,鄂州市",
          cityid: 230
        },
        {
          name: "福州市",
          tags: "FUZHOU,福州市",
          cityid: 34
        },
        {
          name: "佛山市",
          tags: "FOSHAN,佛山市",
          cityid: 36
        },
        {
          name: "抚顺市",
          tags: "FUSHUN,抚顺市",
          cityid: 66
        },
        {
          name: "阜新市",
          tags: "FUXIN,阜新市",
          cityid: 164
        },
        {
          name: "阜阳市",
          tags: "FUYANG,阜阳市",
          cityid: 188
        },
        {
          name: "抚州市",
          tags: "FUZHOU,抚州市",
          cityid: 223
        },
        {
          name: "广州市",
          tags: "GUANGZHOU,广州市",
          cityid: 3
        },
        {
          name: "贵阳市",
          tags: "GUIYANG,贵阳市",
          cityid: 82
        },
        {
          name: "赣州市",
          tags: "GANZHOU,赣州市",
          cityid: 102
        },
        {
          name: "桂林市",
          tags: "GUILIN,桂林市",
          cityid: 135
        },
        {
          name: "贵港市",
          tags: "GUIGANG,贵港市",
          cityid: 262
        },
        {
          name: "广元市",
          tags: "GUANGYUAN,广元市",
          cityid: 280
        },
        {
          name: "广安市",
          tags: "GUANGAN,广安市",
          cityid: 284
        },
        {
          name: "甘孜州",
          tags: "GANZIZHOU,甘孜州",
          cityid: 291
        },
        {
          name: "甘南州",
          tags: "GANNANZHOU,甘南州",
          cityid: 333
        },
        {
          name: "固原市",
          tags: "GUYUAN,固原市",
          cityid: 336
        },
        {
          name: "合肥市",
          tags: "HEFEI,合肥市",
          cityid: 15
        },
        {
          name: "哈尔滨市",
          tags: "HAERBIN,哈尔滨市",
          cityid: 16
        },
        {
          name: "呼和浩特市",
          tags: "HUHEHAOTE,呼和浩特市",
          cityid: 41
        },
        {
          name: "邯郸市",
          tags: "HANDAN,邯郸市",
          cityid: 60
        },
        {
          name: "葫芦岛市",
          tags: "HULUDAO,葫芦岛市",
          cityid: 70
        },
        {
          name: "衡水市",
          tags: "HENGSHUI,衡水市",
          cityid: 80
        },
        {
          name: "海口市",
          tags: "HAIKOU,海口市",
          cityid: 83
        },
        {
          name: "湖州市",
          tags: "HUZHOU,湖州市",
          cityid: 90
        },
        {
          name: "淮安市",
          tags: "HUAIAN,淮安市",
          cityid: 97
        },
        {
          name: "衡阳市",
          tags: "HENGYANG,衡阳市",
          cityid: 105
        },
        {
          name: "汉中市",
          tags: "HANZHONG,汉中市",
          cityid: 115
        }
      ]
    };
  },
  methods: {
    cb(e) {
      console.log(e);
    }
  }
};
</script>

<style>
</style>
