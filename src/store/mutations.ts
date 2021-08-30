import { wines, stateProps } from "./types";

const mutations = {
  setWines(state: stateProps, payload: wines[]): void {
    state.wines = payload;
  },
};

export default mutations;
