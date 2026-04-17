import raw from "./reviews.json";

export type Review = {
  name: string;
  city?: string;
  rating: number;
  text: string;
  service?: string;
  platform?: string;
};

export const reviewsData: Review[] = raw as Review[];
