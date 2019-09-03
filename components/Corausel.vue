<template>
    <v-carousel 
        hide-delimiters
        max-height="400px"
        height="400px"
        light:false
        class="mb-4 no-box-shadow">
        <v-carousel-item
            v-for="(item, i) in corausel" 
            :key="i"
            v-bind:src = "convertImageUrl(item.image_name)">
        </v-carousel-item>
    </v-carousel>
</template>
<script>
    import Vue from "vue";
    import VueResource from "vue-resource";
    Vue.use(VueResource);
   
    export default {
        data () {
            return {
                corausel: []
            }
        },
        mounted: function(){
            this.loadData();
        },
        methods: {
            convertImageUrl: function(url){
                return "http://192.168.0.116/news/" + url;
            },
            loadData: function(){
                console.log('api',process.env.API);
                
                Vue.http.get(`http://192.168.0.116:5000/r/home`).then(this.successCallback, this.errorCallback);
            },
            successCallback: function(result){
                console.log("success carousel", result.body);
                this.corausel = result.body.data.knowledgePost;
            },
            errorCallback: function(result){
                console.log("error", result);
            }
        }
    }
</script>