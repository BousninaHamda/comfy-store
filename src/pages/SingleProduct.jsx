import { Link, useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const res = await customFetch(`/products/${params.id}`);
  return { product: res.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  return <h1 className="text-4xl">SingleProduct</h1>;
};
export default SingleProduct;
