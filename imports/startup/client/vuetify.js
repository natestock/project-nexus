import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

const opts = {
    theme: {
        dark: true,
        themes: {
            light: {
                primary: '#0073bc',
                secondary: '#28a745',
                error: '#dc3545'
            }
        }
    }
}

export default new Vuetify(opts);