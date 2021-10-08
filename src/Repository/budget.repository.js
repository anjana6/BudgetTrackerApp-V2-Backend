import moment from 'moment-timezone';
import { Op } from 'sequelize';

const BudgetModel = require('../models').budgets;
const sequelize = require('sequelize');

class BugetRepository{
    createBudget(body){
        console.log(body);
        return BudgetModel.create(body); 
    }

    fetchMonthlyBudget(budgetType,userId){
        return BudgetModel.findAll({where: {
            budget_type: budgetType,
            user_id: userId,
            date: {
                [Op.between]: [moment().startOf('month').format(),moment().endOf('month').format()]
            }
        }})
    }

    fetchBudgetTotal(budgetType,userId,startDate,endDate){
        return BudgetModel.findAll({where: {
            budget_type: budgetType,
            user_id: userId,
            date: {
                [Op.between]: [moment(Number(startDate)).startOf('day').format(),moment(Number(endDate)).endOf('day').format()]
            }
        }})
    }

    fetchBudget(budgetType,userId,startDate,endDate){
        return BudgetModel.findAll({
            attributes: [
                // specify an array where the first element is the SQL function and the second is the alias
                [sequelize.fn('DISTINCT', sequelize.col('category')) ,'category'],
        
            ],
            where: {
            user_id: userId,
            budget_type: budgetType,
            date: {
               [Op.between]: [moment(Number(startDate)).startOf('day').format(),moment(Number(endDate)).endOf('day').format()]
            }
        },
        order: [
            ['category', 'ASC']
        ]})
    }

    fetchBudgetItem(userId,budgetType,category,startDate,endDate){
        return BudgetModel.findAll({where: {
            user_id: userId,
            budget_type: budgetType,
            category: category,
            date: {
                    [Op.between]: [moment(Number(startDate)).startOf('day').format(),moment(Number(endDate)).endOf('day').format()]
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

    fetchBudgetLetestItem(userId){
        return BudgetModel.findAll({
            where: {user_id: userId},
            order: [
                ['date', 'ASC']
            ],
            limit: 5
        })
    }

}

export default new BugetRepository();