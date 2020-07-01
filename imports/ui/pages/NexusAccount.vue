<template>
    <v-container fluid>
        <v-row class="px-4">
            <v-col>
                <v-card>
                    <v-card-title>My Account</v-card-title>
                    <v-form class="px-4">
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        type="text"
                                        label="First Name"
                                        ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        type="text"
                                        label="Last Name"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        type="email"
                                        label="Email"
                                        ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        type="phone"
                                        label="Phone Number"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title>Settings</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'Account'
}
</script>