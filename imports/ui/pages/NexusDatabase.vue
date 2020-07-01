<template>
    <div>
        <v-container fluid>
            <v-toolbar flat>
                <v-text-field
                    prepend-icon="mdi-magnify"
                    label="Search"
                    v-model="search"

                    hide-details
                    single-line
                ></v-text-field>
                <v-spacer />
                <v-btn color="secondary"><v-icon>mdi-plus</v-icon></v-btn>
            </v-toolbar>
            <v-row class="px-4 py-2">
                <v-btn-toggle v-model="openCloseModel">
                    <v-btn><v-icon>mdi-unfold-more-horizontal</v-icon></v-btn>
                    <v-btn><v-icon>mdi-unfold-less-horizontal</v-icon></v-btn>
                </v-btn-toggle>
            </v-row>
            <v-row class="px-4">
                <v-card outlined class="pa-2" width="100%">
                    <v-treeview
                        :items="database"
                        item-key="_id"
                        item-text="name"
                        item-children="children"

                        hoverable
                        expand-icon="mdi-chevron-down"

                        :search="search"
                        :open="open"
                    ></v-treeview>
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'NexusDatabase',
    data() { return {
        search: null,
        openCloseModel: undefined,
        open: [],
        database: [
            { _id: 1, name: 'Item 1', children: [
                { _id: 11, name: 'Item 1A'},
                { _id: 12, name: 'Item 1B'},
                { _id: 13, name: 'Item 1C'}
            ]},
            { _id: 2, name: 'Item 2', children: [
                { _id: 21, name: 'Item 2A'},
                { _id: 22, name: 'Item 2B'},
                { _id: 23, name: 'Item 2C'}
            ]},
            { _id: 3, name: 'Item 3', children: [
                { _id: 31, name: 'Item 3A'},
                { _id: 32, name: 'Item 3B'},
                { _id: 33, name: 'Item 3C'}
            ]},
            { _id: 4, name: 'Item 4', children: [
                { _id: 41, name: 'Item 4A'},
                { _id: 42, name: 'Item 4B'},
                { _id: 43, name: 'Item 4C'}
            ]}
        ]
    }},
    methods: {
        addItem() {
            const id = 5;
            database.push({ _id: id, name: `Item ${id}` });
        }
    }
}
</script>