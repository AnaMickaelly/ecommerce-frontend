import { BobResponse } from "../../services/bob/types";

export const handlerFilteredByID = (data: BobResponse, id: number) => {
  const dataFiltered = data.filter((product) => product.id === id);

  return dataFiltered[0];
};

export const getFirstFourProducts = (products: BobResponse): BobResponse => {
  return products.slice(0, 4);
};
