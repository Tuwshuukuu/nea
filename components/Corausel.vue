<template>
  <v-carousel
    hide-delimiters
    max-height="400px"
    height="400px"
    light:false
    class="mb-4 no-box-shadow"
  >
    <v-carousel-item
      v-for="(item, i) in corausel"
      :key="i"
      v-bind:src="convertImageUrl(item.image_name)"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";
import { environment } from '../config/environment';
Vue.use(VueResource);

export default {
  data() {
    return {
      corausel: [],
      test: []
    };
  },
  mounted: function() {
    this.loadData();
  },
  methods: {
    convertImageUrl: function(url) {
      return `${environment.API_HOST}/uploads/${url}`;
    },
    loadData: function() {
      Vue.http
        .get(`${environment.API_HOST}:5000/r/home`)
        .then(this.successCallback, this.errorCallback);
    },
    successCallback: function(result) {
      this.corausel = result.body.data.knowledgePost;
    },
    errorCallback: function(result) {
      console.log("error", result);
    }
  }
};
</script>