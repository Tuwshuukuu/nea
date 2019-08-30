<template>
    <v-container>
        <v-layout wrap row >
            <v-flex lg3 xs12 class="px-2">
                <v-card class="pa-3">
                    <span class="font-weight-black headline black--text pl-3">Бидний тухай</span>
                    <v-list dense>
                        <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            :class="contentId == item.id ? 'submenu_list_active' : 'submenu_list'">
                            <v-list-tile-content>
                                <v-list-tile-title v-on:click="changeItems(item.id)">{{ item.name }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex lg9 xs12>
                <v-card class="pa-3">
                    <span class="font-weight-bold mx-auto">Цөмийн боловсролын сүлжээ</span>
                    <v-layout v-for="i in 6" :key="i" class="border_bottom pa-3">
                        <v-flex xs11>Цөмийн материалын биечлэн хамгаалалтын тухай конвенц /En/</v-flex>
                        <v-flex xs1>Татах</v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>

import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

  export default {
    data () {
      return {
        contentId: 0,
        items: [],
        pageTitle: "",
        newsList: [],
      }
    },
    created() {
        this.contentId = this.$route.params.id
        console.log(this.$route.params.id);
    },
    mounted(){
        console.log("mounted");
        this.loadSideMenu();
        this.loadMainContent(this.contentId);
    },  
    methods: {
        changeItems: function(index){
            this.contentId = index;
            console.log("changed", index);
            console.log("changed", this.contentId);
            this.loadMainContent(index);
        },
        loadSideMenu: function(){
            Vue.http.get('http://192.168.0.116:5000/r/subCategory/' + this.contentId).then(this.successCallbackMenu, error => {console.log});
        },
        successCallbackMenu: function(result){
            console.log("success", result.body.data);
            this.items = result.body.data;
        },
        loadMainContent: function(newsId){
            Vue.http.get('http://192.168.0.116:5000/r/subCategoryPosts/' + newsId).then(this.successCallback, error => {console.log});
        },
        successCallback: function(result){
            console.log("success", result.body.data);
            this.newsList = result.body.data;
        },
    }

  }
</script>