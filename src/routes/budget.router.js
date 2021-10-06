import express from "express";
import budgetController from "../Controllers/budget.controller";
import authMiddleware from "../middleware/auth.middleware";

const budgetRoute = express.Router();

budgetRoute.post('/api/budget/',authMiddleware.grantAccess,budgetController.createBuget);
budgetRoute.get('/api/budget/month',authMiddleware.grantAccess,budgetController.fetchMonthlyBudget);
budgetRoute.get('/api/budget/category',authMiddleware.grantAccess,budgetController.fetchBudget);
budgetRoute.get('/api/budget/items/:budgetType/:category',authMiddleware.grantAccess,budgetController.fetchBudgetItems);
budgetRoute.get('/api/budget/item/:itemId',authMiddleware.grantAccess,budgetController.fetchItemDetails);
budgetRoute.put('/api/budget/item/:itemId',authMiddleware.grantAccess,budgetController.updateBudgetItem);
budgetRoute.delete('/api/budget/item/:itemId',authMiddleware.grantAccess,budgetController.deleteBudetItem);

export default budgetRoute;
