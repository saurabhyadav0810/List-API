import { listProductsService ,createProductService } from "../services/product.service.js";

export const listProductsController = async (req, res, next) => {
  try {
    const products = await listProductsService();

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};



export const createProductController = async (req, res, next) => {
  try {
    const product = await createProductService(req.body);

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};