import { Meteor } from 'meteor/meteor';
import Vue from 'vue';

import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);

import router from './router.js';

import vuetify from './vuetify.js';

import App from '../../ui/App.vue';
 
Meteor.startup(() => {
  new Vue({
    router,
    vuetify,
    el: '#app',
    ...App,
  });
});