const CategoryModel = require('../models').categories;

class CategoryRepository{


    createCategory(body){
        return CategoryModel.create(body);
    }
}

export default CategoryRepository();