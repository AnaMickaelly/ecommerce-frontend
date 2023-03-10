export type BobObjectResponse = {
  id: number;
  name: string;
  category: string;
  price: number;
  available: boolean;
  photo: string;
};

export type BobResponse = Array<BobObjectResponse>;
