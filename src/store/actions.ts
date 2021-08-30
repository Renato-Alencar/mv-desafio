import Vue from "vue";
import { getData } from "@/services/wines";
import { Commit } from "vuex";

interface vuexTypes {
  commit: Commit;
}

const actions = {
  async getWines({ commit }: vuexTypes): Promise<void> {
    try {
      const response = await getData();
      commit("setWines", response);
    } catch (error) {
      // Vue.$toast.open({
      //   message: "Erro de Requisição",
      //   position: "top-left",
      //   duration: 1500,
      //   type: "error",
      // });
      const err = error.message;
      throw err;
    }
  },
};

export default actions;
