import { wines } from "@/store/types";

function searchbar(arrayObject: wines[], voidString: string): wines[] {
  return arrayObject.filter((card: wines) => {
    const cardWinery = card.winery
      .toLowerCase()
      .includes(voidString.toLowerCase());
    const cardWine = card.wine.toLowerCase().includes(voidString.toLowerCase());

    return cardWinery || cardWine;
  });
}

export default searchbar;
