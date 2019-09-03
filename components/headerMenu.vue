 <template>
  <div style="background-color: #0055b7!important;">
    <v-container class="pa-0" style="background-color: #0055b7!important;">
      <v-toolbar style="background-color: #0055b7!important;" height="40" flat>
        <!-- Menu -->
        <v-toolbar-items open-on-hover top offset-y class="hidden-sm-and-down">
          <v-menu open-on-hover bottom offset-y v-for="(item, i) in menu" :key="i">
            <template v-slot:activator="{ on }">
              <v-btn class="robotoCondensed font-weight-bold subtitle-2 white--text" flat v-on="on">
                <!---->
                {{ lang === 'en' ? item.titleEn : item.title }}
              </v-btn>
            </template>

            <v-list style="padding: 0!important">
              <v-list-tile v-for="(sub, index) in item.asas" :key="index" class="submenu_height">
                <router-link
                  class="submenu"
                  :to="{name:sub.linkName, params:{ id: sub.mainCatId, subCat: sub.submenuId}}"
                >
                  <v-list-tile-title class="submenu_size submenu_height">{{ sub.subtitle }}</v-list-tile-title>
                </router-link>
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
import environment from "../config/environment";
export default {
  data() {
    return {
      lang: "",
      menu: [
        {
          title: "Зорилт",
          titleEn: "Mission",
          asas: [
            {
              subtitle: "Цөмийн технологийг нэвтрүүлэх, судалгааг хөгжүүлэх",
              mainCatId: 7,
              submenuId: "13",
              linkName: "HTML"
            },
            {
              subtitle:
                "Цацраг идэвхт ашигт малтмалыг эдийн засгийн эргэлтэнд оруулах",
              mainCatId: 7,
              submenuId: "12",
              linkName: "HTML"
            },
            {
              subtitle: "Цөмийн болон цацрагийн аюулгүй байдал",
              mainCatId: 7,
              submenuId: "14",
              linkName: "HTML"
            },
            {
              subtitle: "Олон улсад өрсөлдөх чадвартай салбарыг хөгжүүлэх",
              mainCatId: 7,
              submenuId: "15",
              linkName: "HTML"
            }
          ]
        },
        {
          title: "Бидний тухай",
          titleEn: "About Us",
          asas: [
            {
              subtitle: "Даргын мэндчилгээ",
              mainCatId: 13,
              submenuId: "50",
              linkName: "AboutUs"
            },
            {
              subtitle: "Эрхэм зорилго",
              mainCatId: 13,
              submenuId: "52",
              linkName: "AboutUs"
            },
            {
              subtitle: "Байгууллагын бүтэц",
              mainCatId: 13,
              submenuId: "39",
              linkName: "AboutUs"
            },
            {
              subtitle: "Байгууллагын түүх",
              mainCatId: 13,
              submenuId: "51",
              linkName: "AboutUs"
            },
            {
              subtitle: "Хамтын ажиллагаа",
              mainCatId: 13,
              submenuId: "53",
              linkName: "AboutUs"
            },
            {
              subtitle: "Төсөл хөтөлбөр",
              mainCatId: 13,
              submenuId: "55",
              linkName: "AboutUs"
            }
          ]
        },
        {
          title: "Үйлчилгээ",
          titleEn: "Services",
          asas: [
            {
              subtitle: "Сургалт",
              mainCatId: 9,
              submenuId: "24",
              linkName: "ListContent"
            },
            {
              subtitle: "Танин мэдэхүйн булан",
              mainCatId: 9,
              submenuId: "46",
              linkName: "ListContent"
            },
            {
              subtitle: "Асуулт хариулт",
              mainCatId: 9,
              submenuId: "29",
              linkName: "ListContent"
            }
          ]
        },
        {
          title: "Хууль, эрх зүй",
          titleEn: "Laws",
          asas: [
            {
              subtitle: "Салбарын хууль",
              mainCatId: 10,
              submenuId: "25",
              linkName: "FileList"
            },
            {
              subtitle: "Тогтоол, шийдвэр",
              mainCatId: 10,
              submenuId: "27",
              linkName: "FileList"
            },
            {
              subtitle: "Олон улсын гэрээ конвенци",
              mainCatId: 10,
              submenuId: "40",
              linkName: "FileList"
            },
            {
              subtitle: "Дүрэм журам",
              mainCatId: 10,
              submenuId: "36",
              linkName: "FileList"
            },
            {
              subtitle: "Үндэсний стандартууд",
              mainCatId: 10,
              submenuId: "44",
              linkName: "FileList"
            },
            {
              subtitle: "Зөвлөмж",
              mainCatId: 10,
              submenuId: "49",
              linkName: "FileList"
            }
          ]
        },
        {
          title: "Мэдээ мэдээлэл",
          titleEn: "News",
          asas: [
            {
              subtitle: "Мэдээ",
              mainCatId: 6,
              submenuId: "37",
              linkName: "ListContent"
            },
            {
              subtitle: "Гадаад мэдээ",
              mainCatId: 6,
              submenuId: "1",
              linkName: "ListContent"
            },
            {
              subtitle: "Фото мэдээ",
              mainCatId: 6,
              submenuId: "10",
              linkName: "ListContent"
            },
            {
              subtitle: "Видео мэдээ",
              mainCatId: 6,
              submenuId: "11",
              linkName: "ListContent"
            },
            {
              subtitle: "Хэвлэлийн тойм",
              mainCatId: 6,
              submenuId: "6",
              linkName: "ListContent"
            },
            {
              subtitle: "Ярилцлага",
              mainCatId: 6,
              submenuId: "34",
              linkName: "ListContent"
            },
            {
              subtitle: "Нийтлэл",
              mainCatId: 6,
              submenuId: "35",
              linkName: "ListContent"
            },
            {
              subtitle: "Зарлал",
              mainCatId: 6,
              submenuId: "35",
              linkName: "ListContent"
            }
          ]
        },
        {
          title: "Ил тод байдал",
          titleEn: "Transparency",
          asas: [
            {
              subtitle: "Хүний нөөцийн ил тод байдал",
              mainCatId: 8,
              submenuId: "19",
              linkName: "ListContent"
            },
            {
              subtitle: "Үйл ажиллагааны ил тод байдал",
              mainCatId: 8,
              submenuId: "19",
              linkName: "ListContent"
            },
            {
              subtitle: "Авлигын эсрэг",
              mainCatId: 8,
              submenuId: "22",
              linkName: "ListContent"
            },
            {
              subtitle: "Өргөдөл гомдол",
              mainCatId: 8,
              submenuId: "9",
              linkName: "ListContent"
            }
          ]
        },
        { title: "Шилэн данс" }
      ]
    };
  },
  mounted: function() {
    this.lang = localStorage.getItem("lang");
  },
  methods: {
    goTodetail(linkName, menuId) {
      this.$router.push({ name: linkName, params: { id: menuId } });
    },
    menuItems() {
      return this.menu;
    }
  },

  beforeUpdate() {
    console.log("lang", this.lang);
  }
};
</script>