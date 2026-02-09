import { Product } from "../models/product.model.js";

export const listProductsService = async () => {
  const products = await Product.find();
  return products;
};


export const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

export const listproductsServicePage = async (page, limit) => {
    page = page < 1 ? 1 : page;
    limit = limit > 50 ? 50 : limit;
    const skip = (page - 1) * limit;

    const [products,totalproducts]= await Promise.all([
        Product.find()
        .sort({ _id: -1 })
    ]);