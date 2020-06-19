<template>
    <v-container fluid class="fill-height primary lighten-3 align-start">
        <v-row justify="center" style="marginTop: 12vh">
            <v-card>
                <v-card-title>
                <v-img src="assets/logo-color-cropped.jpg" max-width="300px" />
                </v-card-title>
                <v-form class="login-form" ref="login" v-model="valid" :lazy-validation="true" @submit.prevent="submit">
                    <v-text-field
                        id="username"
                        type="text"
                        ref="username"
                        v-model="username"
                        label="Username"
                        required
                        :rules="usernameRules"
                        autofocus
                    ></v-text-field>
                    <v-text-field
                        id="password"
                        type="password"
                        ref="password"
                        v-model="password"
                        label="Password"
                        required
                        :rules="passwordRules"
                    ></v-text-field>
                    <!--<v-checkbox v-model="remember" label="Remember Me" type="checkbox"></v-checkbox>    TODO: remember login-->
                    <br><v-btn block color="primary" :disabled="!valid" type="submit" :loading="loading">Login</v-btn>
                </v-form>
                <v-card-text v-if="invalidLogin" class="text-center error--text">Username/Password not found</v-card-text>
                <v-card-text class="text-center">Forgot <a class="primary--text" @click.prevent="forgot">Username/Password?</a></v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

export default {
    data() { return {
        username: null,
        usernameRules: [
            v => !!v || 'Username is required'
        ],
        password: null,
        passwordRules: [
            v => !!v || 'Password is required'
        ],
        remember: false,
        valid: null,
        invalidLogin: false
    }},
    computed: {
        loading: function() {
           return Meteor.loggingIn();
        }
    },
    methods: {
        submit() {
            Meteor.loginWithPassword(
                this.username,
                this.password
            , (Error) => {
                if (Error) {
                    switch (Error.error) {
                        case 403: this.invalidLogin = true;
                            break;
                        default:
                            console.log(Error);
                            break;
                    }
                    this.reset();
                } else {
                    this.$router.push('/');
                }
            });
        },
        reset() {
            this.$refs.login.reset();
            this.$refs.username.focus();
        },
        forgot() {
            this.$router.push('/forgot');
        }
    }
}
</script>
<style scoped>
    .login-form{
        width: 340px;
        padding: 24px;
    }
</style>