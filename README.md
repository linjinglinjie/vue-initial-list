<a href="https://vuejs.org/">
    <img src="https://img.shields.io/badge/vue-%3E=2.0.0-brightgreen.svg" alt="Vue version"/>
</a>


# vue-initial-list

> If you are looking for a high-performance vue component that supports incoming Chinese data automatically and alphabetically, you are in the right place.

* Tiny and very very easy to use.

* List with high performance.

* Sort automatically by initials.

## Live demos

* [vue-initial-list](#).

## Simple usage

```
npm install vue-initial-list or yarn add vue-initial-list
```

```vue
// main.js
import VueInitialList from 'vue-initial-list'
Vue.use(VueInitialList)

// app.js
<template>
    <div>
        <vue-initial-list :options="options" @change="cb"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                options: [
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
            }
        },
    }
</script>
```

## Notice

* The `key` of the passed in `options` for sorting attribute values must be `name`

## Props type

*Prop* | *Type* | *Required* | *Description* |
:--- | :--- | :--- | :--- |
| options | Array | ✓ | Incoming data list, as long as each object's name attribute is a value for sorting. |

## Contributions

Welcome to improve vue-initial-list with any issue, pull request or code review.

## Changelogs

Maintain and update occasionally, for changes see [release](https://github.com/xxj95719/vue-initial-list/releases).