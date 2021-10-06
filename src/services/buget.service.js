import budgetRepository from "../Repository/budget.repository";

class BudgetServie{
    createBudget(userId,requestBody){
        const {budget_type,category,date,title,amount} = requestBody;
        const body = {
            user_id: userId,
            budget_type,
            category,
            date,
            title,
            amount
        }
        return budgetRepository.createBudget(body);
    }

    async fetchMonthlyBudget(userId){
        const incomeBudget = await budgetRepository.fetchMonthlyBudget('income',userId)
        const income = incomeBudget.reduce((total1, total2) => {
           return total1 + parseFloat(total2.amount);
          }, 0);

          const expenseBudget = await budgetRepository.fetchMonthlyBudget('expense',userId);
          const expense = expenseBudget.reduce((total1,total2) => {
              return total1 + parseFloat(total2.amount);
          },0)
        return {income,expense}
    }

    async fetchBudget(userId,startDate,endDate){
        const expense =await budgetRepository.fetchBudget('expense',userId,startDate,endDate);
        const income = await budgetRepository.fetchBudget('income',userId,startDate,endDate)
        return  {expense,income}
    }

    async fetchBudgetItem(userId,budgetType,category,startDate,endDate){
        const items = await budgetRepository.fetchBudgetItem(userId,budgetType,category,startDate,endDate);

        const total = items.reduce((total1, total2) => {
            return total1 + parseFloat(total2.amount);
           }, 0);

        return {items,total}
    }

    fetchItemDetails(itemId){
        return budgetRepository.fetchItembyItemId(itemId);
    }

    updateBudgetItem(itemId,requestBody){
        return budgetRepository.updateBudgetItem(itemId,requestBody)
    }

    deleteBudgetItem(itemId){
        return budgetRepository.deleteItemById(itemId);
    }
    
}

export default new BudgetServie();