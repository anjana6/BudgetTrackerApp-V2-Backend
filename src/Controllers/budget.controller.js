import resHelper from '../Helpers/resHelper';
import budgetService from '../services/buget.service';

class BudgetController{
    async createBuget(req,res){
        try {
            await budgetService.createBudget(req.body);
            resHelper.created(res);
        } catch (error) {
            console.log(error);
        }
    }
}

export default BudgetController();