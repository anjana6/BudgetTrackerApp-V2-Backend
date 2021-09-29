import budgetRepository from "../Repository/budget.repository";

class BudgetServie{
    createBudget(requestBody){
        return budgetRepository.createBudget(requestBody);
    }

    async fetchMonthlyBudget(){
        const incomeBudget = await budgetRepository.fetchMonthlyBudget('income')
        const income = incomeBudget.reduce((total1, total2) => {
           return total1 + parseFloat(total2.amount);
          }, 0);

          const expenseBudget = await budgetRepository.fetchMonthlyBudget('expense');
          const expense = expenseBudget.reduce((total1,total2) => {
              return total1 + parseFloat(total2.amount);
          },0)
        return {income,expense}
    }

    fetchBudget(budgetType,startDate,endDate){
        return budgetRepository.fetchBudget(budgetType,startDate,endDate)
    }

    async fetchBudgetItem(budgetType,category,startDate,endDate){
        const items = await budgetRepository.fetchBudgetItem(budgetType,category,startDate,endDate);

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