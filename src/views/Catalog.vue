<template>
  <main class="catalog">
    <input
      class="catalog__search"
      type="text"
      v-model="inputSearch"
      placeholder="Pesquise pelo vinho ou vinícola"
    />
    <section class="catalog__cards">
      <WineCard v-for="card in cards" :key="card.id" :dataWine="card" />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WineCard from "@/components/WineCard.vue"; // @ is an alias to /src
import searchbar from "@/helpers/searchbar";
import { wines } from "@/store/types";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters({ filterWines: "filterWines" }),
  },
  components: {
    WineCard,
  },
})
export default class catalog extends Vue {
  "filterWines": wines[];

  private inputSearch = "";

  async mounted(): Promise<void> {
    try {
      return await this.$store.dispatch("getWines");
    } catch (error) {
      console.error(error);
    }
  }
  get cards(): wines[] {
    return searchbar(this.filterWines, this.inputSearch);
  }
}
</script>

<style lang="stylus" scoped>
html
    background-color lightgray

.catalog
    width 82vw
    min-height 100vh
    height auto
    margin-left 18vw
    background-color lightgray
    font-family sans-serif
    @media screen and (max-width: 767px)
        width 100vw
        margin 0

.catalog__search
    min-width 250px
    width 5vw
    height 4vh
    border-radius .5vw
    position relative
    left 35%
    margin 5vh 0
    font-family 'Arial'
    font-size 1.1rem
    border none
    outline-color #c16358
    box-shadow: 0px 0px 6px 0px black;
    @media screen and (max-width: 767px)
        width 90%
        margin-top 17vh
        padding 0
        position relative
        left 5vw

.catalog__cards
    display flex
    justify-content space-around
    align-items flex-end
    flex-flow row wrap
</style>
