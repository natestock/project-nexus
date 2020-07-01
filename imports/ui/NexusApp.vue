<template>
    <div>
        <v-navigation-drawer v-model="drawer" app>
            <v-card-title>
                <v-img src="assets/logo-color-cropped.jpg" />
            </v-card-title>
            <v-list>
                <v-list-item v-for="view in views" :key="view.name" :to="view.path" link color="primary">
                    <v-list-item-action>
                        <v-icon>{{ view.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ view.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <div class="pa-4">
                    <v-btn block dark @click="logout">Logout</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{ currentPage }}</v-toolbar-title>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
    </div>
</template>
<script>
import { Meteor } from 'meteor/meteor';
export default {
    name: 'Project',
    data() { return {
        drawer: null
    }},
    computed: {
        views: function () {
            return this.$router.options.routes.find(route => route.path === '/').children.filter(route => route.name) || [];
        },
        currentPage: function () {
            return this.$route.name;
        }
    },
    methods: {
        logout() {
            Meteor.logout(Error => {
                if (Error) {
                    console.error(Error);
                } else {
                    this.$router.push('/login');
                }
            })
        }
    }
}
</script>