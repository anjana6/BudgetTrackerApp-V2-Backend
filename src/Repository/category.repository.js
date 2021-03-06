const CustomCategoryModel = require('../models').custom_categories;

class CategoryRepository{
    createCategory(body){
        return CustomCategoryModel.create(body);
    }

    fetchCategory(userId,categoryType){
        return CustomCategoryModel.findAll({where: {
            user_id: userId,
            category_type: categoryType
        }});
    }

    updateCategory(categoryId,body){
        return CustomCategoryModel.update(body,{where: {id: categoryId}});
    }

    deleteCategory(categoryId){
        return CustomCategoryModel.destroy({where: {id: categoryId}})
    }
}

export default new CategoryRepository();