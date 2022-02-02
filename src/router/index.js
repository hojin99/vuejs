import Vue from 'vue';
import Router from 'vue-router';
import Bind from '@/components/bind/Bind.vue';
import Event from '@/components/event/Event.vue';
import Lifecycle from '@/components/lifecycle/Lifecycle.vue';
import Watch from '@/components/watch/Watch.vue';
import Style from '@/components/style/Style.vue';
import Flow from '@/components/flow/Flow.vue';
import Slot from '@/components/slot/Slot.vue';
import Dynamic from '@/components/dynamic/Dynamic.vue';
import Aysnc from '@/components/async/Async.vue';
import Transition from '@/components/transition/Transition.vue';
import Mixin from '@/components/mixin/Mixin.vue';
import Directive from '@/components/directive/Directive.vue';
import Plugin from '@/components/plugin/Plugin.vue';
import Filter from '@/components/filter/Filter.vue';
import Vuex from '@/components/vuex/Vuex.vue';
import Etc from '@/components/etc/Etc.vue';
import Comp from '@/components/component/Component.vue';

Vue.use(Router);

export default new Router({
    mode: 'abstract',
    base : __dirname,
    routes: [
        {name:'Bind', path:"/bind", component:Bind},
        {name:'Event', path:"/event", component:Event},
        {name:'Lifecycle', path:"/lifecycle", component:Lifecycle},
        {name:'Watch', path:"/watch", component:Watch},
        {name:'Style', path:"/style", component:Style},
        {name:'Flow', path:"/flow", component:Flow},
        {name:'Slot', path:"/slot", component:Slot},
        {name:'Dynamic', path:"/dynamic", component:Dynamic},
        {name:'Aysnc', path:"/async", component:Aysnc},
        {name:'Transition', path:"/transition", component:Transition},
        {name:'Mixin', path:"/mixin", component:Mixin},
        {name:'Directive', path:"/directive", component:Directive},
        {name:'Plugin', path:"/plugin", component:Plugin},
        {name:'Filter', path:"/filter", component:Filter},
        {name:'Vuex', path:"/vuex", component:Vuex},
        {name:'Etc', path:"/etc", component:Etc},
        {name:'Component', path:"/component", component:Comp},
      ]
})