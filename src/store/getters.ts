import { wines } from "./types";

const getters = {
  filterWines(state: { wines: wines[] }): wines[] {
    if (state.wines == null) return [];
    const arrayWines: wines[] = state.wines
      .filter((props: wines) => props.wine !== undefined && props.image != null)
      .sort((a, b) => (a.wine < b.wine ? -1 : a.wine > b.wine ? 1 : 0));

    return arrayWines;
  },
};

export default getters;
