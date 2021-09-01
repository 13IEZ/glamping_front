export interface IApplication {
  _id: string;
  title: string;
  productId: string;
  pichId: string;
  startDate: string;
  endDate: string;
  userId: string;
  preview: string;
  rating: number;
  image: Array<string>;
  description: string;
  rent: string;
  status: boolean;
  published: boolean;
  season: string;
  roominess: number;
  electricity: boolean;
  water: boolean;
  road: boolean;
  reviewsQuantity: number;
}
