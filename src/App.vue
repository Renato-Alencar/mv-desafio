<template>
  <div id="app">
    <nav id="sidenav">
      <FakeRoute class="sidenav__logo" :fakeCard="options[2]" />
      <a href="#" class="sidenav__toogle-btn" @click="toggle = !toggle">
        <img
          src="./assets/Icons/menu.svg"
          alt="icone preto opaco de menu hambúrguer"
        />
      </a>
      <hr />
      <ul class="sidenav__ul" v-if="toggle">
        <li class="sidenav__ul__li" v-for="option in options" :key="option.id">
          <router-link :to="option.route" v-if="option.id < 2">
            <img :src="option.url" :alt="option.alt" />
            <h2>{{ option.name }}</h2>
          </router-link>
        </li>
        <li class="sidenav__ul__li" id="fake">
          <FakeRoute :fakeCard="options[3]" />
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FakeRoute from "@/components/FakeRoute.vue";
@Component({
  components: {
    FakeRoute,
  },
})
export default class App extends Vue {
  options = [
    {
      id: 0,
      route: "/",
      url: require("@/assets/Icons/cog.svg"),
      alt: "ícone preto opaco de engrenagem",
      name: "Catálogo",
    },
    {
      id: 1,
      route: "/registration",
      url: require("@/assets/Icons/table.svg"),
      alt: "ícone preto opaco de tabela",
      name: "Cadastro",
    },
    {
      id: 2,
      url: require("@/assets/Icons/user.svg"),
      alt: "ícone preto opaco de busto de uma pessoa",
      name: "Renato Alencar",
    },
    {
      id: 3,
      url: require("@/assets/Icons/logout.svg"),
      alt: "ícone preto opaco de porta aberta",
      name: "Sair",
    },
  ];

  private toggle = "true";
}
</script>

<style lang="stylus" scoped>
import 'reset-css'

#app
    color #2c3e50

#sidenav
    width 15vw
    height 100vh
    top 0
    left 0
    position fixed
    background-color #c16358
    border 1px solid #8b1a0d
    padding 4vh 1.5vw
    text-align center
    font-family Avenir, Helvetica, Arial, sans-serif
    overflow: hidden
    z-index 1
    @media screen and (max-width: 767px)
        height 3vh
        width 100vw
        max-width 127vw
        display flex
        justify-content space-around
        align-items center
        overflow visible


.sidenav__logo
    display block
    padding 0 2vw
    margin-left 0
    font-weight bold
    font-size clamp(1.5rem, 1vw, 1.25rem)
    @media screen and (max-width: 767px)
        display flex
        font-size 1.25rem
        margin-right 30vw

hr
    border 1px solid #a02214
    margin 7vh 0
    @media screen and (max-width: 767px)
        display none


.sidenav__toogle-btn
    display none
    @media screen and (max-width: 767px)
        display block
        padding 0 1vw
        border-radius 2vw
        box-shadow: 0px 0px 6px 0px black;
        animation: open-sidenav .5s forwards

.sidenav__ul
    width 100%
    height 50%
    display flex
    padding-top 6vh
    flex-direction column
    justify-content space-around
    align-items center
    background-color: #c16358
    @media screen and (max-width: 767px)
        width: 50vw;
        height: 85vh;
        position: absolute
        right: 0;
        top: 10vh
        animation: close-sidenav .5s forwards

.sidenav__ul__li
    width 100%
    display flex
    padding 1vh 0
    font-size clamp(1.15rem, 1vw, 1rem)

#fake
    padding-top  40vh
    @media screen and (max-width: 767px)
        padding-top 0
        padding-left 5vw

.sidenav__ul__li:hover
    cursor pointer

.sidenav__ul__li a
    width: 100%
    padding 1vh 0
    display inline-flex
    align-items center
    color black
    font-weight 500
    text-decoration none
    @media screen and (max-width: 767px)
        margin-left 5vw

.sidenav__ul__li a img
    padding 0 1vw

.router-link-exact-active.router-link-active
    background-color #a02214

// ANIMATION
@keyframes close-sidenav
  from
    right -50%
  to
    right 0%

@keyframes open-sidenav
  from
    right 0%
  to
    right -50%
</style>
