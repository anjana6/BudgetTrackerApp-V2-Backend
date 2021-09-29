const BudgetModel = require('../models').budgets;

class BugetRepository{
    createBudget(body){
        return BudgetModel.create(body); 
    }
}

export default new BugetRepository();