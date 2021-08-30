export interface stateProps {
  wines: wines[];
}

export interface wines {
  winery: string;
  wine: string;
  rating: {
    average: string | number;
    reviews: string;
  };
  location: string;
  image: string;
  id: number | null;
}
