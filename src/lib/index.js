import VueInitailListComponent from './vue-initail-list.vue';

const VueInitailList = {
    install(Vue, options) {
        Vue.component(VueInitailListComponent.name, VueInitailListComponent);
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueInitailList);
}
export default VueInitailList;
