import budgetRepository from "../Repository/budget.repository";

class BudgetServie{
    createBudget(requestBody){
        budgetRepository.createBudget(requestBody);
    }
}

export default new BudgetServie();