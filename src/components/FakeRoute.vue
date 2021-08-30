<template>
  <div class="fakeRoute">
    <img :src="fakeCard.url" :alt="fakeCard.alt" />
    <a href="#">{{ fakeCard.name }}</a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class fakeRoute extends Vue {
  @Prop() readonly fakeCard!: Record<string, number>;
}
</script>

<style lang="stylus" scoped>
.fakeRoute
    width 10vw
    display inline-flex
    align-items center
    padding 1vh 0
    font-size clamp(1.15rem, 1vw, 1rem)
    color black
    @media screen and (max-width: 767px)
        margin-left 5vw

.fakeRoute img
    padding 0 1vw

.fakeRoute a
    text-decoration none
    color black


.fakeRoute a:hover
    color: #ccc
</style>
