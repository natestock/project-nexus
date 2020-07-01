import { Meteor } from 'meteor/meteor';

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import NexusLogin from '../../ui/NexusLogin.vue';
import NexusApp from '../../ui/NexusApp.vue';

import NexusDatabase from '../../ui/pages/NexusDatabase.vue';
import NexusAccount from '../../ui/pages/NexusAccount.vue';
import NexusUserManagement from '../../ui/pages/NexusUserManagement.vue';

const routes = [
    { path: '/', component: NexusApp, children: [
        { path: '', redirect: 'database'},
        { path: 'database', name: 'Database', icon: 'mdi-database', component: NexusDatabase },
        { path: 'account & settings', name: 'Account & Settings', icon: 'mdi-account', component: NexusAccount },
        { path: 'user management', name: 'User Management', icon: 'mdi-account-cog', component: NexusUserManagement }
    ]},
    { path: '/login', name: 'Login', component: NexusLogin }
]

const router = new VueRouter({
    routes, 
    mode: 'history'
});

const isAuth = () => {
    const user = Meteor.userId();
    if (user) { return true; }
    return true;    // skip authentication REMOVE
    return false;
}

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuth()) {
        next({ name: 'Login' });
    } else if(to.name === 'Login' && isAuth()) {
        next({ path: '' });
    } else {
        next();
    }
})

export default router;