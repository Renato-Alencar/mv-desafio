<template>
  <div class="registration">
    <h2 class="title">{{ textTitle }}</h2>
    <form class="form">
      <div v-for="field in fields" :key="field.id" class="form__container">
        <label class="container__label" :for="field.id">{{
          field.label
        }}</label>
        <input
          class="container__input"
          required
          :id="field.id"
          :type="field.type"
          v-model="field.value"
          :accept="field.accept"
          :placeholder="field.placeholder"
        />
      </div>

      <button
        type="button"
        class="form__btn-clear"
        :disabled="!isDisableClear()"
        @click="clearInput"
      >
        Cancelar
      </button>
      <button
        type="button"
        class="form__btn-save"
        :disabled="!isDisableSave()"
        @click="saveInput"
      >
        Salvar
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "vue-toast-notification/dist/theme-sugar.css";

@Component
export default class registration extends Vue {
  private textTitle = "Cadastro de vinhos";

  private mileTimeRender = 2000;

  fields = [
    {
      id: 0,
      label: "Nome",
      type: "text",
      value: "",
      placeholder: "Nome do Vinho",
    },
    {
      id: 1,
      label: "Vinícola de Origem",
      type: "text",
      value: "",
      placeholder: "Nome da Vinícola",
    },
    {
      id: 2,
      label: "País de Origem",
      type: "text",
      value: "",
      placeholder: "Nome do País",
    },
    {
      id: 3,
      label: "Imagem",
      type: "file",
      value: "",
      accept: ".jpg, .png",
    },
  ];

  isDisableClear(): boolean {
    return this.fields.some((field) => field.value.length > 0);
  }

  isDisableSave(): boolean {
    return this.fields.every((field) => field.value.length > 0);
  }

  clearInput(): void {
    for (let field of this.fields) field.value = "";
    setTimeout(() => {
      this.$router.push({ name: "Catalog" });
    }, this.mileTimeRender);
  }

  saveInput(): void {
    Vue.$toast.success("Profile saved.", {
      message: "Produto cadastrado com sucesso.",
      position: "top-right",
      duration: this.mileTimeRender,
    });
    this.clearInput();
  }
}
</script>

<style lang="stylus" scoped>
.registration
    width 81.75vw
    height 100vh
    position fixed
    font-family sans-serif
    margin-left 18.25vw
    background-color lightgray
    @media screen and (max-width: 767px)
        width 100vw
        margin 0

.title
    margin 5vh 0 0 0
    padding 0 27vw
    font-weight 500
    font-size clamp(1.5rem, 1vw, 1.25rem)
    color #8b1a0d
    @media screen and (max-width: 767px)
        width 100%
        margin-top 17vh
        padding 0
        text-align center

.form
    position fixed
    width 50vw
    height 50vh
    margin-left 10vw
    margin-top 5vh
    padding 4vw
    border-radius 1vw
    background-color #c16358
    box-shadow: 0px 0px 6px 0px black;
    @media screen and (max-width: 767px)
        margin-left 6.5vw
        width 80vw

.form__container
    height 8vh
    display flex
    flex-direction column
    justify-content space-around
    margin-bottom 3vh

.container__label
    font-weight 500
    font-size 1.1rem
    margin-bottom 1vh

.container__input
    display flex
    flex-wrap wrap
    border none
    outline-color #8b1a0d
    max-width 100%
    min-height 4vh
    border-radius .5vw
    font-size .9rem

button
    padding .5vw 1vw
    border-radius .5vw
    border none
    color white
    font-size 1.25rem

button:disabled
    background-color gray

.form__btn-clear
    background-color #8b1a0d
    margin-right 1vw

.form__btn-save
    background-color #228b22

button:hover,
    cursor pointer
    filter brightness(70%)
</style>
