<template>
  <div class="wineCard">
    <div class="wineImage">
      <img :src="dataWine.image" :alt="dataWine.location" />
    </div>
    <table class="wine__data">
      <tr>
        <th
          class="btn__description"
          @click="infoCardClass = 'description'"
          :class="infoCardClass === 'description' ? '' : 'paintBtn'"
        >
          Descrição
        </th>
        <th
          class="btn__ratings"
          @click="infoCardClass = 'ratings'"
          :class="infoCardClass === 'ratings' ? '' : 'paintBtn'"
        >
          Avaliações
        </th>
      </tr>
      <table
        v-if="infoCardClass === 'description'"
        class="wine__data__description"
      >
        <tr>
          <td class="title">Nome do Vinho:</td>
          <td class="info">{{ dataWine.wine }}</td>
        </tr>
        <tr>
          <td class="title">Vinícola de Origem:</td>
          <td class="info">{{ dataWine.winery }}</td>
        </tr>
      </table>
      <table v-else class="wine__data__ratings">
        <tr>
          <td class="title">Nota Geral:</td>
          <td class="info">{{ dataWine.rating.average }}</td>
        </tr>
        <tr>
          <td class="title">Total de Avaliações:</td>
          <td class="info">{{ dataWine.rating.reviews }}</td>
        </tr>
      </table>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class wineCard extends Vue {
  @Prop() readonly dataWine!: Record<string, number>;

  private infoCardClass = "description";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

.wineCard
    width 250px
    font-family sans-serif
    box-shadow 0px 0px 6px 0px black
    border-radius 1vw
    margin-bottom 20px

.wineImage
    width 250px
    height auto
    background-color #c16358
    border-top-left-radius 1vw
    border-top-right-radius 1vw

.wineImage img
    width: 100px
    height 300px
    object-fit cover
    padding 0 82px

.wine__data
    width 250px
    height 18vh
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    background-color #541109
    color whitesmoke
    border-bottom-left-radius 1vw
    border-bottom-right-radius 1vw

.wine__data__description,
.wine__data__ratings,
    display block
    width 250px
    height: 75px;
    font-size .9rem
    margin auto

.wine__data tr,
.btn__description,
.btn__ratings,
    height 5vh

.wine__data tr,
    padding-bottom 10px

.btn__description,
.btn__ratings
    color silver
    font-size 1.1rem
    font-weight bold
    border 1px solid black
    border-collapse collapse
    background-color #8b1a0d

.btn__description,
.btn__ratings,
.title,
.info
    width 30vw
    height: 3vh;
    vertical-align middle
    text-align center

.btn__description:hover,
.btn__ratings:hover
    cursor pointer

.paintBtn
    background-color #a02214
    color whitesmoke
    height 4vh
</style>
