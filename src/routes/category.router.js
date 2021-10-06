import express from "express";
import categoryController from "../Controllers/category.controller";
import authMiddleware from "../middleware/auth.middleware";

const categoryRoute = express.Router();

categoryRoute.post('/api/category/',authMiddleware.grantAccess,categoryController.createCategory);
categoryRoute.put('/api/category/:categoryId',authMiddleware.grantAccess,categoryController.updateCategory);
categoryRoute.delete('/api/category/:categoryId',authMiddleware.grantAccess,categoryController.deleteCategory);
categoryRoute.get('/api/category/:categoryType',authMiddleware.grantAccess,categoryController.fetchCategory);

export default categoryRoute;