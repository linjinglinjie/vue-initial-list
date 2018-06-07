import VueInitialListComponent from './vue-initial-list.vue';

const VueInitialList = {
    install(Vue, options) {
        Vue.component(VueInitialListComponent.name, VueInitialListComponent);
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueInitialList);
}
export default VueInitialList;

