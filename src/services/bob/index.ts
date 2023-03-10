import axios from "axios";
import { BobResponse } from "./types";

type BobResponseData = {
  data: BobResponse;
};

export const getProducts = async (): Promise<BobResponse> => {
  const { data }: BobResponseData = await axios.get(
    "https://cors-anywhere.herokuapp.com/http://bob-teste-front-end.herokuapp.com/api/products.json",
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Content-Type": "application/json;charset=UTF-8",
      },
      withCredentials: false,
    }
  );

  return data;
};
