import { Meteor } from 'meteor/meteor';

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from '../../ui/Login.vue';
import Project from '../../ui/Project.vue';

import Home from '../../ui/views/Home.vue';
import Account from '../../ui/views/Account.vue';
import UserManagement from '../../ui/views/UserManagement.vue';

const routes = [
    { path: '/', component: Project, children: [
        { path: '', redirect: 'home'},
        { path: 'home', name: 'Home', icon: 'mdi-home', component: Home },
        { path: 'account & settings', name: 'Account & Settings', icon: 'mdi-account', component: Account },
        { path: 'user management', name: 'User Management', icon: 'mdi-account-cog', component: UserManagement }
    ]},
    { path: '/login', name: 'Login', component: Login }
]

const router = new VueRouter({
    routes, 
    mode: 'history'
});

const isAuth = () => {
    const user = Meteor.userId();
    if (user) { return true; }
    return false;
}

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuth()) {
        next({ name: 'Login' });
    } else if(to.name === 'Login' && isAuth()) {
        next({ name: 'Home' });
    } else {
        next();
    }
})

export default router;