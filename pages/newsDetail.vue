<template>
    <v-container>
        <v-layout wrap row >
            <v-flex lg3 xs12 class="px-2">
                <span class="font-weight-black headline black--text">Гадаад мэдээ</span>
                <div
                    class="scroll-y"
                    id="scroll-target"
                    style="max-height: 400px">
                    <v-layout
                        v-scroll:#scroll-target="onScroll"
                        columnX
                        style="height: 1000px">
                        <v-list dense class="width_nf">
                            <v-list-tile
                                v-for="item in items"
                                :key="item.title"
                                class="submenu_list"
                                width= "100%">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>   
                    </v-layout>
                </div>
            </v-flex>
            <v-flex lg9 xs12 class="px-2">
                <v-card>
                    <v-card-title class="font-weight-bold mx-auto">Цөмийн боловсролын сүлжээ</v-card-title>
                    <v-img
                    class="mx-5"
                    height="300px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    </v-img>
                    <div class="text--primary pa-3 mt-3">
                        <span>Цөмийн боловсролын сүлжээ нь боловсролын нөөцийг өгөөжтэй ашиглах, бүс нутаг болон бүс нутаг хоорондын хамтын ажиллагааны хүрээнд үнэ цэнэтэй мэдлэг, шилдэг туршлага түүнчлэн, боловсролын материал, багаж хэрэгслийг харилцан хуваалцах боломжийг бүрдүүлдэг. ОУАЭА нь дэлхий даяар цөмийн боловсрол, сургалтын байгууллагуудын түншлэлийг дэмжин ажилладаг. Энэхүү үйл ажиллагааны хүрээнд Ази, Африк, Латин Америк, Карибын тэнгис, Зүүн Европ, Төв Азийн бүс нутгийн боловсролын сүлжээг шууд хөгжүүлсэн ба боловсролын сүлжээнүүдийн хоорондын солилцоо, хэлэлцүүлгийг цаашид дэмжих зорилгоор ОУАЭА тусгайлан форумуудыг байгуулсан.</span>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Цөмийн мэдлэгийн менежментийн асуудлаар Олон улсын шинжээчдийн баг ажиллаа'},
          { title: 'Зүүн өмнөд азийн бүсийн семинар монгол улсад зохион байгуулагдлаа'}, 
          { title: 'Хяналт шалгалт ба хариуцлага хүлээлгэх тогтолцоо сэдэвт азийн бүсийн семинар зохион байгуулагдаж байна '},
          { title: 'Хяналт шалгалт ба хариуцлага хүлээлгэх тогтолцоо сэдэвт азийн бүсийн семинар зохион байгуулагдаж байна '},
          { title: 'Хамтын ажиллагаа'},
          { title: 'Төсөл хөтөлбөр'},
        ],
      }
    },
  }
</script>