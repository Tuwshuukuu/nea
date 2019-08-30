 <template>
 <div style="background-color: #0055b7!important;">
    <v-container class="pa-0" style="background-color: #0055b7!important;">
        <v-toolbar
            style="background-color: #0055b7!important;"
            height="40"
            flat
        >
            <!-- Menu -->
            <v-toolbar-items open-on-hover top offset-y class="hidden-sm-and-down">
              <v-menu open-on-hover bottom offset-y v-for="(item, i) in menu" :key="i">
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="robotoCondensed font-weight-bold subtitle-2 white--text"
                    flat
                    v-on="on"
                  >{{ item.title }}</v-btn>
                </template>

                <v-list>
                  <v-list-tile
                    v-for="(sub, index) in item.asas"
                    :key="index"
                    class="submenu_height submenu_list">
                    <v-list-tile-title class="submenu_size submenu_height"
                    ><router-link class="submenu" :to="{name:sub.linkName, params:{ id: sub.submenuId}}"> {{ sub.subtitle }}</router-link></v-list-tile-title>
                  </v-list-tile>
                </v-list>
                <!-- <component v-bind:is="item.componentName"></component> -->
              </v-menu>                                                
                
            </v-toolbar-items>
            <v-menu class="hidden-md-and-up">
                <v-toolbar-side-icon slot="activator" class="white--text"></v-toolbar-side-icon>
                <v-list>
                  <v-list-tile v-for="item in menu" :key="item.icon">
                      <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      </v-list-tile-content>
                  </v-list-tile>   
                </v-list>
            </v-menu>
        </v-toolbar>
    </v-container>
</div>
</template>
<script>
export default {
      data () {
    return {
      menu: [
        {title: 'Зорилт',
          asas: [{ subtitle: 'Цөмийн технологийг нэвтрүүлэх, судалгааг хөгжүүлэх', submenuId: '13', linkName: 'HTML'},
                { subtitle: 'Цацраг идэвхт ашигт малтмалыг эдийн засгийн эргэлтэнд оруулах', submenuId: '12', linkName: 'HTML'},
                { subtitle: 'Цөмийн болон цацрагийн аюулгүй байдал', submenuId: '14', linkName: 'HTML'},
                { subtitle: 'Олон улсад өрсөлдөх чадвартай салбарыг хөгжүүлэх', submenuId: '15', linkName: 'HTML'}]},
        {title: 'Бидний тухай',
          asas: [{ subtitle: 'Даргын мэндчилгээ', submenuId: '31', linkName: 'HTML'},
                { subtitle: 'Эрхэм зорилго', submenuId: '31', linkName: 'HTML'},
                { subtitle: 'Байгууллагын бүтэц', submenuId: '32', linkName: 'HTML'},
                { subtitle: 'Байгууллагын түүх', submenuId: '32', linkName: 'HTML'},
                { subtitle: 'Хамтын ажиллагаа', submenuId: '31', linkName: 'HTML'},
                { subtitle: 'Төсөл хөтөлбөр', submenuId: '14', linkName: 'HTML'}]},
        {title: 'Үйлчилгээ',
          asas: [{ subtitle: 'Сургалт', submenuId: '24', linkName: 'ListContent'},
                { subtitle: 'Танин мэдэхүйн булан', submenuId: '46', linkName: 'ListContent'},
                { subtitle: 'Асуулт хариулт', submenuId: '29', linkName: 'HTML'}]},
        {title: 'Хууль, эрх зүй',
          asas: [{ subtitle: 'Салбарын хууль', submenuId: '25', linkName: 'FileList'},
                { subtitle: 'Тогтоол, шийдвэр', submenuId: '27', linkName: 'FileList'},
                { subtitle: 'Олон улсын гэрээ конвенци', submenuId: '40', linkName: 'FileList'},
                { subtitle: 'Дүрэм журам', submenuId: '36', linkName: 'FileList'},
                { subtitle: 'Үндэсний стандартууд', submenuId: '44', linkName: 'FileList'},
                { subtitle: 'Зөвлөмж', submenuId: '49', linkName: 'FileList'}]},
        {title: 'Мэдээ мэдээлэл',
          asas: [{ subtitle: 'Мэдээ', submenuId: '37', linkName: 'ListContent'},
                { subtitle: 'Гадаад мэдээ', submenuId: '1', linkName: 'ListContent'},
                { subtitle: 'Фото мэдээ', submenuId: '10', linkName: 'ListContent'},
                { subtitle: 'Видео мэдээ', submenuId: '11', linkName: 'ListContent'},
                { subtitle: 'Хэвлэлийн тойм', submenuId: '6', linkName: 'ListContent'},
                { subtitle: 'Ярилцлага', submenuId: '34', linkName: 'ListContent'},
                { subtitle: 'Нийтлэл', submenuId: '35', linkName: 'ListContent'},
                { subtitle: 'Зарлал', submenuId: '', linkName: 'ListContent'},]},
        {title: 'Ил тод байдал',
          asas: [{ subtitle: 'Хүний нөөцийн ил тод байдал', submenuId: '19', linkName: 'ListContent'},
                { subtitle: 'Үйл ажиллагааны ил тод байдал', submenuId: '19', linkName: 'ListContent'},
                { subtitle: 'Авлигын эсрэг', submenuId: '22', linkName: 'ListContent'},
                { subtitle: 'Өргөдөл гомдол', submenuId: '9', linkName: 'ListContent'},]},
        {title: 'Шилэн данс'},
      ]
    }
  },
  
  methods: {
    goTodetail(linkName, menuId) {
      // console.log(name + "+" + menuId);
      this.$router.push({name:linkName, params:{id:menuId}})
    },
    menuItems () {
      return this.menu
    }
  }
}
</script>