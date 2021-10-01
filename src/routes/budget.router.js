import express from "express";
import budgetController from "../Controllers/budget.controller";

const budgetRoute = express.Router();

budgetRoute.post('/api/budget/',budgetController.createBuget);
budgetRoute.get('/api/budget/month',budgetController.fetchMonthlyBudget);
budgetRoute.get('/api/budget/category',budgetController.fetchBudget);
budgetRoute.get('/api/budget/items/:budgetType/:category',budgetController.fetchBudgetItems);
budgetRoute.get('/api/budget/item/:itemId',budgetController.fetchItemDetails);
budgetRoute.put('/api/budget/item/:itemId',budgetController.updateBudgetItem);
budgetRoute.delete('/api/budget/item/:itemId',budgetController.deleteBudetItem);

export default budgetRoute;
