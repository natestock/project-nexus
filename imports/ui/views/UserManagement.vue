<template>
    <v-container fluid>
        <v-card flat class="px-4">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    prepend-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer />
                <v-btn color="secondary"><v-icon>mdi-plus</v-icon></v-btn>
            </v-card-title>
            <v-data-table
                :disable-pagination="true"
                :hide-default-footer="true"
                :headers="headers"
                :items="users"
                item-key="_id"
                :search="search"
            ></v-data-table>
        </v-card>
    </v-container>
</template>
<script>
import { Meteor } from 'meteor/meteor';
export default {
    name: 'UserManagement',
    data() { return {
        headers: [
            { text: 'User', align: 'start', sortable: true, value: 'username' }
        ],
        search: null
    }},
    meteor: {
        users() {
            return Meteor.users.find({}).fetch();
        }
    }
}
</script>