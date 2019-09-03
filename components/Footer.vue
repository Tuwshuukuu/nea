<template>
    <div class="color">
        <v-container>  
            <v-layout wrap row>
                <v-flex xs12 lg3>
                    <div v-for="(item, i) in menu1" :key="i" class="background_none white--text">
                        <div class="title mx-3 mt-5">{{ item.title }}</div><br />
                        <div class="pb-1" v-for="(index, i) in item.asas" :key="i">
                            <router-link class="footermenu" :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}">
                                {{ index.subtitle }}
                            </router-link><br />
                        </div>
                    </div>
                    <div v-for="(item, i) in menu" :key="i" class="background_none white--text pr-4">
                        <div class="title mx-3 mt-5">{{ item.title }}</div><br />
                        <div class="pb-1" v-for="(index, i) in item.asas" :key="i">
                            <router-link class="footermenu" :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}">{{ index.subtitle }}</router-link><br />
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12 lg3>
                    <div v-for="(item, i) in menu2" :key="i" class="background_none white--text">
                        <div class="title mx-3 mt-5">{{ item.title }}</div><br />
                        <div class="pb-1" v-for="(index, i) in item.asas" :key="i">
                            <router-link class="footermenu" :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}">{{ index.subtitle }}</router-link><br />
                        </div>
                    </div>
                    <div v-for="(item, i) in menu3" :key="i" class="background_none white--text">
                        <div class="title mx-3 mt-5">{{ item.title }}</div><br />
                        <div class="pb-1" v-for="(index, i) in item.asas" :key="i">
                            <router-link class="footermenu" :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}">{{ index.subtitle }}</router-link><br />
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12 lg3>
                    <div v-for="(item, i) in menu4" :key="i" class="background_none white--text">
                        <div class="title mx-3 mt-5">{{ item.title }}</div><br />
                        <div class="pb-1" v-for="(index, i) in item.asas" :key="i">
                            <router-link class="footermenu" :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}">{{ index.subtitle }}</router-link><br />
                        </div>
                    </div>
                    <div v-for="(item, i) in menu5" :key="i" class="background_none white--text">
                        <div class="title mx-3 mt-5">{{ item.title }}</div><br />
                        <div class="pb-1" v-for="(index, i) in item.asas" :key="i">
                            <router-link class="footermenu" :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}">{{ index.subtitle }}</router-link><br />
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12 lg3></v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
// import Vue from 'vue';
// import Vuetify from 'vuetify';

// Vue.use(Vuetify);
export default {
    data () {
    return {
      menu: [
        {title: 'Зорилт',
          asas: [{ subtitle: 'Цөмийн технологийг нэвтрүүлэх, судалгааг хөгжүүлэх',  mainCatId:7, submenuId: '13', linkName: 'HTML'},
                { subtitle: 'Цацраг идэвхт ашигт малтмалыг эдийн засгийн эргэлтэнд оруулах',  mainCatId:7, submenuId: '12', linkName: 'HTML'},
                { subtitle: 'Цөмийн болон цацрагийн аюулгүй байдал',  mainCatId:7, submenuId: '14', linkName: 'HTML'},
                { subtitle: 'Олон улсад өрсөлдөх чадвартай салбарыг хөгжүүлэх',  mainCatId:7, submenuId: '15', linkName: 'HTML'}]
        }
      ],
      menu1: [
          {title: 'Бидний тухай',
          asas: [{ subtitle: 'Даргын мэндчилгээ', mainCatId: 13, submenuId: '31', linkName: 'HTML'},
                { subtitle: 'Эрхэм зорилго', mainCatId: 13, submenuId: '31', linkName: 'HTML'},
                // { subtitle: 'Байгууллагын бүтэц', mainCatId: 13, submenuId: '32', linkName: 'HTML'},
                { subtitle: 'Байгууллагын түүх', mainCatId: 13, submenuId: '32', linkName: 'HTML'},
                { subtitle: 'Хамтын ажиллагаа', mainCatId: 13, submenuId: '31', linkName: 'HTML'},
                { subtitle: 'Төсөл хөтөлбөр', mainCatId: 13, submenuId: '14', linkName: 'HTML'}]}
      ],
      menu2: [
        {title: 'Үйлчилгээ',
          asas: [{ subtitle: 'Сургалт', mainCatId: 9, submenuId: '24', linkName: 'ListContent'},
                { subtitle: 'Танин мэдэхүйн булан', mainCatId: 9, submenuId: '46', linkName: 'ListContent'},
                { subtitle: 'Асуулт хариулт', mainCatId: 9, submenuId: '29', linkName: 'HTML'}]}
      ],
      menu3: [
          {title: 'Хууль, эрх зүй',
          asas: [{ subtitle: 'Салбарын хууль', mainCatId: 10, submenuId: '25', linkName: 'FileList'},
                { subtitle: 'Тогтоол, шийдвэр', mainCatId: 10, submenuId: '27', linkName: 'FileList'},
                { subtitle: 'Олон улсын гэрээ конвенци', mainCatId: 10, submenuId: '40', linkName: 'FileList'},
                { subtitle: 'Дүрэм журам', mainCatId: 10, submenuId: '36', linkName: 'FileList'},
                { subtitle: 'Үндэсний стандартууд', mainCatId: 10, submenuId: '44', linkName: 'FileList'},
                { subtitle: 'Зөвлөмж', mainCatId: 10, submenuId: '49', linkName: 'FileList'}]}
      ],
      menu4: [
          {title: 'Мэдээ мэдээлэл',
          asas: [{ subtitle: 'Мэдээ', mainCatId: 6, submenuId: '37', linkName: 'ListContent'},
                { subtitle: 'Гадаад мэдээ', mainCatId: 6, submenuId: '7', linkName: 'ListContent'},
                { subtitle: 'Фото мэдээ', mainCatId: 6, submenuId: '10', linkName: 'ListContent'},
                { subtitle: 'Видео мэдээ', mainCatId: 6, submenuId: '11', linkName: 'ListContent'},
                { subtitle: 'Хэвлэлийн тойм', mainCatId: 6, submenuId: '6', linkName: 'ListContent'},
                { subtitle: 'Ярилцлага', mainCatId: 6, submenuId: '34', linkName: 'ListContent'},
                { subtitle: 'Нийтлэл', mainCatId: 6, submenuId: '35', linkName: 'ListContent'},
                { subtitle: 'Зарлал', mainCatId: 6, submenuId: '8', linkName: 'ListContent'},]}
      ],
      menu5: [
        {title: 'Ил тод байдал',
          asas: [{ subtitle: 'Хүний нөөцийн ил тод байдал', mainCatId: 8, submenuId: '19', linkName: 'ListContent'},
                { subtitle: 'Үйл ажиллагааны ил тод байдал', mainCatId: 8, submenuId: '19', linkName: 'ListContent'},
                { subtitle: 'Авлигын эсрэг', mainCatId: 8, submenuId: '22', linkName: 'ListContent'},
                { subtitle: 'Өргөдөл гомдол', mainCatId: 8, submenuId: '9', linkName: 'ListContent'},]},
      ]
    }
  },
  
  methods: {
    goTodetail(linkName, menuId) {
    //   console.log(name + "+" + menuId);
      this.$router.push({name:linkName, params:{id:menuId}})
    },
    menuItems () {
      return this.menu
    }
  }
}
</script>