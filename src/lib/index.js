import vueInitialList from './vue-initial-list.vue';

const initialList = {
    install(Vue, options) {
        Vue.component(vueInitialList.name, vueInitialList);
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(initialList);
}
export default initialList;
