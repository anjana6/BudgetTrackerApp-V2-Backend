import express from "express";
import categoryController from "../Controllers/category.controller";

const categoryRoute = express.Router();

categoryRoute.post('/api/category/',categoryController.createCategory);
categoryRoute.put('/api/category/:categoryId',categoryController.updateCategory);
categoryRoute.delete('/api/category/:categoryId',categoryController.deleteCategory);
categoryRoute.get('/api/category/:categoryType',categoryController.fetchCategory);

export default categoryRoute;