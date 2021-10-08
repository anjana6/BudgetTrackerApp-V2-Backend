import resHelper from '../Helpers/resHelper';
import budgetService from '../services/buget.service';

class BudgetController{
    async createBuget(req,res){
        try {
            await budgetService.createBudget(req.userId,req.body);
            resHelper.created(res);
        } catch (error) {
            console.log(error);
        }
    }

    async fetchMonthlyBudget(req,res){
        try {
            const response = await budgetService.fetchMonthlyBudget(req.userId);
            resHelper.successCustom(res,response)
        } catch (error) {
            console.log(error)
        }
    }

    async fetchBudget(req,res) {
        try {
            const startDate = req.query.startDate;
            const endDate = req.query.endDate;
            const response = await budgetService.fetchBudget(req.userId,startDate,endDate);
            resHelper.successCustom(res,response)
        } catch (error) {
            console.log(error)
        }
    }

    async fetchBudgetTotal(req,res){
        try {
            const startDate = req.query.startDate;
            const endDate = req.query.endDate;
            const response = await budgetService.fetchBudgetTotal(req.userId,startDate,endDate);
            resHelper.successCustom(res,response)
        } catch (error) {
            console.log(error)
        }
    }

    async fetchBudgetItems(req,res){
        try {
            const budgetType = req.params.budgetType;
            const category = req.params.category;
            const startDate = req.query.startDate;
            const endDate = req.query.endDate;
            const response = await budgetService.fetchBudgetItem(req.userId,budgetType,category,startDate,endDate);
            resHelper.successCustom(res,response)
        } catch (error) {
            console.log(error)
        }
    }

    async fetchItemDetails(req,res){
        try {
            const response = await budgetService.fetchItemDetails(req.body.itemId);
            resHelper.successCustom(res,response);
        } catch (error) {
            console.log(error);
        }
    }

    async updateBudgetItem(req,res){
        try {
            const itemId = req.params.itemId;
            await budgetService.updateBudgetItem(itemId,req.body);
            resHelper.created(res);
        } catch (error) {
            console.log(error)
        }
    }

    async deleteBudetItem(req,res){
        try {
            await budgetService.deleteBudgetItem(req.params.itemId);
            resHelper.created(res);
        } catch (error) {
            console.log(error)
        }
    }

    async fetchBudgetLetestItem(req,res){
        try {
            const response = await budgetService.fetchBudgetLetestItem(req.userId);
            resHelper.successCustom(res,response);
        } catch (error) {
            console.log(error)
        }
    }
}

export default new BudgetController();