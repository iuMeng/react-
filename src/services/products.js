import { get } from "../utils/request";

export function getProducts(page) {
  return get("https://api.cat-shop.penkuoer.com/api/v1/products", {
    params: {
      page
    }
  });
}
