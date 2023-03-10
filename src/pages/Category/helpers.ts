import { BobResponse } from "../../services/bob/types";

export const handlerFilterDataByGender = (data: BobResponse, type: string) => {
  return data.filter((product) => product.category === type);
};
