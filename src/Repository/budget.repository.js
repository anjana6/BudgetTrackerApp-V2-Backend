import moment from 'moment-timezone';
import { Op } from 'sequelize';

const BudgetModel = require('../models').budgets;
const sequelize = require('sequelize');

class BugetRepository{
    createBudget(body){
        console.log(body);
        return BudgetModel.create(body); 
    }

    fetchMonthlyBudget(budgetType){
        return BudgetModel.findAll({where: {
            budget_type: budgetType,
            date: {
                [Op.between]: [moment().startOf('month').format(),moment().endOf('month').format()]
            }
        }})
    }

    fetchBudget(budgetType,startDate,endDate){
        return BudgetModel.findAll({where: {
            budget_type: budgetType,
            date: {
               [Op.between]: [moment(new Date(startDate)).startOf('day').format(),moment(new Date(endDate)).endOf('day').format()]
            }
        },
        order: [
            ['category', 'ASC']
        ]})
    }

    fetchBudgetItem(budgetType,category,startDate,endDate){
        console.log(startDate,endDate)
        return BudgetModel.findAll({where: {
            budget_type: budgetType,
            category: category,
            date: {
                    [Op.between]: [moment(new Date(startDate)).startOf('day').format(),moment(new Date(endDate)).endOf('day').format()]
                 }
        }})
    }

    fetchItembyItemId(itemId){
        return BudgetModel.findOne({id: itemId});
    }

    updateBudgetItem(itemId,body){
        return BudgetModel.update(body,{where:{ id: itemId}})
    }

    deleteItemById(itemId){
        return BudgetModel.destroy({where: {id: itemId}})
    }

}

export default new BugetRepository();